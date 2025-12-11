// engine.js — Consolidated game engine (Arabic, RTL)
// This file contains the full game logic and exposes a single global `Engine` object
// which UI code should call. The engine is intentionally self-contained.

(function () {
  // ============================================
  // CATEGORIES & POINTS TABLE
  // ============================================
  const categoriesPointsTable = [
    { id: 1, name: 'UAE', nameAr: 'الإمارات', emoji: '🇦🇪', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 2, name: 'Saudi Arabia', nameAr: 'السعودية', emoji: '🇸🇦', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 3, name: 'Kuwait', nameAr: 'الكويت', emoji: '🇰🇼', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 4, name: 'Qatar', nameAr: 'قطر', emoji: '🇶🇦', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 5, name: 'Bahrain', nameAr: 'البحرين', emoji: '🇧🇭', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 6, name: 'Oman', nameAr: 'عمان', emoji: '🇴🇲', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 7, name: 'Iraq', nameAr: 'العراق', emoji: '🇮🇶', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 8, name: 'Egypt', nameAr: 'مصر', emoji: '🇪🇬', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 9, name: 'Morocco', nameAr: 'المغرب', emoji: '🇲🇦', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 10, name: 'Algeria', nameAr: 'الجزائر', emoji: '🇩🇿', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 11, name: 'Tunisia', nameAr: 'تونس', emoji: '🇹🇳', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 12, name: 'Libya', nameAr: 'ليبيا', emoji: '🇱🇾', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 13, name: 'Sudan', nameAr: 'السودان', emoji: '🇸🇩', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 14, name: 'Yemen', nameAr: 'اليمن', emoji: '🇾🇪', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 15, name: 'Palestine', nameAr: 'فلسطين', emoji: '🇵🇸', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 16, name: 'Lebanon', nameAr: 'لبنان', emoji: '🇱🇧', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 17, name: 'Syria', nameAr: 'سوريا', emoji: '🇸🇾', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 18, name: 'Jordan', nameAr: 'الأردن', emoji: '🇯🇴', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 19, name: 'Sports', nameAr: 'الرياضة', emoji: '⚽', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 20, name: 'Technology', nameAr: 'التكنولوجيا', emoji: '💻', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 21, name: 'History', nameAr: 'التاريخ', emoji: '📚', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 22, name: 'Geography', nameAr: 'الجغرافيا', emoji: '🗺️', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 23, name: 'Science', nameAr: 'العلوم', emoji: '🔬', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 24, name: 'Movies', nameAr: 'الأفلام', emoji: '🎬', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 25, name: 'Music', nameAr: 'الموسيقى', emoji: '🎵', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 26, name: 'Food', nameAr: 'الطعام', emoji: '🍽️', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 27, name: 'Animals', nameAr: 'الحيوانات', emoji: '🦁', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 28, name: 'Art', nameAr: 'الفن', emoji: '🎨', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 29, name: 'Literature', nameAr: 'الأدب', emoji: '✍️', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 30, name: 'Business', nameAr: 'الأعمال', emoji: '💼', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 31, name: 'Medicine', nameAr: 'الطب', emoji: '⚕️', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 32, name: 'Languages', nameAr: 'اللغات', emoji: '🗣️', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 33, name: 'Nature', nameAr: 'الطبيعة', emoji: '🌿', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 34, name: 'Space', nameAr: 'الفضاء', emoji: '🚀', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] },
    { id: 35, name: 'Mathematics', nameAr: 'الرياضيات', emoji: '📐', points: [200,400,600,800], difficulties:['سهل','متوسط','صعب','خبير'] }
  ];

  // ============================================
  // ENGINE STATE
  // ============================================
  const gameState = {
    team1: { name: '', score: 0, aids: { hint: { used: false }, callFriend: { used: false } } },
    team2: { name: '', score: 0, aids: { hint: { used: false }, callFriend: { used: false } } },
    selectedCategories: [],
    currentTeamTurn: 1,
    selectedCategory: null,
    selectedPointIndex: null,
    currentQuestion: null,
    answeredQuestions: new Set(),
    answeringTeam: null,
    timeLimit: 60,
    language: 'ar'
  };

  // Helper accessors
  function getCategoryById(id) { return categoriesPointsTable.find(c=>c.id===id); }
  function getCategoryPoints(categoryId) { const c=getCategoryById(categoryId); return c?c.points:null; }
  function getPointValue(categoryId, pointIndex) { const pts = getCategoryPoints(categoryId); return pts?pts[pointIndex]:null; }
  function getDifficultyLabel(i) { const labels=['سهل','متوسط','صعب','خبير']; return labels[i]||'غير معروف'; }
  function isQuestionAnswered(categoryId, pointIndex) { return gameState.answeredQuestions.has(`${categoryId}-${pointIndex}`); }
  function markQuestionAnswered(categoryId, pointIndex){ gameState.answeredQuestions.add(`${categoryId}-${pointIndex}`); }

  // Aids
  function getCurrentTeamAids(){ return gameState.currentTeamTurn===1?gameState.team1.aids:gameState.team2.aids; }
  function getCurrentTeamAidStatus(){ const team = gameState.currentTeamTurn===1?gameState.team1:gameState.team2; return { hintAvailable: !team.aids.hint.used, callFriendAvailable: !team.aids.callFriend.used }; }
  function useHint(){ const aids=getCurrentTeamAids(); if(!aids.hint.used){ aids.hint.used=true; return { success:true, hint: getHintForQuestion() }; } return { success:false, message: 'تم استخدام التلميح في هذه الجولة بالفعل' }; }
  function getHintForQuestion(){ const cat = getCategoryById(gameState.selectedCategory); const difficulty=getDifficultyLabel(gameState.selectedPointIndex); return `هذا تلميح لسؤال ${difficulty} عن ${cat?cat.nameAr:''}. فكر في الحقائق الأساسية المتعلقة بهذا الموضوع.`; }
  function useCallFriend(){ const aids=getCurrentTeamAids(); if(!aids.callFriend.used){ aids.callFriend.used=true; return { success:true, timeLimit: 90 }; } return { success:false, message:'تم استخدام الاستعانة بصديق في هذه الجولة بالفعل' }; }
  function resetAidsForNextRound(){ gameState.team1.aids.hint.used=false; gameState.team1.aids.callFriend.used=false; gameState.team2.aids.hint.used=false; gameState.team2.aids.callFriend.used=false; }

  // Core flow
  function initializeGame(team1Name, team2Name, selectedCategoryIds){
    gameState.team1.name = team1Name; gameState.team2.name = team2Name; gameState.team1.score = 0; gameState.team2.score = 0;
    gameState.selectedCategories = Array.from(selectedCategoryIds);
    gameState.currentTeamTurn = 1; gameState.answeredQuestions.clear(); gameState.selectedCategory=null; gameState.selectedPointIndex=null; gameState.currentQuestion=null; gameState.answeringTeam=null;
  }

  function selectPoint(categoryId, pointIndex){ if(isQuestionAnswered(categoryId, pointIndex)) return false; gameState.selectedCategory=categoryId; gameState.selectedPointIndex=pointIndex; gameState.answeringTeam=null; return true; }

  function displayQuestion(){ const category = getCategoryById(gameState.selectedCategory); const pointIndex = gameState.selectedPointIndex; const pv = getPointValue(gameState.selectedCategory, pointIndex); gameState.currentQuestion = { categoryId: gameState.selectedCategory, categoryName: gameState.language==='ar'? (category?category.nameAr:'') : (category?category.name:''), pointIndex: pointIndex, pointValue: pv, difficulty: getDifficultyLabel(pointIndex), currentTeam: gameState.currentTeamTurn, question: `سؤال عن ${category?category.nameAr:''} (${getDifficultyLabel(pointIndex)})`, options: ['أ','ب','ج','د'] }; return gameState.currentQuestion; }

  function showAnswerAttributionOptions(){ return { title: 'من أجاب بشكل صحيح؟', options: [ { text: gameState.team1.name, teamNumber: 1 }, { text: gameState.team2.name, teamNumber: 2 }, { text: 'لا أحد', teamNumber: null } ], currentTeam: gameState.currentTeamTurn }; }

  function submitAnswerAttribution(teamNumber){ const pv = getPointValue(gameState.selectedCategory, gameState.selectedPointIndex); if(teamNumber===1){ gameState.team1.score += pv; } else if(teamNumber===2){ gameState.team2.score += pv; } gameState.answeringTeam = teamNumber; markQuestionAnswered(gameState.selectedCategory, gameState.selectedPointIndex); switchTurn(); resetRound(); }

  function switchTurn(){ gameState.currentTeamTurn = gameState.currentTeamTurn===1?2:1; }
  function resetRound(){ gameState.selectedCategory=null; gameState.selectedPointIndex=null; gameState.currentQuestion=null; gameState.answeringTeam=null; resetAidsForNextRound(); }

  function getScores(){ return { team1: { name: gameState.team1.name, score: gameState.team1.score }, team2: { name: gameState.team2.name, score: gameState.team2.score } }; }

  function isGameOver(){ const totalQuestions = gameState.selectedCategories.length * 4; return gameState.answeredQuestions.size >= totalQuestions; }

  function getGameResults(){ const s = getScores(); let winner=''; if(s.team1.score > s.team2.score) winner = s.team1.name; else if(s.team2.score > s.team1.score) winner = s.team2.name; else winner = 'تعادل'; return { winner, team1: s.team1, team2: s.team2 }; }

  function getAvailableQuestions(){ const available = []; gameState.selectedCategories.forEach(catId=>{ const cat = getCategoryById(catId); const points = getCategoryPoints(catId); points.forEach((pv, idx)=>{ if(!isQuestionAnswered(catId, idx)){ available.push({ categoryId: catId, categoryName: gameState.language==='ar'?cat.nameAr:cat.name, categoryEmoji: cat.emoji, pointIndex: idx, pointValue: pv, difficulty: getDifficultyLabel(idx) }); } }); }); return available; }

  // Expose API
  window.Engine = {
    // Data
    categoriesPointsTable,
    gameState,
    // Core
    initializeGame,
    selectPoint,
    displayQuestion,
    showAnswerAttributionOptions,
    submitAnswerAttribution,
    // Aids
    useHint,
    useCallFriend,
    getCurrentTeamAidStatus,
    resetAidsForNextRound,
    // Helpers
    getCategoryById,
    getPointValue,
    getDifficultyLabel,
    isQuestionAnswered,
    markQuestionAnswered,
    // Queries
    getScores,
    isGameOver,
    getGameResults,
    getAvailableQuestions
  };

  console.log('Engine initialized — full game logic consolidated.');

})();
