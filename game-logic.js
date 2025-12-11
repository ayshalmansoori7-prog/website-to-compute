/**
 * Quiz Game - Complete Game Logic
 * Features: Categories with 8 points each, turn-based gameplay, answer attribution
 */

// ============================================
// CATEGORIES & POINTS TABLE
// ============================================

const categoriesPointsTable = [
  {
    id: 1,
    name: 'UAE',
    nameAr: 'الإمارات',
    emoji: '🇦🇪',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 2,
    name: 'Saudi Arabia',
    nameAr: 'السعودية',
    emoji: '🇸🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 3,
    name: 'Kuwait',
    nameAr: 'الكويت',
    emoji: '🇰🇼',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 4,
    name: 'Qatar',
    nameAr: 'قطر',
    emoji: '🇶🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 5,
    name: 'Bahrain',
    nameAr: 'البحرين',
    emoji: '🇧🇭',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 6,
    name: 'Oman',
    nameAr: 'عمان',
    emoji: '🇴🇲',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 7,
    name: 'Iraq',
    nameAr: 'العراق',
    emoji: '🇮🇶',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 8,
    name: 'Egypt',
    nameAr: 'مصر',
    emoji: '🇪🇬',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 9,
    name: 'Morocco',
    nameAr: 'المغرب',
    emoji: '🇲🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 10,
    name: 'Algeria',
    nameAr: 'الجزائر',
    emoji: '🇩🇿',
    points: [200, 400, 600, 800],
    difficulties: ['سهل', 'متوسط', 'صعب', 'خبير']
  },
  {
    id: 11,
    name: 'Tunisia',
    nameAr: 'تونس',
    emoji: '🇹🇳',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 12,
    name: 'Libya',
    nameAr: 'ليبيا',
    emoji: '🇱🇾',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 13,
    name: 'Sudan',
    nameAr: 'السودان',
    emoji: '🇸🇩',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 14,
    name: 'Yemen',
    nameAr: 'اليمن',
    emoji: '🇾🇪',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 15,
    name: 'Palestine',
    nameAr: 'فلسطين',
    emoji: '🇵🇸',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 16,
    name: 'Lebanon',
    nameAr: 'لبنان',
    emoji: '🇱🇧',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 17,
    name: 'Syria',
    nameAr: 'سوريا',
    emoji: '🇸🇾',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 18,
    name: 'Jordan',
    nameAr: 'الأردن',
    emoji: '🇯🇴',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 19,
    name: 'Sports',
    nameAr: 'الرياضة',
    emoji: '⚽',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 20,
    name: 'Technology',
    nameAr: 'التكنولوجيا',
    emoji: '💻',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 21,
    name: 'History',
    nameAr: 'التاريخ',
    emoji: '📚',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 22,
    name: 'Geography',
    nameAr: 'الجغرافيا',
    emoji: '🗺️',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 23,
    name: 'Science',
    nameAr: 'العلوم',
    emoji: '🔬',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 24,
    name: 'Movies',
    nameAr: 'الأفلام',
    emoji: '🎬',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 25,
    name: 'Music',
    nameAr: 'الموسيقى',
    emoji: '🎵',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 26,
    name: 'Food',
    nameAr: 'الطعام',
    emoji: '🍽️',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 27,
    name: 'Animals',
    nameAr: 'الحيوانات',
    emoji: '🦁',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 28,
    name: 'Art',
    nameAr: 'الفن',
    emoji: '🎨',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 29,
    name: 'Literature',
    nameAr: 'الأدب',
    emoji: '✍️',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 30,
    name: 'Business',
    nameAr: 'الأعمال',
    emoji: '💼',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 31,
    name: 'Medicine',
    nameAr: 'الطب',
    emoji: '⚕️',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 32,
    name: 'Languages',
    nameAr: 'اللغات',
    emoji: '🗣️',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 33,
    name: 'Nature',
    nameAr: 'الطبيعة',
    emoji: '🌿',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 34,
    name: 'Space',
    nameAr: 'الفضاء',
    emoji: '🚀',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 35,
    name: 'Mathematics',
    nameAr: 'الرياضيات',
    emoji: '📐',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  }
];

