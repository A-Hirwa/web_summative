require('dotenv').config();
const apiKey = process.env.apiKey;
const API_URL = 'https://api.api-ninjas.com/v1/exercises'

let difficulty = ""
let equipment_choice = ""
let equipment = []
let exercise_type = ""
let muscle_type = []
let duration = 0
let space = ""

function get_time(val) {
  document.getElementById("keeper").textContent = val
  duration = val
  console.log(duration)
}

function spaced(btn, id){
  space = btn.textContent.toLowerCase()
  on_or_off(btn, id, space)
  console.log(space)
}

function unhide_tool(btn, id) {
  let active = btn.classList.contains("nothid")
  let equipments = (btn.textContent).toLowerCase()
  on_or_off(btn, id, equipments)
  if (!active) {
    btn.classList.add("nothid")
    document.getElementById("tools").style.display = "flex"
    document.getElementById("new").style.display = "block"
    document.getElementById("old").style.display = "none"
  } else {
    btn.classList.remove("nothid")
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
    btn.style.border = "2px white solid"
    btn.style.color = "white"
    document.getElementById("tools").style.display = "none"
    document.getElementById("new").style.display = "none"
    document.getElementById("old").style.display= "block"
  }
}

function unhide(btn, id){
  let active = btn.classList.contains("nothid")
  let strength = (btn.textContent).toLowerCase()
  on_or_off(btn, id, strength)
  if (!active) {
    btn.classList.add("nothid")
    document.getElementById("equiped").style.display = "flex"
    document.getElementById("hidden").style.display = "block"
    document.getElementById("next").style.display = "none"
  } else {
    btn.classList.remove("nothid")
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
    btn.style.border = "2px white solid"
    btn.style.color = "white"
    document.getElementById("equiped").style.display = "none"
    document.getElementById("hidden").style.display = "none"
    document.getElementById("next").style.display = "block"
  }
}
function targeted(btn, id){
  let active = btn.classList.contains("nothid")
  let strength = (btn.textContent).toLowerCase()
  on_or_off(btn, id, strength)
  if (!active) {
    btn.classList.add("nothid")
    document.getElementById("target").style.display = "flex"
    document.getElementById("hide").style.display = "block"
    document.getElementById("tohide").style.display = "none"
  } else {
    btn.classList.remove("nothid")
    btn.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
    btn.style.border = "2px white solid"
    btn.style.color = "white"
    document.getElementById("target").style.display = "none"
    document.getElementById("hide").style.display = "none"
    document.getElementById("tohide").style.display = "flex"
  }
}

function on_or_off(btn, id, ans) {
  const isActive = btn.classList.contains("active")
  let container = document.querySelectorAll(`#${id} button`)
  if (!isActive) {
    btn.classList.add("active")
    for (let i = 0; i < container.length; i++) {
        let button = container[i]
        if (button.textContent.toLowerCase() != ans) {
            button.disabled = true
            button.style.backgroundColor = "rgba(202, 202, 202, 0.558)"
            button.style.color = "rgba(255, 255, 255, 0.85)"
            button.style.border = "none"
        }else {
          button.style.backgroundColor = "black"
          button.style.color = "white"
          button.style.border = "none"
        }
    } 
    return true
  } else {
        btn.classList.remove("active")
        for (let i = 0; i < container.length; i++) {
          let button = container[i]
          button.disabled = false
          button.style.border = "2px white solid"
          button.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
          button.style.color = "white"
    } 
    return false
}
}

function level(btn, id) {
    difficulty = (btn.textContent).toLowerCase()
    on_or_off(btn, id, difficulty)
    console.log(difficulty)
}

function equip(btn, id) {
    equipment_choice = btn.textContent.toLowerCase()
    on_or_off(btn, id, equipment_choice)
    console.log(equipment_choice)
}

function etype(btn, id) {
    exercise_type = btn.textContent.toLowerCase()
    on_or_off(btn, id, exercise_type)
    console.log(exercise_type)
}
function muscle(btn, id) {
    let choice = btn.textContent.toLowerCase()
    const isActive = btn.classList.contains("active")
    if (id != undefined && choice=="all"){
      let result = on_or_off(btn, id, choice)
      if (result == true) {
        muscle_type.length = 0
        muscle_type.push('abdominals', 'chest', 'biceps', 'glutes', 'calves', 'lats')
        let container = document.querySelectorAll(`#${id} button`);
        for (let i = 0; i < container.length; i++) {
          const button = container[i];
          if (button.textContent.toLowerCase() !== "all") {
            button.classList.remove("active");
            button.style.backgroundColor = "rgba(202, 202, 202, 0.558)"
            button.style.color = "rgba(255, 255, 255, 0.85)"
            button.style.border = "none"
          }
        }
      } else {
        muscle_type.length = 0
      }
  } else {
    if (!isActive) {
      btn.classList.add("active")
      btn.style.backgroundColor = "black"
      btn.style.border = "none"
      btn.style.color = "white"
      muscle_type.push(choice)
      }
    else {
      let num = muscle_type.indexOf(choice)
      muscle_type.splice(num, 1)
      btn.classList.remove("active")
      btn.style.border = "2px white solid"
      btn.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
      btn.style.color = "white"
      }}

    console.log(muscle_type)
  }
