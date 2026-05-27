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
      
      // Muestra las firmas con los nuevos IDs vinculados
      setTimeout(() => {
        document.getElementById('firma-alb').classList.add('show');
        document.getElementById('firma-cris').classList.add('show');
      }, 700);
    }, 100);
  }, 500);
}

function reveal(el) {
  if (!el.classList.contains('revealed')) {
    el.classList.add('revealed');
    revealCount++;
    
    // Al revelar 5 elementos de las bitácoras aparece el primer sello
    if (revealCount >= 5) {
      document.getElementById('stamp1').classList.add('visible');
    }
    // Al revelar los 9 campos en total aparece el botón de archivar
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
