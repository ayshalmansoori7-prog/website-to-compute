// SEENJEEM Game - Main Application Logic

// Game State
const gameState = {
  currentUser: null,
  team1: { name: '', score: 0 },
  team2: { name: '', score: 0 },
  selectedCategories: [],
  currentCategory: null,
  currentQuestion: null,
  currentTeam: 1,
  timeLeft: 60,
  timerInterval: null,
  questions: {},
  answeredQuestions: new Set(),
  surpriseCount: 0,
  maxSurprises: 2,
  isSurpriseQuestion: false,
  originalQuestion: null,
  language: 'en'
};

// Translation Object
const translations = {
  en: {
    gameTitle: 'MOTAAKID',
    gameSubtitle: 'لعبة الثقافة العامة',
    loginTab: 'Login',
    registerTab: 'Register',
    emailLabel: 'Email or Phone',
    nameLabel: 'Name',
    regEmailLabel: 'Email',
    phoneLabel: 'Phone Number',
    loginBtn: 'Login',
    registerBtn: 'Register',
    loginHint: 'Enter your email or phone number to continue',
    registerHint: 'Create an account to start playing',
    teamTitle: 'Create Your Teams',
    teamSubtitle: 'Enter the names of both teams',
    team1Label: 'Team 1 Name',
    team2Label: 'Team 2 Name',
    startGameBtn: 'Start Game',
    categoryTitle: 'Select Categories',
    categorySubtitle: 'Choose up to 6 categories',
    startCategoryBtnText: 'Start Game',
    resultsTitle: 'Game Results',
    playAgainBtn: 'Play Again',
    homeBtn: 'Back to Home',
    nextQuestionBtn: 'Next Question',
    surpriseTitle: '🎁 SURPRISE QUESTION!',
    surpriseText: 'Get ready for a special bonus question!',
    surpriseStartBtn: 'Ready?',
    selectCount: 'selected'
  },
  ar: {
    gameTitle: 'MOTAAKID',
    gameSubtitle: 'لعبة الثقافة العامة',
    loginTab: 'دخول',
    registerTab: 'تسجيل',
    emailLabel: 'البريد الإلكتروني أو الهاتف',
    nameLabel: 'الاسم',
    regEmailLabel: 'البريد الإلكتروني',
    phoneLabel: 'رقم الهاتف',
    loginBtn: 'دخول',
    registerBtn: 'تسجيل',
    loginHint: 'أدخل بريدك الإلكتروني أو رقم هاتفك للمتابعة',
    registerHint: 'أنشئ حسابًا للبدء في اللعب',
    teamTitle: 'إنشاء فرقك',
    teamSubtitle: 'أدخل أسماء الفريقين',
    team1Label: 'اسم الفريق الأول',
    team2Label: 'اسم الفريق الثاني',
    startGameBtn: 'ابدأ اللعبة',
    categoryTitle: 'اختيار الفئات',
    categorySubtitle: 'اختر حتى 6 فئات',
    startCategoryBtnText: 'ابدأ اللعبة',
    resultsTitle: 'نتائج اللعبة',
    playAgainBtn: 'العب مرة أخرى',
    homeBtn: 'العودة للبداية',
    nextQuestionBtn: 'السؤال التالي',
    surpriseTitle: '🎁 سؤال مفاجئ!',
    surpriseText: 'استعد لسؤال خاص!',
    surpriseStartBtn: 'هل أنت مستعد؟',
    selectCount: 'مختار'
  }
};

