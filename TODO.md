# TODO: Fix Profile Issues and Add Recruiter Features

## Issues to Fix:
- [ ] Profile data not showing after signin
- [x] No role selection in signup (Employer/Recruiter)
- [ ] Recruiters can't post/edit job posts

## Tasks:
- [x] Update SignUp.jsx: Add role selection (Employer/Recruiter) with radio buttons
- [x] Update SignIn.jsx: Ensure all profile data is properly fetched and used from API response
- [x] Update Profile.jsx: Add useEffect to fetch profile data from backend on component mount
- [x] Update Profile.jsx: Add job posting interface for recruiters
- [x] Update backend/routes/userRoutes.js: Ensure role is properly handled in registration
- [x] Create backend/routes/jobRoutes.js: Add POST route for job creation
- [x] Update backend/server.js: Include jobRoutes
- [ ] Test role selection in signup
- [ ] Test profile data persistence after signin
- [ ] Test job posting functionality for recruiters
- [x] Fix backend OAuth configuration (missing client IDs)
