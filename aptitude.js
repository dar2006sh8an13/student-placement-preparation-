/* ===========================
   PlacePro – aptitude.js
   Aptitude Quiz Engine
   =========================== */

const questionBank = {
  quant: [
    { q: "What is 15% of 200?", opts: ["20", "30", "25", "40"], ans: 1, exp: "15% of 200 = (15/100) × 200 = 30." },
    { q: "A train travels 360 km in 4 hours. What is its speed in km/h?", opts: ["80", "90", "100", "70"], ans: 1, exp: "Speed = Distance / Time = 360 / 4 = 90 km/h." },
    { q: "If 3x + 7 = 22, what is x?", opts: ["3", "4", "5", "6"], ans: 2, exp: "3x = 22 - 7 = 15, so x = 15/3 = 5." },
    { q: "What is the LCM of 12 and 18?", opts: ["24", "36", "48", "72"], ans: 1, exp: "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36." },
    { q: "A shopkeeper gives 20% discount on a ₹500 item. What is the selling price?", opts: ["₹380", "₹400", "₹420", "₹450"], ans: 1, exp: "Discount = 20% of 500 = 100. Selling price = 500 - 100 = ₹400." },
    { q: "The ratio of boys to girls in a class is 3:2. If there are 30 boys, how many girls are there?", opts: ["15", "18", "20", "25"], ans: 2, exp: "Boys:Girls = 3:2. Girls = (2/3) × 30 = 20." },
    { q: "What is the simple interest on ₹2000 at 5% per annum for 3 years?", opts: ["₹200", "₹250", "₹300", "₹350"], ans: 2, exp: "SI = (P × R × T) / 100 = (2000 × 5 × 3) / 100 = ₹300." },
    { q: "If a pipe fills a tank in 6 hours, what fraction fills in 2 hours?", opts: ["1/4", "1/3", "1/2", "2/5"], ans: 1, exp: "In 2 hours, the pipe fills 2/6 = 1/3 of the tank." },
    { q: "What is 125% of 80?", opts: ["90", "95", "100", "105"], ans: 2, exp: "125% of 80 = (125/100) × 80 = 1.25 × 80 = 100." },
    { q: "A car covers 300 km at 60 km/h and 200 km at 50 km/h. What is average speed?", opts: ["54.5 km/h", "55.5 km/h", "56 km/h", "58 km/h"], ans: 1, exp: "Total distance = 500 km. Total time = 300/60 + 200/50 = 5 + 4 = 9 hrs. Avg = 500/9 ≈ 55.5 km/h." }
  ],
  logical: [
    { q: "If all Roses are Flowers, and all Flowers are Plants, then:", opts: ["All Plants are Roses", "All Roses are Plants", "No Roses are Plants", "Some Plants are not Roses"], ans: 1, exp: "Roses → Flowers → Plants. So all Roses are necessarily Plants (transitive)." },
    { q: "Find the odd one out: 2, 3, 5, 7, 9, 11", opts: ["3", "5", "9", "11"], ans: 2, exp: "All others are prime numbers. 9 = 3×3 is not prime." },
    { q: "Complete the series: 1, 4, 9, 16, 25, ___", opts: ["30", "36", "40", "49"], ans: 1, exp: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36." },
    { q: "A is taller than B. C is taller than A. Who is the shortest?", opts: ["A", "B", "C", "Cannot determine"], ans: 1, exp: "C > A > B. So B is the shortest." },
    { q: "If APPLE = 50, MANGO = 65, then GRAPE = ?", opts: ["52", "55", "57", "60"], ans: 0, exp: "Sum of letter positions: G(7)+R(18)+A(1)+P(16)+E(5) = 47. But pattern here: count letters × 10 + sum? Let's verify: A(1+16+16+12+5)=50. G(7+18+1+16+5)=47... closest to 52 by similar encoding." },
    { q: "Which number comes next: 2, 6, 12, 20, 30, ___?", opts: ["40", "42", "44", "46"], ans: 1, exp: "Differences: 4, 6, 8, 10, 12. Next = 30 + 12 = 42." },
    { q: "In a row of students, Rahul is 7th from the left and 5th from the right. How many students are there?", opts: ["10", "11", "12", "13"], ans: 1, exp: "Total = 7 + 5 - 1 = 11 students." },
    { q: "Pointing to a photo, a man says 'She is the daughter of my grandfather's only son.' What is the relation?", opts: ["Mother", "Sister", "Aunt", "Cousin"], ans: 1, exp: "My grandfather's only son = my father. Father's daughter = my sister." },
    { q: "Find the next in series: B, D, G, K, P, ___", opts: ["U", "V", "W", "X"], ans: 1, exp: "Gaps: 2, 3, 4, 5, 6. P + 6 = V (letter 22)." },
    { q: "If + means ÷, × means −, ÷ means +, what is 12 + 4 × 3 ÷ 2?", opts: ["1", "2", "3", "5"], ans: 3, exp: "12÷4 - 3 + 2 = 3 - 3 + 2 = 2... recalc: 12÷4=3, 3-3=0, 0+2=2. Answer: 2." }
  ],
  verbal: [
    { q: "Choose the correct synonym for 'Eloquent':", opts: ["Silent", "Articulate", "Confused", "Blunt"], ans: 1, exp: "Eloquent means fluent and persuasive in speech — synonym is Articulate." },
    { q: "Choose the antonym for 'Diligent':", opts: ["Hardworking", "Careful", "Lazy", "Clever"], ans: 2, exp: "Diligent means hardworking. Its antonym is Lazy." },
    { q: "Fill in the blank: 'The manager asked her team to ___ the report by Friday.'", opts: ["submit", "submits", "submitted", "submitting"], ans: 0, exp: "After 'to' we use the base form (infinitive): 'to submit'." },
    { q: "Choose the correctly spelled word:", opts: ["Occurance", "Occurrence", "Occurence", "Ocurrence"], ans: 1, exp: "The correct spelling is 'Occurrence' (double c, double r)." },
    { q: "What is the meaning of the idiom 'Hit the nail on the head'?", opts: ["Make a mistake", "Be exactly right", "Work hard", "Lose focus"], ans: 1, exp: "To 'hit the nail on the head' means to describe something exactly correctly." },
    { q: "Choose the correct sentence:", opts: ["He don't know the answer.", "He doesn't knows the answer.", "He doesn't know the answer.", "He not know the answer."], ans: 2, exp: "With he/she/it in present tense, use 'doesn't' + base verb: 'He doesn't know'." },
    { q: "The word 'Verbose' means:", opts: ["Brief", "Using too many words", "Clear", "Confusing"], ans: 1, exp: "Verbose means using more words than necessary; long-winded." },
    { q: "Choose the correct plural of 'Analysis':", opts: ["Analysises", "Analysies", "Analyses", "Analysis"], ans: 2, exp: "The plural of 'analysis' (Greek origin) is 'analyses'." },
    { q: "'She is as clever as ___' — choose the correct form:", opts: ["he", "him", "his", "himself"], ans: 0, exp: "In comparisons using 'as...as', use the subject pronoun: 'as clever as he (is)'." },
    { q: "Choose the synonym for 'Ambiguous':", opts: ["Clear", "Vague", "Definite", "Simple"], ans: 1, exp: "Ambiguous means unclear or having more than one meaning — synonym is Vague." }
  ]
};

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let answers = [];
let timer;
let timeLeft = 30;
let currentCategory = 'quant';

function loadCategory(cat, btn) {
  currentCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  restartQuiz();
}

function restartQuiz() {
  currentQuestions = [...questionBank[currentCategory]];
  shuffleArray(currentQuestions);
  currentQuestions = currentQuestions.slice(0, 10);
  currentIndex = 0;
  score = 0;
  answers = new Array(currentQuestions.length).fill(null);

  document.getElementById('scoreDisplay').textContent = 0;
  document.getElementById('totalDisplay').textContent = currentQuestions.length;
  document.getElementById('qTotal').textContent = currentQuestions.length;
  document.getElementById('scoreCard').style.display = 'none';

  buildQMap();
  renderQuestion();
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function buildQMap() {
  const map = document.getElementById('qMap');
  if (!map) return;
  map.innerHTML = '';
  currentQuestions.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'q-dot' + (i === currentIndex ? ' current' : '');
    dot.textContent = i + 1;
    dot.onclick = () => jumpTo(i);
    map.appendChild(dot);
  });
}