// Categories Data (35 categories)
const categories = [
  { id: 1, name: 'UAE', emoji: '🇦🇪', ar: 'الإمارات' },
  { id: 2, name: 'Saudi Arabia', emoji: '🇸🇦', ar: 'السعودية' },
  { id: 3, name: 'Kuwait', emoji: '🇰🇼', ar: 'الكويت' },
  { id: 4, name: 'Qatar', emoji: '🇶🇦', ar: 'قطر' },
  { id: 5, name: 'Bahrain', emoji: '🇧🇭', ar: 'البحرين' },
  { id: 6, name: 'Oman', emoji: '🇴🇲', ar: 'عمان' },
  { id: 7, name: 'Iraq', emoji: '🇮🇶', ar: 'العراق' },
  { id: 8, name: 'Egypt', emoji: '🇪🇬', ar: 'مصر' },
  { id: 9, name: 'Morocco', emoji: '🇲🇦', ar: 'المغرب' },
  { id: 10, name: 'Algeria', emoji: '🇩🇿', ar: 'الجزائر' },
  { id: 11, name: 'Tunisia', emoji: '🇹🇳', ar: 'تونس' },
  { id: 12, name: 'Libya', emoji: '🇱🇾', ar: 'ليبيا' },
  { id: 13, name: 'Sudan', emoji: '🇸🇩', ar: 'السودان' },
  { id: 14, name: 'Yemen', emoji: '🇾🇪', ar: 'اليمن' },
  { id: 15, name: 'Palestine', emoji: '🇵🇸', ar: 'فلسطين' },
  { id: 16, name: 'Lebanon', emoji: '🇱🇧', ar: 'لبنان' },
  { id: 17, name: 'Syria', emoji: '🇸🇾', ar: 'سوريا' },
  { id: 18, name: 'Jordan', emoji: '🇯🇴', ar: 'الأردن' },
  { id: 19, name: 'Sports', emoji: '⚽', ar: 'الرياضة' },
  { id: 20, name: 'Technology', emoji: '💻', ar: 'التكنولوجيا' },
  { id: 21, name: 'History', emoji: '📚', ar: 'التاريخ' },
  { id: 22, name: 'Geography', emoji: '🗺️', ar: 'الجغرافيا' },
  { id: 23, name: 'Science', emoji: '🔬', ar: 'العلوم' },
  { id: 24, name: 'Movies', emoji: '🎬', ar: 'الأفلام' },
  { id: 25, name: 'Music', emoji: '🎵', ar: 'الموسيقى' },
  { id: 26, name: 'Food', emoji: '🍽️', ar: 'الطعام' },
  { id: 27, name: 'Animals', emoji: '🦁', ar: 'الحيوانات' },
  { id: 28, name: 'Art', emoji: '🎨', ar: 'الفن' },
  { id: 29, name: 'Literature', emoji: '✍️', ar: 'الأدب' },
  { id: 30, name: 'Business', emoji: '💼', ar: 'الأعمال' },
  { id: 31, name: 'Medicine', emoji: '⚕️', ar: 'الطب' },
  { id: 32, name: 'Languages', emoji: '🗣️', ar: 'اللغات' },
  { id: 33, name: 'Nature', emoji: '🌿', ar: 'الطبيعة' },
  { id: 34, name: 'Space', emoji: '🚀', ar: 'الفضاء' },
  { id: 35, name: 'Mathematics', emoji: '📐', ar: 'الرياضيات' }
];

