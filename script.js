// Génération des étoiles
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.className = 'etoile';
  const size = Math.random() * 2 + 1;
  star.style.width = star.style.height = `${size}px`;
  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(star);
}

// Génération des étoiles filantes
for (let i = 0; i < 5; i++) {
  const meteor = document.createElement('div');
  meteor.className = 'etoile-filante';
  meteor.style.top = `${Math.random() * 300}px`;
  meteor.style.left = `${Math.random() * window.innerWidth}px`;
  meteor.style.animationDelay = `${Math.random() * 10}s`;
  document.body.appendChild(meteor);
}
