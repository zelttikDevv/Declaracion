let revealCount = 0;

function abrirDoc() {
  const intro = document.getElementById('intro');
  intro.style.opacity = '0';
  intro.style.pointerEvents = 'none';
  
  setTimeout(() => {
    intro.style.display = 'none';
    document.getElementById('doc').style.display = 'block';
    
    setTimeout(() => {
      ['s1', 's2', 's3'].forEach((id, i) => {
        setTimeout(() => document.getElementById(id).classList.add('show'), i * 200);
      });
      
      setTimeout(() => {
        document.getElementById('firma-ant').classList.add('show');
        document.getElementById('firma-yad').classList.add('show');
      }, 700);
    }, 100);
  }, 500);
}

function reveal(el) {
  // Evitamos que sume clics si ya fue revelado
  if (!el.classList.contains('revealed')) {
    el.classList.add('revealed');
    revealCount++;
    
    if (revealCount >= 5) {
      document.getElementById('stamp1').classList.add('visible');
    }
    if (revealCount >= 9) {
      document.getElementById('final-btn').classList.add('show');
    }
  }
}

function fillBlank(el, text) {
  el.textContent = text;
  el.classList.add('filled');
  el.onclick = null;
  el.style.cursor = 'default';
}

function showStamps() {
  document.getElementById('stamp1').classList.add('visible');
  document.getElementById('stamp2').classList.add('visible');
  document.getElementById('final-btn').classList.add('show');
}