// Categories with Points Structure
// Each category has 8 points: 200, 400, 600, 800 (4 for each team)
const categoryPointsMap = {
  1: { name: 'UAE', points: [200, 400, 600, 800] },
  2: { name: 'Saudi Arabia', points: [200, 400, 600, 800] },
  3: { name: 'Kuwait', points: [200, 400, 600, 800] },
  4: { name: 'Qatar', points: [200, 400, 600, 800] },
  5: { name: 'Bahrain', points: [200, 400, 600, 800] },
  6: { name: 'Oman', points: [200, 400, 600, 800] },
  7: { name: 'Iraq', points: [200, 400, 600, 800] },
  8: { name: 'Egypt', points: [200, 400, 600, 800] },
  9: { name: 'Morocco', points: [200, 400, 600, 800] },
  10: { name: 'Algeria', points: [200, 400, 600, 800] },
  11: { name: 'Tunisia', points: [200, 400, 600, 800] },
  12: { name: 'Libya', points: [200, 400, 600, 800] },
  13: { name: 'Sudan', points: [200, 400, 600, 800] },
  14: { name: 'Yemen', points: [200, 400, 600, 800] },
  15: { name: 'Palestine', points: [200, 400, 600, 800] },
  16: { name: 'Lebanon', points: [200, 400, 600, 800] },
  17: { name: 'Syria', points: [200, 400, 600, 800] },
  18: { name: 'Jordan', points: [200, 400, 600, 800] },
  19: { name: 'Sports', points: [200, 400, 600, 800] },
  20: { name: 'Technology', points: [200, 400, 600, 800] },
  21: { name: 'History', points: [200, 400, 600, 800] },
  22: { name: 'Geography', points: [200, 400, 600, 800] },
  23: { name: 'Science', points: [200, 400, 600, 800] },
  24: { name: 'Movies', points: [200, 400, 600, 800] },
  25: { name: 'Music', points: [200, 400, 600, 800] },
  26: { name: 'Food', points: [200, 400, 600, 800] },
  27: { name: 'Animals', points: [200, 400, 600, 800] },
  28: { name: 'Art', points: [200, 400, 600, 800] },
  29: { name: 'Literature', points: [200, 400, 600, 800] },
  30: { name: 'Business', points: [200, 400, 600, 800] },
  31: { name: 'Medicine', points: [200, 400, 600, 800] },
  32: { name: 'Languages', points: [200, 400, 600, 800] },
  33: { name: 'Nature', points: [200, 400, 600, 800] },
  34: { name: 'Space', points: [200, 400, 600, 800] },
  35: { name: 'Mathematics', points: [200, 400, 600, 800] }
};

// Question Database Generator
function generateQuestions() {
  const questions = {};
  
  categories.forEach(category => {
    questions[category.id] = {
      team1: generateCategoryQuestions(4, category.id, 1),
      team2: generateCategoryQuestions(4, category.id, 2)
    };
  });
  
  return questions;
}

function generateCategoryQuestions(count, categoryId, team) {
  const questions = [];
  const points = [200, 400, 600, 800];
  const category = categories.find(c => c.id === categoryId);
  
  for (let i = 0; i < count; i++) {
    const pointValue = points[i];
    questions.push({
      id: `${categoryId}-${team}-${i}`,
      points: pointValue,
      question: `${category.name} Question ${i + 1} for Team ${team}: What is this about?`,
      options: [
        { text: `Option A for Q${i + 1}`, correct: false },
        { text: `Option B for Q${i + 1}`, correct: i === 0 },
        { text: `Option C for Q${i + 1}`, correct: false },
        { text: `Option D for Q${i + 1}`, correct: false }
      ],
      correctAnswer: 1,
      answered: false
    });
  }
  
  return questions;
}

// Initialize App
function initApp() {
  gameState.questions = generateQuestions();
  // Set default language to Arabic for all pages except homepage
  gameState.language = 'ar';
  setupEventListeners();
  showPage('homePage');
  updatePageText();
  
  // Load user if exists
  const savedUser = localStorage.getItem('seenjeem_user');
  if (savedUser) {
    gameState.currentUser = JSON.parse(savedUser);
  }
}

// Page Management
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.add('hidden');
  });
  
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.remove('hidden');
  }
  
  // Force Arabic on all pages except homepage
  if (pageId !== 'homePage') {
    gameState.language = 'ar';
    updatePageText();
  }
}

