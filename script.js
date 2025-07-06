// Change le texte du personnage au clic
document.querySelector('.bubble').addEventListener('click', () => {
  const messages = [
    "Happy Birthday 🎂",
    "Best Wishes 🥳",
    "Have a great day! 🎉"
  ];
  const bubble = document.querySelector('.bubble');
  const current = bubble.textContent;
  const next = messages[(messages.indexOf(current) + 1) % messages.length];
  bubble.textContent = next;
});
```

---
