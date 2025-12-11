/**
 * Quiz Game Categories & Points Table
 * Structure: Categories with 8 questions each (4 difficulty levels, 2 attempts per level)
 * Points: 200, 400, 600, 800 (من سهل إلى صعب)
 */

// Categories Table - Ready to use for grid display
// Categories Table - Ready to use for grid display
const categoriesPointsTable = [
  {
    id: 1,
    name: 'UAE',
    nameAr: 'الإمارات',
    emoji: '🇦🇪',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 2,
    name: 'Saudi Arabia',
    nameAr: 'السعودية',
    emoji: '🇸🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 3,
    name: 'Kuwait',
    nameAr: 'الكويت',
    emoji: '🇰🇼',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 4,
    name: 'Qatar',
    nameAr: 'قطر',
    emoji: '🇶🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 5,
    name: 'Bahrain',
    nameAr: 'البحرين',
    emoji: '🇧🇭',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 6,
    name: 'Oman',
    nameAr: 'عمان',
    emoji: '🇴🇲',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 7,
    name: 'Iraq',
    nameAr: 'العراق',
    emoji: '🇮🇶',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 8,
    name: 'Egypt',
    nameAr: 'مصر',
    emoji: '🇪🇬',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 9,
    name: 'Morocco',
    nameAr: 'المغرب',
    emoji: '🇲🇦',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
  },
  {
    id: 10,
    name: 'Algeria',
    nameAr: 'الجزائر',
    emoji: '🇩🇿',
    points: [200, 400, 600, 800],
    difficulties: ['سهل','متوسط','صعب','خبير']
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
// وظائف مساعدة للوصول السهل
// ============================================

/**
 * Get category by ID
 * @param {number} categoryId - The category ID
 * @returns {object} Category object with all properties
 */
function getCategoryById(categoryId) {
  return categoriesPointsTable.find(cat => cat.id === categoryId);
}

/**
 * Get all points for a specific category
 * @param {number} categoryId - The category ID
 * @returns {array} Points array [200, 400, 600, 800]
 */
function getCategoryPoints(categoryId) {
  const category = getCategoryById(categoryId);
  return category ? category.points : null;
}

/**
 * Get a specific point value for a category
 * @param {number} categoryId - The category ID
 * @param {number} difficultyIndex - Index 0-3 (من سهل إلى خبير)
 * @returns {number} Point value (200, 400, 600, or 800)
 */
function getPointValue(categoryId, difficultyIndex) {
  const points = getCategoryPoints(categoryId);
  return points ? points[difficultyIndex] : null;
}

/**
 * Get difficulty label for a point index
 * @param {number} difficultyIndex - Index 0-3
 * @returns {string} Difficulty label
 */
function getDifficultyLabel(difficultyIndex) {
  const labels = ['سهل','متوسط','صعب','خبير'];
  return labels[difficultyIndex] || 'غير معروف';
}

/**
 * Create a grid row for a category (useful for HTML/CSS grid)
 * @param {number} categoryId - The category ID
 * @param {string} language - 'en' or 'ar'
 * @returns {object} Category info formatted for grid display
 */
function getCategoryGridRow(categoryId, language = 'en') {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  
  return {
    id: category.id,
    emoji: category.emoji,
    name: language === 'ar' ? category.nameAr : category.name,
    pointButtons: category.points.map((point, index) => ({
      value: point,
      difficulty: category.difficulties[index],
      answered: false
    }))
  };
}

/**
 * Get all categories formatted for grid display
 * @param {string} language - 'en' or 'ar'
 * @returns {array} Array of formatted categories
 */
function getAllCategoriesGridRows(language = 'en') {
  return categoriesPointsTable.map(category => 
    getCategoryGridRow(category.id, language)
  );
}

// ============================================
// EXAMPLE USAGE
// ============================================

/*
// Get all points for category 1 (UAE)
const uaePoints = getCategoryPoints(1);
console.log(uaePoints); // [200, 400, 600, 800]

// Get a specific point value
const easyPoints = getPointValue(1, 0);  // 200
const hardPoints = getPointValue(1, 3);  // 800

// Get difficulty label
console.log(getDifficultyLabel(0)); // "سهل"

// Get category grid row for HTML display
const categoryRow = getCategoryGridRow(1, 'en');
console.log(categoryRow);
// Output:
// {
//   id: 1,
//   emoji: '🇦🇪',
//   name: 'UAE',
//   pointButtons: [
//     { value: 200, difficulty: 'سهل', answered: false },
//     { value: 400, difficulty: 'Medium', answered: false },
//     { value: 600, difficulty: 'Hard', answered: false },
//     { value: 800, difficulty: 'Expert', answered: false }
//   ]
// }

// Get all categories for grid display
const allCategories = getAllCategoriesGridRows('en');

// Loop through and create HTML
allCategories.forEach(category => {
  console.log(`${category.emoji} ${category.name}`);
  category.pointButtons.forEach(btn => {
    console.log(`  - ${btn.difficulty}: ${btn.value} points`);
  });
});
*/