// Update Page Text Based on Language
function updatePageText() {
  const trans = translations[gameState.language];
  
  // Home page
  document.getElementById('gameTitle').textContent = trans.gameTitle;
  document.getElementById('gameSubtitle').textContent = trans.gameSubtitle;
  document.getElementById('loginTab').textContent = trans.loginTab;
  document.getElementById('registerTab').textContent = trans.registerTab;
  document.getElementById('emailLabel').textContent = trans.emailLabel;
  document.getElementById('nameLabel').textContent = trans.nameLabel;
  document.getElementById('regEmailLabel').textContent = trans.regEmailLabel;
  document.getElementById('phoneLabel').textContent = trans.phoneLabel;
  document.getElementById('loginBtn').textContent = trans.loginBtn;
  document.getElementById('registerBtn').textContent = trans.registerBtn;
  document.getElementById('loginHint').textContent = trans.loginHint;
  document.getElementById('registerHint').textContent = trans.registerHint;
  
  // Team page
  document.getElementById('teamTitle').textContent = trans.teamTitle;
  document.getElementById('teamSubtitle').textContent = trans.teamSubtitle;
  document.getElementById('team1Label').textContent = trans.team1Label;
  document.getElementById('team2Label').textContent = trans.team2Label;
  document.getElementById('startGameBtn').textContent = trans.startGameBtn;
  
  // Category page
  document.getElementById('categoryTitle').textContent = trans.categoryTitle;
  document.getElementById('categorySubtitle').textContent = trans.categorySubtitle;
  document.getElementById('startCategoryBtnText').textContent = trans.startCategoryBtnText;
  
  // Results
  document.getElementById('resultsTitle').textContent = trans.resultsTitle;
  document.getElementById('playAgainBtn').textContent = trans.playAgainBtn;
  document.getElementById('homeBtn').textContent = trans.homeBtn;
  document.getElementById('nextQuestionBtn').textContent = trans.nextQuestionBtn;
  document.getElementById('surpriseTitle').textContent = trans.surpriseTitle;
  document.getElementById('surpriseText').textContent = trans.surpriseText;
  document.getElementById('surpriseStartBtn').textContent = trans.surpriseStartBtn;
}

// Event Listeners Setup
function setupEventListeners() {
  // Language Toggle
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      gameState.language = e.target.dataset.lang;
      updatePageText();
      renderCategories();
    });
  });
  
  // Tab switching
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.target.closest('.tab-btn').dataset.tab;
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      e.target.closest('.tab-btn').classList.add('active');
      
      document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
      });
      
      document.getElementById(tab + 'Content').classList.add('active');
    });
  });
  
  // Login Form
  document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const loginInput = document.getElementById('loginEmail').value.trim();
    
    if (loginInput) {
      // Check if it's a phone or email
      const isPhone = /^\d+$/.test(loginInput);
      const user = {
        identifier: loginInput,
        isPhone: isPhone,
        playCount: 0
      };
      
      gameState.currentUser = user;
      localStorage.setItem('seenjeem_user', JSON.stringify(user));
      
      // Check if user can play
      const lastPlayKey = `seenjeem_lastplay_${loginInput}`;
      const lastPlay = localStorage.getItem(lastPlayKey);
      
      if (lastPlay && lastPlay !== 'free') {
        alert('You have already used your free play. Please upgrade to continue.');
        return;
      }
      
      showPage('teamPage');
      document.getElementById('loginForm').reset();
    }
  });
  
  // Register Form
  document.getElementById('registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const countryCode = document.getElementById('countryCode').value;
    const phone = document.getElementById('regPhone').value.trim();
    
    if (name && email && phone) {
      const fullPhone = countryCode + phone;
      const user = {
        name: name,
        email: email,
        phone: fullPhone,
        playCount: 0
      };
      
      gameState.currentUser = user;
      localStorage.setItem('seenjeem_user', JSON.stringify(user));
      
      // Mark as first play
      const lastPlayKey = `seenjeem_lastplay_${email}`;
      localStorage.setItem(lastPlayKey, 'free');
      
      showPage('teamPage');
      document.getElementById('registerForm').reset();
    }
  });
  
  // Team Form
  document.getElementById('teamForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const team1 = document.getElementById('team1Name').value.trim();
    const team2 = document.getElementById('team2Name').value.trim();
    
    if (team1 && team2) {
      gameState.team1.name = team1;
      gameState.team2.name = team2;
      gameState.team1.score = 0;
      gameState.team2.score = 0;
      
      showPage('categoryPage');
      renderCategories();
      document.getElementById('teamForm').reset();
    }
  });
  
  // Category Selection
  document.getElementById('startCategoryBtn').addEventListener('click', () => {
    if (gameState.selectedCategories.length > 0) {
      showPage('questionsPage');
      renderCategoryQuestions();
      updateScoreDisplay();
    }
  });
  
  // Exit Game
  document.getElementById('exitGameBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to exit the game?')) {
      resetGame();
      showPage('homePage');
    }
  });
  
  // Play Again
  document.getElementById('playAgainBtn').addEventListener('click', () => {
    resetGame();
    showPage('categoryPage');
    renderCategories();
  });
  
  // Back to Home
  document.getElementById('homeBtn').addEventListener('click', () => {
    resetGame();
    showPage('homePage');
  });
  
  // Surprise Start
  document.getElementById('surpriseStartBtn').addEventListener('click', () => {
    displayQuestion(gameState.currentQuestion);
  });
  
  // Next Question
  document.getElementById('nextQuestionBtn').addEventListener('click', () => {
    if (gameState.isSurpriseQuestion) {
      gameState.isSurpriseQuestion = false;
      displayQuestion(gameState.originalQuestion);
    } else {
      renderCategoryQuestions();
    }
  });
}

