// Celebratory micro-interactions for the game
// Makes the game feel energetic, exciting, and rewarding

(function() {
  'use strict';

  // Confetti particles for celebration
  function createConfetti(x = window.innerWidth / 2, y = window.innerHeight / 2) {
    const colors = ['#b366ff', '#00ffcc', '#ff6b9d', '#ffd700', '#ff4500', '#66ff00'];
    const confettiCount = 30;

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * 8 + 4;
      const duration = Math.random() * 1.5 + 1;
      const distance = Math.random() * 200 + 100;
      const angle = (Math.random() * 360) * (Math.PI / 180);

      confetti.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 ${size * 2}px ${color};
      `;

      document.body.appendChild(confetti);

      const xEnd = Math.cos(angle) * distance;
      const yEnd = Math.sin(angle) * distance + 100;

      confetti.animate([
        { transform: 'translate(0, 0) scale(1)', opacity: 1 },
        { transform: `translate(${xEnd}px, ${yEnd}px) scale(0)`, opacity: 0 }
      ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }).onfinish = () => confetti.remove();
    }
  }

  // Score pop animation with sparkles
  function createScorePopup(element, points) {
    const popup = document.createElement('div');
    popup.style.cssText = `
      position: absolute;
      top: 50%;
      right: 50%;
      transform: translate(50%, -50%);
      font-size: 36px;
      font-weight: 900;
      background: linear-gradient(135deg, #b366ff, #00ffcc);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      pointer-events: none;
      z-index: 1000;
      white-space: nowrap;
    `;
    popup.textContent = `+${points}`;
    
    element.appendChild(popup);

    popup.animate([
      { transform: 'translate(50%, -50%) scale(0)', opacity: 1 },
      { transform: 'translate(50%, -120%) scale(1.5)', opacity: 1 },
      { transform: 'translate(50%, -180%) scale(0.8)', opacity: 0 }
    ], {
      duration: 1500,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }).onfinish = () => popup.remove();

    createConfetti(element.getBoundingClientRect().right, element.getBoundingClientRect().top);
  }

  // Ripple effect on buttons
  function createRipple(event) {
    const btn = event.target.closest('button, [role="button"]');
    if (!btn) return;

    const ripple = document.createElement('span');
    const rect = btn.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const size = Math.max(rect.width, rect.height);

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(255,255,255,0.5), transparent);
      border-radius: 50%;
      left: ${x - size / 2}px;
      top: ${y - size / 2}px;
      pointer-events: none;
    `;

    btn.style.position = 'relative';
    btn.style.overflow = 'hidden';
    btn.appendChild(ripple);

    ripple.animate([
      { transform: 'scale(0)', opacity: 1 },
      { transform: 'scale(1)', opacity: 0 }
    ], {
      duration: 600,
      easing: 'ease-out'
    }).onfinish = () => ripple.remove();
  }

  // Floating emoji animation on correct answers
  function createFloatingEmoji(emoji, element) {
    const floater = document.createElement('div');
    const rect = element.getBoundingClientRect();
    
    floater.style.cssText = `
      position: fixed;
      left: ${rect.left + rect.width / 2}px;
      top: ${rect.top + rect.height / 2}px;
      font-size: 48px;
      pointer-events: none;
      z-index: 1000;
      transform: translate(-50%, -50%);
    `;
    floater.textContent = emoji;

    document.body.appendChild(floater);

    floater.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: 'translate(-50%, -150%) scale(1.5)', opacity: 1 },
      { transform: 'translate(-50%, -250%) scale(0.5)', opacity: 0 }
    ], {
      duration: 2000,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    }).onfinish = () => floater.remove();
  }

  // Victory animation on game end
  function celebrateVictory() {
    createConfetti();
    setTimeout(() => createConfetti(), 200);
    setTimeout(() => createConfetti(), 400);
    
    // Create multiple bursts
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (window.innerHeight / 2);
        createConfetti(x, y);
      }, i * 300);
    }
  }

  // Pulse animation helper
  function pulseElement(element) {
    element.animate([
      { transform: 'scale(1)', filter: 'brightness(1)' },
      { transform: 'scale(1.1)', filter: 'brightness(1.2)' },
      { transform: 'scale(1)', filter: 'brightness(1)' }
    ], {
      duration: 400,
      easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
    });
  }

  // Attach ripple effect to all buttons
  document.addEventListener('click', createRipple);

  // Export functions for global use
  window.Celebrations = {
    confetti: createConfetti,
    scorePopup: createScorePopup,
    floatingEmoji: createFloatingEmoji,
    victory: celebrateVictory,
    pulse: pulseElement
  };

  console.log('Celebrations module loaded — game will feel lively and energetic!');
})();