function tooled(btn, id) {
    let choice = btn.textContent.toLowerCase()
    const isActive = btn.classList.contains("active")
    if (id != undefined && choice=="all"){
      let result = on_or_off(btn, id, choice)
      if (result == true) {
        equipment.length = 0
        equipment.push('dumbbells', 'jump rope', 'resistance bands', 'pull-up bar', 'cable machine')
        let container = document.querySelectorAll(`#${id} button`);
        for (let i = 0; i < container.length; i++) {
          const button = container[i];
          if (button.textContent.toLowerCase() !== "all") {
            button.classList.remove("active");
            button.style.backgroundColor = "rgba(202, 202, 202, 0.558)"
            button.style.color = "rgba(255, 255, 255, 0.85)"
            button.style.border = "none"
          }
        }
      } else {
        equipment.length = 0
      }
  } else if(choice=="none"){
     on_or_off(btn, id, choice)
     equipment.length = 0
  }else {
    if (!isActive) {
      btn.classList.add("active")
      btn.style.backgroundColor = "black"
      btn.style.border = "none"
      btn.style.color = "white"
      if(choice=="foam roll"){
        choice = "foam_roll"
      } else if (choice=="curl bar"){
        choice = "e-z_curl_bar"
      }
      equipment.push(choice)
      }
    else {
      if(choice=="foam roll"){
        choice = "foam_roll"
      } else if (choice=="curl bar"){
        choice = "e-z_curl_bar"
      }
      let num = equipment.indexOf(choice)
      equipment.splice(num, 1)
      btn.classList.remove("active")
      btn.style.border = "2px white solid"
      btn.style.backgroundColor = "rgba(255, 255, 255, 0.039)"
      btn.style.color = "white"
      }}

    console.log(equipment)
  }

  function estimateDuration(exercise) {
    let base;
    switch (exercise.type.toLowerCase()) {
      case "cardio": base = 3; break;
      case "stretching": base = 1.5; break;
      case "strength":
      default: base = 2;
    }
    if (exercise.difficulty === "intermediate") base += 0.5;
    if (exercise.difficulty === "expert") base += 1;
  
    const variation = Math.random();
    return Math.round((base + variation) * 2) / 2; // Round to nearest 0.5
  }
  
  const stretchingPool = [
    {
      name: "Neck Rolls",
      instructions: "Gently roll your neck in circles for 30 seconds each direction.",
    },
    {
      name: "Arm Circles",
      instructions: "Rotate your arms forward and backward to loosen the shoulders.",
    },
    {
      name: "Toe Touch",
      instructions: "Reach for your toes with knees soft to stretch the hamstrings.",
    },
    {
      name: "Cat-Cow Stretch",
      instructions: "Alternate arching and rounding your back on hands and knees.",
    },
    {
      name: "Seated Forward Fold",
      instructions: "Sit tall and fold forward to stretch the spine and legs.",
    }
  ];
  
  function getRandomStretch(label) {
    const random = stretchingPool[Math.floor(Math.random() * stretchingPool.length)];
    return {
      name: `${label}: ${random.name}`,
      type: "stretching",
      difficulty: "beginner",
      duration: 1,
      instructions: random.instructions
    };
  }
  
  function createWaterBreak() {
    return {
      name: "Water Break",
      type: "rest",
      duration: 0.5,
      instructions: "Take a sip of water and catch your breath.",
      isBreak: true
    };
  }
  
  function showInstruction(btn) {
    const instruction = btn.parentElement.querySelector('.exercise-instruction');
    const currentDisplay = window.getComputedStyle(instruction).display;
    instruction.style.display = currentDisplay === "none" ? "block" : "none";
  }


  const ALL_MUSCLES = [ 
    "abdominals", "abductors", "adductors", "biceps", "calves", "chest",
    "forearms", "glutes", "hamstrings", "lats", "lower_back", "middle_back",
    "neck", "quadriceps", "traps", "triceps"
  ];
  
  async function getRoutine() {
    document.getElementById('all').style.display = "none";
    document.getElementById('load').style.display = "flex";
  
    if (!exercise_type && !difficulty && (!muscle_type || muscle_type.length === 0)) {
      localStorage.setItem("generatedWorkout", `
        <p id="phrase">Not enough criteria selected.<br>Please choose at least exercise type or difficulty to generate a workout routine.</p>
      `);
      window.location.href = "results.html";
      return;
    }
  
    const warmUp = getRandomStretch("Warm-Up");
    const coolDown = getRandomStretch("Cool-Down");
    let routine = [warmUp];
    let totalTime = warmUp.duration;
  
    if ((exercise_type === "cardio" || exercise_type === "stretching") && difficulty === "expert") {
      difficulty = "intermediate";
    }
  
    try {
      const targetExerciseCount = Math.ceil((duration - 2) / 2);
      let fetchedExercises = await fetchAllExercises();
  
      if (fetchedExercises.length < 0.75 * targetExerciseCount) {
        console.warn("Too few exercises found for filters.");
      }
  
      if (fetchedExercises.length === 0) {
        const html = "<p id='phrase'>Too few exercises for your selection. Try changing the filters.</p>";
        localStorage.setItem("generatedWorkout", html);
        window.location.href = "results.html";
        return;
      }
  
      let used = new Set();
      let index = 0;
      let breakCounter = 0;
      let looped = false;
  
      while (totalTime + coolDown.duration < duration) {
        if (index >= fetchedExercises.length) {
          index = 0;
          used.clear();
          fetchedExercises = shuffle([...fetchedExercises]);
          looped = true;
        }
  
        const ex = fetchedExercises[index];
        index++;
  
        if (!looped && used.has(ex.name)) continue;
        if (routine[routine.length - 1]?.name === ex.name) continue;
  
        used.add(ex.name);
  
        const timeLeft = duration - totalTime - coolDown.duration;
        const dur = Math.min(3, Math.max(1, Math.floor(Math.random() * 3) + 1));
        if (timeLeft < 1) break;
  
        const actualDuration = Math.min(dur, timeLeft);
        ex.duration = actualDuration;
        routine.push(ex);
        totalTime += actualDuration;
  
        breakCounter++;
        if (breakCounter % 4 === 0 && totalTime + 0.5 + coolDown.duration <= duration) {
          routine.push({
            name: "Water Break",
            duration: "30 sec",
            instructions: "Take a short sip of water and catch your breath!"
          });
          totalTime += 0.5;
        }
      }
  
      routine.push(coolDown);
  
      const html = `
        <p id="phrase">Here is a workout routine tailored to your requirements!</p>
        <div id="workout-container">
          ${routine.map(ex => `
            <div class="exercise">
              <h3>${ex.name}</h3>
              <button class="duration">${typeof ex.duration === "number" ? `${ex.duration} min` : ex.duration}</button>
              <button class="btn-instruction" onclick="showInstruction(this)">Instructions</button>
              <div class="exercise-instruction"><p>${ex.instructions}</p></div>
            </div>
          `).join('')}
        </div>`;
  
      localStorage.setItem("generatedWorkout", html);
      window.location.href = "results.html";
  
    } catch (error) {
      console.error("❌ Error fetching workout:", error);
      const html = "<p id='phrase'>Something went wrong. Please try again.</p>";
      localStorage.setItem("generatedWorkout", html);
      window.location.href = "results.html";
    }
  }
  
  async function fetchAllExercises() {
    const banned = ["swimming", "skating"];
    const includeTrail = space === "outdoor";
    const results = [];
    const seen = new Set();
  
    for (let offset = 0; offset <= 60; offset += 30) {
      try {
        const url = `${API_URL}?type=${exercise_type}&difficulty=${difficulty}&offset=${offset}`;
        const res = await fetch(url, { headers: { 'X-Api-Key': apiKey } });
        if (!res.ok) continue;
  
        const data = await res.json();
        if (!Array.isArray(data)) continue;
  
        for (let ex of data) {
          const name = ex.name.toLowerCase();
          const eq = ex.equipment.toLowerCase();
          const isBodyOnly = eq === "body_only" || eq === "none";
          const isBanned = banned.some(b => name.includes(b));
          const isTrail = name.includes("trail");
  
          if (!includeTrail && (isTrail || isBanned)) continue;
          if (seen.has(name)) continue;
  
          if (exercise_type === "strength") {
            if (space === "gym") {
              results.push(ex);
            } else if (equipment_choice === "gym package") {
              if (!eq.includes("machine") && !eq.includes("other")) results.push(ex);
            } else if (equipment.length === 0) {
              if (isBodyOnly) results.push(ex);
            } else if (equipment.includes(eq)) {
              results.push(ex);
            }
          } else {
            if (space === "gym" || space === "outdoor") {
              results.push(ex);
            } else if (isBodyOnly) {
              results.push(ex);
            }
          }
  
          seen.add(name);
        }
      } catch (err) {
        console.error(`❌ Error during fetch at offset ${offset}:`, err);
      }
    }
  
    return results;
  }
  
  function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
  }
  
       