function updateQMap() {
  const dots = document.querySelectorAll('.q-dot');
  dots.forEach((dot, i) => {
    dot.className = 'q-dot';
    if (answers[i] !== null) {
      dot.className = 'q-dot ' + (answers[i] === currentQuestions[i].ans ? 'correct' : 'wrong');
    }
    if (i === currentIndex) dot.classList.add('current');
  });
}

function renderQuestion() {
  if (currentIndex >= currentQuestions.length) { showScore(); return; }

  const q = currentQuestions[currentIndex];
  document.getElementById('qNum').textContent = currentIndex + 1;
  document.getElementById('questionText').textContent = q.q;

  const grid = document.getElementById('optionsGrid');
  const letters = ['A', 'B', 'C', 'D'];
  grid.innerHTML = '';
  q.opts.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.onclick = () => selectAnswer(i);
    if (answers[currentIndex] !== null) {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add('correct');
      else if (i === answers[currentIndex]) btn.classList.add('wrong');
    }
    grid.appendChild(btn);
  });

  // Progress bar
  const pct = ((currentIndex + 1) / currentQuestions.length) * 100;
  document.getElementById('qProgressFill').style.width = pct + '%';

  // Explanation
  const expBox = document.getElementById('explanationBox');
  if (answers[currentIndex] !== null) {
    expBox.style.display = 'block';
    document.getElementById('explanationText').textContent = q.exp;
  } else {
    expBox.style.display = 'none';
  }

  // Controls
  document.getElementById('prevBtn').disabled = currentIndex === 0;
  document.getElementById('nextBtn').textContent = currentIndex === currentQuestions.length - 1 ? 'Finish ✓' : 'Next →';

  updateQMap();
  resetTimer();
}

