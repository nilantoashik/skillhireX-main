import React, { useState, useEffect } from 'react';
import {
  Bot, MessageSquare, Send, Mic, MicOff, Play, Pause,
  CheckCircle, AlertCircle, Sparkles, Clock
} from 'lucide-react';

export default function AIInterviewBot({ interviewId, onClose }) {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [feedback, setFeedback] = useState({});
  const [isRecording, setIsRecording] = useState(false);
  const [currentResponse, setCurrentResponse] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(true);

  useEffect(() => {
    generateQuestions();
  }, []);

  const generateQuestions = async () => {
    try {
      const response = await fetch(`/api/interviews/${interviewId}/generate-questions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({})
      });
      const data = await response.json();
      setQuestions(data.questions);
      setIsGenerating(false);
    } catch (error) {
      console.error('Error generating questions:', error);
      setIsGenerating(false);
    }
  };

  const analyzeResponse = async (question, response) => {
    setIsAnalyzing(true);
    try {
      const res = await fetch(`/api/interviews/${interviewId}/analyze-response`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, response })
      });
      const data = await res.json();
      setFeedback(prev => ({ ...prev, [currentQuestionIndex]: data.feedback }));
    } catch (error) {
      console.error('Error analyzing response:', error);
    }
    setIsAnalyzing(false);
  };

  const handleSubmitResponse = () => {
    if (currentResponse.trim()) {
      const newResponses = { ...responses, [currentQuestionIndex]: currentResponse };
      setResponses(newResponses);
      analyzeResponse(questions[currentQuestionIndex], currentResponse);
      setCurrentResponse('');
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real implementation, this would start/stop speech recognition
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Bot className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">AI Interview Assistant</h2>
                <p className="text-blue-100">Powered by Apriora AI</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex h-[600px]">
          {/* Questions Panel */}
          <div className="w-1/3 bg-gray-50 p-6 border-r border-gray-200">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              Interview Questions
            </h3>

            {isGenerating ? (
              <div className="flex items-center gap-2 text-gray-600">
                <div className="animate-spin w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                Generating questions...
              </div>
            ) : (
              <div className="space-y-3">
                {questions.map((question, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-xl cursor-pointer transition-all ${
                      index === currentQuestionIndex
                        ? 'bg-blue-100 border-2 border-blue-300'
                        : responses[index]
                        ? 'bg-green-50 border border-green-200'
                        : 'bg-white border border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    <div className="flex items-center gap-2">
                      {responses[index] ? (
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      ) : index === currentQuestionIndex ? (
                        <Clock className="w-4 h-4 text-blue-600" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                      )}
                      <span className="text-sm font-medium text-gray-900">
                        Question {index + 1}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {question}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Main Interview Area */}
          <div className="flex-1 p-6 flex flex-col">
            {/* Current Question */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 rounded-xl">
                  <Sparkles className="w-5 h-5 text-blue-600" />
                </div>
                <span className="font-semibold text-gray-900">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              </div>
              <p className="text-lg text-gray-900 leading-relaxed">
                {questions[currentQuestionIndex] || 'Loading question...'}
              </p>
            </div>

            {/* Response Input */}
            <div className="flex-1 space-y-4">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 focus-within:border-blue-500 transition-colors">
                <textarea
                  value={currentResponse}
                  onChange={(e) => setCurrentResponse(e.target.value)}
                  placeholder="Type your response here... or use voice input"
                  className="w-full h-32 resize-none border-none outline-none text-gray-900 placeholder-gray-500"
                  disabled={isRecording}
                />
                <div className="flex items-center justify-between mt-4">
                  <button
                    onClick={toggleRecording}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all ${
                      isRecording
                        ? 'bg-red-100 text-red-700 hover:bg-red-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                    {isRecording ? 'Stop Recording' : 'Voice Input'}
                  </button>
                  <button
                    onClick={handleSubmitResponse}
                    disabled={!currentResponse.trim() || isAnalyzing}
                    className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-all"
                  >
                    {isAnalyzing ? (
                      <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
                    ) : (
                      <Send className="w-4 h-4" />
                    )}
                    {isAnalyzing ? 'Analyzing...' : 'Submit Response'}
                  </button>
                </div>
              </div>

              {/* AI Feedback */}
              {feedback[currentQuestionIndex] && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-900">AI Feedback</span>
                  </div>
                  <p className="text-green-800 text-sm leading-relaxed">
                    {feedback[currentQuestionIndex]}
                  </p>
                </div>
              )}

              {/* Progress */}
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Interview Progress</span>
                  <span className="text-sm text-gray-600">
                    {Object.keys(responses).length} / {questions.length} completed
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(Object.keys(responses).length / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