// Render Categories
function renderCategories() {
  const grid = document.getElementById('categoriesGrid');
  grid.innerHTML = '';
  
  categories.forEach(category => {
    const card = document.createElement('div');
    card.className = 'category-card';
    
    if (gameState.selectedCategories.find(c => c.id === category.id)) {
      card.classList.add('selected');
    }
    
    if (gameState.selectedCategories.length >= 6 && 
        !gameState.selectedCategories.find(c => c.id === category.id)) {
      card.classList.add('disabled');
    }
    
    const displayName = gameState.language === 'ar' ? category.ar : category.name;
    
    card.innerHTML = `
      <div class="icon">${category.emoji}</div>
      <div class="name">${displayName}</div>
    `;
    
    card.addEventListener('click', () => {
      if (card.classList.contains('disabled')) return;
      
      const index = gameState.selectedCategories.findIndex(c => c.id === category.id);
      
      if (index > -1) {
        gameState.selectedCategories.splice(index, 1);
      } else if (gameState.selectedCategories.length < 6) {
        gameState.selectedCategories.push(category);
      }
      
      renderCategories();
      updateCategoryCount();
    });
    
    grid.appendChild(card);
  });
  
  updateCategoryCount();
}

function updateCategoryCount() {
  const count = gameState.selectedCategories.length;
  document.getElementById('selectedCount').textContent = count;
  
  const btn = document.getElementById('startCategoryBtn');
  btn.disabled = count === 0;
}

// Render Category Questions
function renderCategoryQuestions() {
  const view = document.getElementById('categoryQuestionsView');
  
  if (gameState.selectedCategories.length === 0) {
    showPage('categoryPage');
    return;
  }
  
  view.classList.remove('hidden');
  document.getElementById('categoryQuestionsView').classList.remove('hidden');
  document.getElementById('questionView').classList.add('hidden');
  document.getElementById('answerView').classList.add('hidden');
  document.getElementById('surpriseScreen').classList.add('hidden');
  
  const grid = document.getElementById('questionsGrid');
  grid.innerHTML = '';
  
  const points = [200, 400, 600, 800];
  
  gameState.selectedCategories.forEach(category => {
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = gameState.language === 'ar' ? category.ar : category.name;
    categoryTitle.style.width = '100%';
    categoryTitle.style.textAlign = 'center';
    categoryTitle.style.marginTop = '30px';
    categoryTitle.style.marginBottom = '15px';
    grid.appendChild(categoryTitle);
    
    points.forEach(point => {
      const btn = document.createElement('button');
      btn.className = 'question-btn';
      btn.textContent = `${point}`;
      
      const questionKey = `${category.id}-${gameState.currentTeam}-${points.indexOf(point)}`;
      
      if (gameState.answeredQuestions.has(questionKey)) {
        btn.classList.add('answered');
        btn.disabled = true;
      } else {
        btn.addEventListener('click', () => {
          gameState.currentCategory = category;
          gameState.currentQuestion = {
            categoryId: category.id,
            teamId: gameState.currentTeam,
            pointIndex: points.indexOf(point),
            points: point
          };
          
          displayQuestion(gameState.currentQuestion);
          checkSurpriseQuestion();
        });
      }
      
      grid.appendChild(btn);
    });
  });
}

