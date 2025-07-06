// étoiles scintillantes
for (let i = 0; i < 100; i++) {
  let star = document.createElement('div');
  star.className = 'etoile';
  let size = Math.random() * 1.5 + 0.5;
  star.style.width = star.style.height = `${size}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(star);
}

// étoiles filantes
for (let i = 0; i < 5; i++) {
  let meteor = document.createElement('div');
  meteor.className = 'etoile-filante';
  meteor.style.top = `${Math.random() * 300}px`;
  meteor.style.left = `${Math.random() * window.innerWidth}px`;
  meteor.style.animationDelay = `${Math.random() * 15}s`;
  document.body.appendChild(meteor);
}
