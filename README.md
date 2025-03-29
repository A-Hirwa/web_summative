Time Fit - Workout Routine Generator
Time Fit is a web-based workout generator that creates exercise routines based on user-selected criteria like workout duration, difficulty level, type (cardio, strength, stretching), muscles targeted, and available equipment. 

Features
 Choose your workout duration (from 5 to 120 minutes)

 Select exercise type: strength, cardio, or stretching

 Pick specific muscles to target (e.g., chest, glutes, biceps)

 Choose equipment (or "don't care" to include everything except machines)

Automatically includes:

1-minute warm-up and cool-down

Water breaks every 4 exercises



 Smart randomization: ensures variety and avoids repeating exercises until needed

 Uses the API Ninjas Exercise API for fetching real exercises

Optimized for speed when API calling

File Structure
bash
Copy
Edit
TimeFit/
│
├── index.html           # Landing and selection page
├── results.html         # Workout display page
├── script.js            # Main logic: fetching, filtering, rendering
├── style.css            # Styling and animations
├── README.md            # This file
How It Works
User selects duration, workout space, difficulty, type, and optionally muscles or equipment.

Example Tech Stack
HTML, CSS, JavaScript

FontAwesome for icons

API Ninjas for real-time exercise data