function checkSurpriseQuestion() {
  if (gameState.surpriseCount < gameState.maxSurprises && Math.random() < 0.3) {
    gameState.surpriseCount++;
    gameState.isSurpriseQuestion = true;
    gameState.originalQuestion = gameState.currentQuestion;
    
    document.getElementById('categoryQuestionsView').classList.add('hidden');
    document.getElementById('surpriseScreen').classList.remove('hidden');
  } else {
    displayQuestion(gameState.currentQuestion);
  }
}

// Display Question
function displayQuestion(q) {
  document.getElementById('categoryQuestionsView').classList.add('hidden');
  document.getElementById('surpriseScreen').classList.add('hidden');
  document.getElementById('questionView').classList.remove('hidden');
  document.getElementById('answerView').classList.add('hidden');
  
  const categoryId = q.categoryId;
  const category = categories.find(c => c.id === categoryId);
  const teamId = q.teamId;
  const questionIndex = q.pointIndex;
  
  const teamQuestions = gameState.questions[categoryId][`team${teamId}`];
  const question = teamQuestions[questionIndex];
  
  gameState.currentQuestion = question;
  
  // Display team
  const teamName = teamId === 1 ? gameState.team1.name : gameState.team2.name;
  document.getElementById('currentTeamDisplay').textContent = `${teamName}'s Turn`;
  
  // Display points
  document.getElementById('pointsDisplay').textContent = `${question.points} Points`;
  
  // Display question
  document.getElementById('questionText').textContent = question.question;
  
  // Display options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  let answered = false;
  
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option';
    optionBtn.textContent = option.text;
    optionBtn.disabled = answered;
    
    optionBtn.addEventListener('click', () => {
      if (answered) return;
      answered = true;
      
      // Mark all options as disabled
      document.querySelectorAll('.option').forEach(o => o.disabled = true);
      
      const isCorrect = index === question.correctAnswer;
      
      optionBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
      
      if (isCorrect) {
        if (teamId === 1) {
          gameState.team1.score += question.points;
        } else {
          gameState.team2.score += question.points;
        }
        updateScoreDisplay();
      }
      
      // Mark as answered
      const questionKey = `${categoryId}-${teamId}-${questionIndex}`;
      gameState.answeredQuestions.add(questionKey);
      
      // Show answer after 2 seconds
      setTimeout(() => {
        showAnswer(question.options[question.correctAnswer].text);
      }, 1500);
    });
    
    optionsContainer.appendChild(optionBtn);
  });
  
  // Start timer
  startTimer();
}

function showAnswer(correctAnswer) {
  document.getElementById('questionView').classList.add('hidden');
  document.getElementById('answerView').classList.remove('hidden');
  
  const content = document.getElementById('answerContent');
  const points = gameState.currentQuestion ? gameState.currentQuestion.points : 0;
  
  // Trigger celebration for correct answer
  if (window.Celebrations) {
    window.Celebrations.confetti();
    window.Celebrations.floatingEmoji('🎉', document.querySelector('.page:not(.hidden)'));
    if (points > 0) {
      window.Celebrations.scorePopup(content, points);
    }
  }
  
  content.innerHTML = `
    <h3>الإجابة الصحيحة:</h3>
    <p>${correctAnswer}</p>
  `;
  
  stopTimer();
  
  // Check if game is over
  const allAnswered = checkGameOver();
  if (allAnswered) {
    setTimeout(() => {
      // Victory celebration
      if (window.Celebrations) {
        window.Celebrations.victory();
      }
      showResults();
    }, 3000);
  } else {
    // Change turn
    gameState.currentTeam = gameState.currentTeam === 1 ? 2 : 1;
  }
}

