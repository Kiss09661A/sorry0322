// 控制播放音樂與淡出遮罩
const music = document.getElementById('bg-music');
const overlay = document.getElementById('overlay');

overlay.addEventListener('click', () => {
  music.muted = false;
  music.play();

  overlay.classList.add('fade-out');

  overlay.addEventListener('transitionend', () => {
    overlay.style.display = 'none';
  }, { once: true });
});

// 飄落愛心效果
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  // 隨機位置與大小
  heart.style.left = Math.random() * 100 + 'vw';
  const size = (Math.random() * 1.2 + 0.8).toFixed(2);
  heart.style.fontSize = `${size}rem`;

  // 隨機動畫時間（1～3 秒）
  const duration = (Math.random() * 2 + 1).toFixed(2);
  heart.style.animationDuration = `${duration}s, 2s`; // fall, sway

  document.querySelector('.hearts-container').appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// 每 300～800ms 產生一個愛心
setInterval(() => {
  createHeart();
}, Math.random() * 500 + 300);