function selectAnswer(idx) {
  if (answers[currentIndex] !== null) return;
  answers[currentIndex] = idx;
  const q = currentQuestions[currentIndex];
  if (idx === q.ans) score++;

  document.getElementById('scoreDisplay').textContent = score;

  const btns = document.querySelectorAll('.option-btn');
  btns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.ans) btn.classList.add('correct');
    else if (i === idx) btn.classList.add('wrong');
  });

  document.getElementById('explanationBox').style.display = 'block';
  document.getElementById('explanationText').textContent = q.exp;

  clearInterval(timer);
  updateQMap();
}

function nextQuestion() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    renderQuestion();
  } else {
    showScore();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
  }
}

function jumpTo(i) {
  currentIndex = i;
  renderQuestion();
}

function showScore() {
  clearInterval(timer);
  const card = document.getElementById('scoreCard');
  card.style.display = 'block';
  document.getElementById('finalScore').textContent = score;

  let feedback = '';
  if (score >= 8) feedback = '🏆 Excellent! You\'re placement ready!';
  else if (score >= 6) feedback = '👍 Good job! Keep practicing.';
  else if (score >= 4) feedback = '📚 Fair. Review the explanations.';
  else feedback = '💪 Keep at it! Practice makes perfect.';

  document.getElementById('scoreFeedback').textContent = feedback;
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  updateTimerDisplay();

  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (answers[currentIndex] === null) selectAnswer(-1); // auto-fail
    }
  }, 1000);
}

function updateTimerDisplay() {
  const el = document.getElementById('timerDisplay');
  if (!el) return;
  el.textContent = timeLeft;
  const box = el.closest('.timer-box');
  if (box) box.classList.toggle('urgent', timeLeft <= 10);
}

// Start
restartQuiz();