// ============================================
// GAME STATE & MANAGEMENT
// ============================================

const gameState = {
  // Teams
  team1: {
    name: '',
    score: 0,
    aids: {
      hint: { used: false, label: 'تلميح' },
      callFriend: { used: false, label: 'استعن بصديق' }
    }
  },
  team2: {
    name: '',
    score: 0,
    aids: {
      hint: { used: false, label: 'تلميح' },
      callFriend: { used: false, label: 'استعن بصديق' }
    }
  },

  // Game progression
  selectedCategories: [], // Array of selected category IDs
  currentTeamTurn: 1, // Current team (1 or 2)
  selectedCategory: null, // Currently selected category ID
  selectedPointIndex: null, // Currently selected point level (0-3)
  currentQuestion: null, // Question object
  
  // Track answered questions
  answeredQuestions: new Set(), // Store as "categoryId-pointIndex"

  // Answer attribution
  answeringTeam: null, // Which team is answering (1, 2, or null for "no one")
  
  // Game settings
  timeLimit: 60, // seconds
  timerInterval: null,
  callFriendTimer: null,
  language: 'ar'
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get aids for current team
 */
function getCurrentTeamAids() {
  const team = gameState.currentTeamTurn === 1 ? gameState.team1 : gameState.team2;
  return team.aids;
}

/**
 * Check if current team can use hint
 */
function canUseHint() {
  const aids = getCurrentTeamAids();
  return !aids.hint.used;
}

/**
 * Check if current team can use call a friend
 */
function canUseCallFriend() {
  const aids = getCurrentTeamAids();
  return !aids.callFriend.used;
}

/**
 * Use hint aid
 */
function useHint() {
  const aids = getCurrentTeamAids();
  if (!aids.hint.used) {
    aids.hint.used = true;
    return {
      success: true,
      message: 'تم استخدام التلميح',
      hint: getHintForQuestion()
    };
  }
  return { success: false, message: 'تم استخدام التلميح في هذه الجولة بالفعل' };
}

/**
 * Get hint for current question (placeholder)
 */
function getHintForQuestion() {
  const category = getCategoryById(gameState.selectedCategory);
  const difficulty = getDifficultyLabel(gameState.selectedPointIndex);
  return `هذا تلميح لسؤال ${difficulty} عن ${category.nameAr}. فكر في الحقائق الأساسية المتعلقة بهذا الموضوع.`;
}

/**
 * Use call a friend aid - returns remaining time
 */
function useCallFriend() {
  const aids = getCurrentTeamAids();
  if (!aids.callFriend.used) {
    aids.callFriend.used = true;
    return {
      success: true,
      message: 'تم الاتصال بصديق. لديك 90 ثانية للمناقشة.',
      timeLimit: 90 // 1 minute 30 seconds
    };
  }
  return { success: false, message: 'تم استخدام الاستعانة بصديق في هذه الجولة بالفعل' };
}

/**
 * Reset aids for next round
 */
function resetAidsForNextRound() {
  gameState.team1.aids.hint.used = false;
  gameState.team1.aids.callFriend.used = false;
  gameState.team2.aids.hint.used = false;
  gameState.team2.aids.callFriend.used = false;
}

/**
 * Get aid status for a specific team
 */
function getTeamAidStatus(teamNumber) {
  const team = teamNumber === 1 ? gameState.team1 : gameState.team2;
  return {
    hintAvailable: !team.aids.hint.used,
    callFriendAvailable: !team.aids.callFriend.used
  };
}

/**
 * Get aid status for current team
 */
function getCurrentTeamAidStatus() {
  return getTeamAidStatus(gameState.currentTeamTurn);
}

function getCategoryById(categoryId) {
  return categoriesPointsTable.find(cat => cat.id === categoryId);
}

/**
 * Get category points array
 */
function getCategoryPoints(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.points : null;
}

/**
 * Get specific point value
 */
function getPointValue(categoryId, pointIndex) {
  const points = getCategoryPoints(categoryId);
  return points ? points[pointIndex] : null;
}

/**
 * Get difficulty label
 */
function getDifficultyLabel(pointIndex) {
  const labels = ['سهل', 'متوسط', 'صعب', 'خبير'];
  return labels[pointIndex] || 'غير معروف';
}

/**
 * Check if a question has been answered
 */
function isQuestionAnswered(categoryId, pointIndex) {
  const key = `${categoryId}-${pointIndex}`;
  return gameState.answeredQuestions.has(key);
}

/**
 * Mark question as answered
 */
function markQuestionAnswered(categoryId, pointIndex) {
  const key = `${categoryId}-${pointIndex}`;
  gameState.answeredQuestions.add(key);
}

// ============================================
// GAME FLOW LOGIC
// ============================================

/**
 * Initialize game with team names
 */
function initializeGame(team1Name, team2Name, selectedCategoryIds) {
  gameState.team1.name = team1Name;
  gameState.team2.name = team2Name;
  gameState.team1.score = 0;
  gameState.team2.score = 0;
  gameState.selectedCategories = selectedCategoryIds;
  gameState.currentTeamTurn = 1;
  gameState.answeredQuestions.clear();
  gameState.selectedCategory = null;
  gameState.selectedPointIndex = null;
  gameState.answeringTeam = null;
  
  console.log(`تم تهيئة اللعبة: ${team1Name} ضد ${team2Name}`);
  console.log(`عدد الفئات المختارة: ${selectedCategoryIds.length}`);
}

/**
 * Handle point selection by current team
 */
function selectPoint(categoryId, pointIndex) {
  // Check if already answered
  if (isQuestionAnswered(categoryId, pointIndex)) {
    console.warn('Question already answered!');
    return false;
  }

  gameState.selectedCategory = categoryId;
  gameState.selectedPointIndex = pointIndex;
  gameState.answeringTeam = null; // Reset answering team
  
  const category = getCategoryById(categoryId);
  const points = getPointValue(categoryId, pointIndex);
  
  console.log(`الفريق ${gameState.currentTeamTurn} اختار: ${category.nameAr} - ${points} نقطة`);
  
  // Trigger question display
  displayQuestion();
  
  return true;
}

/**
 * Get current question data
 */
function displayQuestion() {
  const category = getCategoryById(gameState.selectedCategory);
  const pointIndex = gameState.selectedPointIndex;
  const pointValue = getPointValue(gameState.selectedCategory, pointIndex);
  
  gameState.currentQuestion = {
    categoryId: gameState.selectedCategory,
    categoryName: gameState.language === 'ar' ? category.nameAr : category.name,
    pointIndex: pointIndex,
    pointValue: pointValue,
    difficulty: getDifficultyLabel(pointIndex),
    currentTeam: gameState.currentTeamTurn,
    // Question text would be fetched from database/API
    question: `سؤال عن ${category.nameAr} (${getDifficultyLabel(pointIndex)})`,
    options: ['أ', 'ب', 'ج', 'د']
  };
  
  console.log(`Question displayed:`, gameState.currentQuestion);
  
  return gameState.currentQuestion;
}

/**
 * Show answer attribution options
 * Returns UI state showing Team 1, Team 2, No One buttons
 */
function showAnswerAttributionOptions() {
  const currentTeamName = gameState.currentTeamTurn === 1 
    ? gameState.team1.name 
    : gameState.team2.name;
  
  return {
    title: `من أجاب بشكل صحيح؟`,
    options: [
      {
        text: gameState.team1.name,
        teamNumber: 1
      },
      {
        text: gameState.team2.name,
        teamNumber: 2
      },
      {
        text: 'لا أحد',
        teamNumber: null
      }
    ],
    currentTeam: currentTeamName
  };
}

/**
 * Submit answer attribution
 */
function submitAnswerAttribution(teamNumber) {
  const pointValue = getPointValue(gameState.selectedCategory, gameState.selectedPointIndex);
  
  // Award points if a team answered correctly
  if (teamNumber === 1) {
    gameState.team1.score += pointValue;
    console.log(`✓ ${gameState.team1.name} حصلت على ${pointValue} نقطة!`);
  } else if (teamNumber === 2) {
    gameState.team2.score += pointValue;
    console.log(`✓ ${gameState.team2.name} حصلت على ${pointValue} نقطة!`);
  } else {
    console.log(`✓ لم يحصل أي فريق على نقاط`);
  }
  
  gameState.answeringTeam = teamNumber;
  
  // Mark question as answered
  markQuestionAnswered(gameState.selectedCategory, gameState.selectedPointIndex);
  
  // Switch turn to next team
  switchTurn();
  
  // Reset selections for next round
  resetRound();
}

/**
 * Switch turn to next team
 */
function switchTurn() {
  gameState.currentTeamTurn = gameState.currentTeamTurn === 1 ? 2 : 1;
  console.log(`تم تغيير الدور إلى الفريق ${gameState.currentTeamTurn}`);
}

/**
 * Reset round for next question selection
 */
function resetRound() {
  gameState.selectedCategory = null;
  gameState.selectedPointIndex = null;
  gameState.currentQuestion = null;
  gameState.answeringTeam = null;
  resetAidsForNextRound();
}

/**
 * Get current scores
 */
function getScores() {
  return {
    team1: {
      name: gameState.team1.name,
      score: gameState.team1.score
    },
    team2: {
      name: gameState.team2.name,
      score: gameState.team2.score
    }
  };
}

/**
 * Check if game is over (all questions answered)
 */
function isGameOver() {
  const totalQuestions = gameState.selectedCategories.length * 4; // 4 difficulty levels
  return gameState.answeredQuestions.size >= totalQuestions;
}

/**
 * Get game results
 */
function getGameResults() {
  const scores = getScores();
  let winner = '';
  
  if (scores.team1.score > scores.team2.score) {
    winner = scores.team1.name;
  } else if (scores.team2.score > scores.team1.score) {
    winner = scores.team2.name;
  } else {
    winner = 'تعادل';
  }
  
  return {
    winner: winner,
    team1: scores.team1,
    team2: scores.team2
  };
}

/**
 * Get available questions for current team
 */
function getAvailableQuestions() {
  const available = [];
  
  gameState.selectedCategories.forEach(categoryId => {
    const category = getCategoryById(categoryId);
    const points = getCategoryPoints(categoryId);
    
    points.forEach((pointValue, index) => {
      if (!isQuestionAnswered(categoryId, index)) {
        available.push({
          categoryId: categoryId,
          categoryName: gameState.language === 'ar' ? category.nameAr : category.name,
          categoryEmoji: category.emoji,
          pointIndex: index,
          pointValue: pointValue,
          difficulty: getDifficultyLabel(index)
        });
      }
    });
  });
  
  return available;
}

// ============================================
// EXAMPLE USAGE
// ============================================

/*
// 1. Initialize game
initializeGame('Team A', 'Team B', [1, 2, 3, 4, 5, 6]);

// 2. Get available questions for current team
const available = getAvailableQuestions();
console.log('Available questions:', available);

// 3. يقوم الفريق باختيار قيمة نقاط
selectPoint(1, 0); // الفئة 1 (الإمارات)، سهل (200 نقطة)

// 4. Display question
const question = displayQuestion();
console.log('Current question:', question);

// 5. Show answer attribution options
const attribution = showAnswerAttributionOptions();
console.log('Attribution options:', attribution);

// 6. Submit answer - Team 1 answered correctly
submitAnswerAttribution(1);

// 7. Check scores
console.log('Scores:', getScores());

// 8. Get next available questions for Team 2 (now current turn)
const nextAvailable = getAvailableQuestions();
console.log('Available for Team 2:', nextAvailable);

// 9. Check if game is over
console.log('Game over?', isGameOver());

// 10. Get final results
console.log('Results:', getGameResults());
*/
