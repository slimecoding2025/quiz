// Quiz Data
// Quiz Data
const mathQuestions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is 10 * 5?", options: ["50", "100", "15"], answer: "50" },
    { question: "What is 15 - 7?", options: ["6", "8", "9"], answer: "8" },
    { question: "What is 12 / 3?", options: ["2", "4", "6"], answer: "4" },
    { question: "What is 9 squared?", options: ["81", "72", "90"], answer: "81" },
    { question: "What is the square root of 64?", options: ["6", "8", "10"], answer: "8" },
    { question: "What is 3 * 7?", options: ["21", "24", "18"], answer: "21" },
    { question: "What is 20 + 30?", options: ["40", "50", "60"], answer: "50" },
    { question: "What is 100 - 45?", options: ["55", "65", "75"], answer: "55" },
    { question: "What is 8 * 9?", options: ["72", "81", "64"], answer: "72" },
    { question: "What is 144 / 12?", options: ["10", "12", "14"], answer: "12" },
    { question: "What is 5 cubed?", options: ["125", "100", "150"], answer: "125" },
    { question: "What is 7 * 8?", options: ["56", "64", "72"], answer: "56" },
    { question: "What is 25 + 35?", options: ["50", "60", "70"], answer: "60" },
    { question: "What is 90 - 30?", options: ["50", "60", "70"], answer: "60" },
    { question: "What is 12 * 12?", options: ["144", "132", "156"], answer: "144" },
    { question: "What is 200 / 10?", options: ["10", "20", "30"], answer: "20" },
    { question: "What is 6 * 7?", options: ["42", "49", "56"], answer: "42" },
    { question: "What is 50 + 50?", options: ["100", "110", "120"], answer: "100" },
    { question: "What is 75 - 25?", options: ["40", "50", "60"], answer: "50" },
    { question: "What is 9 * 6?", options: ["54", "63", "72"], answer: "54" },
    { question: "What is 81 / 9?", options: ["9", "8", "7"], answer: "9" },
    { question: "What is 4 * 5?", options: ["20", "25", "30"], answer: "20" },
    { question: "What is 60 + 40?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 120 - 60?", options: ["50", "60", "70"], answer: "60" },
    { question: "What is 11 * 11?", options: ["121", "132", "144"], answer: "121" },
    { question: "What is 169 / 13?", options: ["11", "12", "13"], answer: "13" },
    { question: "What is 8 * 7?", options: ["56", "64", "72"], answer: "56" },
    { question: "What is 45 + 55?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 150 - 75?", options: ["65", "75", "85"], answer: "75" },
    { question: "What is 12 * 5?", options: ["50", "60", "70"], answer: "60" },
    { question: "What is 225 / 15?", options: ["15", "16", "17"], answer: "15" },
    { question: "What is 7 * 9?", options: ["63", "72", "81"], answer: "63" },
    { question: "What is 80 + 20?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 200 - 100?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 13 * 13?", options: ["169", "182", "196"], answer: "169" },
    { question: "What is 256 / 16?", options: ["16", "17", "18"], answer: "16" },
    { question: "What is 6 * 8?", options: ["48", "56", "64"], answer: "48" },
    { question: "What is 70 + 30?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 180 - 90?", options: ["80", "90", "100"], answer: "90" },
    { question: "What is 14 * 14?", options: ["196", "182", "210"], answer: "196" },
    { question: "What is 289 / 17?", options: ["17", "18", "19"], answer: "17" },
    { question: "What is 5 * 12?", options: ["50", "60", "70"], answer: "60" },
    { question: "What is 90 + 10?", options: ["90", "100", "110"], answer: "100" },
    { question: "What is 300 - 150?", options: ["140", "150", "160"], answer: "150" },
    { question: "What is 15 * 15?", options: ["225", "250", "275"], answer: "225" },
    { question: "What is 324 / 18?", options: ["18", "19", "20"], answer: "18" },
    { question: "What is 9 * 8?", options: ["72", "81", "90"], answer: "72" },
    { question: "What is 110 + 90?", options: ["190", "200", "210"], answer: "200" },
    { question: "What is 400 - 200?", options: ["180", "200", "220"], answer: "200" },
  ];
  
  const physicsQuestions = [
    { question: "What is the unit of force?", options: ["Newton", "Joule", "Watt"], answer: "Newton" },
    { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s"], answer: "300,000 km/s" },
    { question: "What is the formula for force?", options: ["F = ma", "F = mv", "F = mg"], answer: "F = ma" },
    { question: "What is the unit of energy?", options: ["Joule", "Newton", "Watt"], answer: "Joule" },
    { question: "What is the acceleration due to gravity on Earth?", options: ["9.8 m/s²", "10 m/s²", "8.8 m/s²"], answer: "9.8 m/s²" },
    { question: "What is the unit of power?", options: ["Watt", "Joule", "Newton"], answer: "Watt" },
    { question: "What is the formula for kinetic energy?", options: ["KE = ½mv²", "KE = mgh", "KE = Fd"], answer: "KE = ½mv²" },
    { question: "What is the unit of electric current?", options: ["Ampere", "Volt", "Ohm"], answer: "Ampere" },
    { question: "What is the unit of resistance?", options: ["Ohm", "Volt", "Ampere"], answer: "Ohm" },
    { question: "What is the unit of voltage?", options: ["Volt", "Ampere", "Ohm"], answer: "Volt" },
    { question: "What is the formula for work done?", options: ["W = Fd", "W = ma", "W = mv"], answer: "W = Fd" },
    { question: "What is the unit of frequency?", options: ["Hertz", "Watt", "Joule"], answer: "Hertz" },
    { question: "What is the unit of wavelength?", options: ["Meter", "Second", "Hertz"], answer: "Meter" },
    { question: "What is the formula for momentum?", options: ["p = mv", "p = ma", "p = Fd"], answer: "p = mv" },
    { question: "What is the unit of pressure?", options: ["Pascal", "Newton", "Joule"], answer: "Pascal" },
    { question: "What is the unit of charge?", options: ["Coulomb", "Volt", "Ampere"], answer: "Coulomb" },
    { question: "What is the formula for gravitational force?", options: ["F = Gm₁m₂/r²", "F = ma", "F = mv²/r"], answer: "F = Gm₁m₂/r²" },
    { question: "What is the unit of capacitance?", options: ["Farad", "Ohm", "Volt"], answer: "Farad" },
    { question: "What is the unit of magnetic flux?", options: ["Weber", "Tesla", "Henry"], answer: "Weber" },
    { question: "What is the unit of inductance?", options: ["Henry", "Weber", "Tesla"], answer: "Henry" },
  ];
  
  // Rest of the JavaScript code remains the same...
// DOM Elements
const mathBtn = document.getElementById("mathBtn");
const physicsBtn = document.getElementById("physicsBtn");
const quizContainer = document.querySelector(".quiz-container");
const resultsContainer = document.querySelector(".results-container");
const quizTitle = document.getElementById("quizTitle");
const quizQuestions = document.getElementById("quizQuestions");
const submitBtn = document.getElementById("submitBtn");
const scoreDisplay = document.getElementById("score");
const retryBtn = document.getElementById("retryBtn");

let currentQuiz = [];
let userAnswers = [];

// Event Listeners
mathBtn.addEventListener("click", () => startQuiz("Math", mathQuestions));
physicsBtn.addEventListener("click", () => startQuiz("Physics", physicsQuestions));
submitBtn.addEventListener("click", submitQuiz);
retryBtn.addEventListener("click", () => location.reload());

// Start Quiz
function startQuiz(quizType, questions) {
  currentQuiz = questions;
  userAnswers = [];
  quizTitle.textContent = `${quizType} Quiz`;
  document.querySelector(".container").classList.add("hidden");
  quizContainer.classList.remove("hidden");
  renderQuestions(questions);
}

// Render Questions
function renderQuestions(questions) {
  quizQuestions.innerHTML = "";
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("quiz-question");
    questionDiv.innerHTML = `
      <p>${index + 1}. ${q.question}</p>
      ${q.options.map((opt, i) => `
        <label>
          <input type="radio" name="q${index}" value="${opt}">
          ${opt}
        </label>
      `).join("")}
    `;
    quizQuestions.appendChild(questionDiv);
  });
}

// Submit Quiz
function submitQuiz() {
  userAnswers = [];
  currentQuiz.forEach((q, index) => {
    const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
    userAnswers.push(selectedOption ? selectedOption.value : null);
  });

  const score = calculateScore();
  showResults(score);
}

// Calculate Score
function calculateScore() {
  let correctAnswers = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === currentQuiz[index].answer) {
      correctAnswers++;
    }
  });
  return correctAnswers;
}

// Show Results
function showResults(score) {
  quizContainer.classList.add("hidden");
  resultsContainer.classList.remove("hidden");
  scoreDisplay.textContent = `You scored ${score} out of ${currentQuiz.length}!`;
}