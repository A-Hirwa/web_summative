const API_URL = 'https://api.api-ninjas.com/v1/exercises';
const API_KEY = "I7D8/88SLGSPQJQcsTNtmg==8HMDmltaZeAmLhyF"; 

let chosenDifficulty = "beginner";
let chosenExerciseType = "";
let chosenMuscleGroup = "";
let minutesAvailable = 10;

// === Handle slider ===
let slider = document.querySelector(".slider");
let val = document.getElementById("time-val");

slider.addEventListener("input", function () {
  val.textContent = this.value;
  minutesAvailable = parseInt(this.value);
});

// === Difficulty selection ===
function level(btn) {
  chosenDifficulty = btn.textContent.toLowerCase();
}

// === Exercise or muscle group selection ===
function exercise(btn) {
  let value = btn.textContent.toLowerCase();

  if (value === "cardio" || value === "stretching") {
    chosenExerciseType = value;
    chosenMuscleGroup = "";
  } else if (value === "all") {
    chosenExerciseType = "strength";
    chosenMuscleGroup = "all";
  } else {
    chosenExerciseType = "strength";
    chosenMuscleGroup = value;
  }
}

// === Show target muscle section ===
function unhide(id) {
  document.getElementById(id).style.display = "block";
}

// === Fetch exercise routine ===
function fetchRoutine() {
  const url = "https://api.api-ninjas.com/v1/exercises";
  const key = "YOUR_API_KEY"; // Replace with your actual API key

  let request = `${url}?difficulty=${chosenDifficulty}`;

  if (chosenExerciseType && chosenExerciseType !== "strength") {
    request += `&type=${chosenExerciseType}`;
  }

  // Always include type=strength when using muscle filter
  if (chosenMuscleGroup && chosenMuscleGroup !== "all") {
    request += `&type=strength&muscle=${chosenMuscleGroup}`;
  }

  fetch(request, {
    headers: { "X-Api-Key": key }
  })
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("results");
      document.body.style.display = "flex";
      document.body.style.flexDirection = "column";

      container.innerHTML = `<p>Here's a recommended workout for you:</p><div id="all"></div>`;
      const all = document.getElementById("all");

      const interest = document.getElementById("interest");
      const time = document.getElementById("time");
      interest.style.display = "none";
      time.style.display = "none";
      container.style.display = "flex";

      if (!Array.isArray(data) || data.length === 0) {
        all.innerHTML = `<p>No exercises found. Try a different combination.</p>`;
        return;
      }

      data.sort(() => Math.random() - 0.5); // shuffle results
      let count = Math.min(Math.floor(minutesAvailable / 5), data.length);

      for (let i = 0; i < count; i++) {
        let ex = data[i];
        all.innerHTML += `
          <div class="answer">
            <h3>${ex.name}</h3>
            <p><strong>Muscle:</strong> ${ex.muscle}</p>
            <p><strong>Type:</strong> ${ex.type}</p>
            <p><strong>Difficulty:</strong> ${ex.difficulty}</p>
            <p>${ex.instructions}</p>
          </div>`;
      }
    })
    .catch(error => {
      console.error("Error loading exercises:", error);
      document.getElementById("results").innerHTML = "<p>There was a problem loading exercises.</p>";
    });
}