function checkGameOver() {
  let totalQuestions = 0;
  gameState.selectedCategories.forEach(category => {
    totalQuestions += 8; // 4 points + 4 options = 8 questions per category... wait, 4 difficulty levels per team
  });
  
  // Actually: 6 categories × 4 points × 2 teams = 48 questions total
  const totalPossible = gameState.selectedCategories.length * 4 * 2;
  
  return gameState.answeredQuestions.size >= totalPossible;
}

// Timer
function startTimer() {
  stopTimer();
  gameState.timeLeft = 60;
  updateTimerDisplay();
  
  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    updateTimerDisplay();
    
    if (gameState.timeLeft === 0) {
      stopTimer();
      timeUp();
    }
  }, 1000);
}

function stopTimer() {
  if (gameState.timerInterval) {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = null;
  }
}

function updateTimerDisplay() {
  const timerEl = document.getElementById('timer');
  timerEl.textContent = gameState.timeLeft;
  
  if (gameState.timeLeft <= 10) {
    timerEl.classList.add('danger');
    timerEl.classList.remove('warning');
    
    if (gameState.timeLeft === 10) {
      playAlertSound();
    }
  } else if (gameState.timeLeft <= 20) {
    timerEl.classList.add('warning');
    timerEl.classList.remove('danger');
  } else {
    timerEl.classList.remove('warning', 'danger');
  }
}

function timeUp() {
  document.querySelectorAll('.option').forEach(o => o.disabled = true);
  
  // Auto-show answer
  const question = gameState.currentQuestion;
  showAnswer(question.options[question.correctAnswer].text);
}

function playAlertSound() {
  // Create a simple beep sound using Web Audio API
  try {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.5);
  } catch (e) {
    console.log('Audio not supported');
  }
}

// Score Display
function updateScoreDisplay() {
  document.getElementById('team1Score').textContent = gameState.team1.score;
  document.getElementById('team2Score').textContent = gameState.team2.score;
  document.getElementById('team1NameDisplay').textContent = gameState.team1.name;
  document.getElementById('team2NameDisplay').textContent = gameState.team2.name;
}

// Results
function showResults() {
  stopTimer();
  showPage('resultsPage');
  
  const team1Score = gameState.team1.score;
  const team2Score = gameState.team2.score;
  
  let winner = '';
  if (team1Score > team2Score) {
    winner = `🏆 ${gameState.team1.name} Wins!`;
  } else if (team2Score > team1Score) {
    winner = `🏆 ${gameState.team2.name} Wins!`;
  } else {
    winner = "It's a Tie! Both teams played great!";
  }
  
  document.getElementById('winnersDisplay').innerHTML = `<h2>${winner}</h2>`;
  
  document.getElementById('finalScore1').innerHTML = `
    <h3>${gameState.team1.name}</h3>
    <div class="score">${team1Score}</div>
  `;
  
  document.getElementById('finalScore2').innerHTML = `
    <h3>${gameState.team2.name}</h3>
    <div class="score">${team2Score}</div>
  `;
}

// Reset Game
function resetGame() {
  stopTimer();
  gameState.selectedCategories = [];
  gameState.team1.score = 0;
  gameState.team2.score = 0;
  gameState.currentTeam = 1;
  gameState.answeredQuestions = new Set();
  gameState.surpriseCount = 0;
  gameState.isSurpriseQuestion = false;
  document.getElementById('selectedCount').textContent = '0';
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
