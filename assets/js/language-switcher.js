document.addEventListener('DOMContentLoaded', function () {
  // Détection automatique de la langue navigateur
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const isFrench = browserLang.startsWith('fr');

  // Sélecteurs des éléments multilingues
  const frElements = document.querySelectorAll('.lang-fr');
  const enElements = document.querySelectorAll('.lang-en');

  // Fonction d'affichage par langue
  function showLanguage(lang) {
    if (lang === 'fr') {
      frElements.forEach(el => el.style.display = 'block');
      enElements.forEach(el => el.style.display = 'none');
    } else {
      frElements.forEach(el => el.style.display = 'none');
      enElements.forEach(el => el.style.display = 'block');
    }
    localStorage.setItem('lang', lang);
  }

  // Gestion des boutons de changement manuel
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      showLanguage(lang);
    });
  });

  // Récupération langue précédemment choisie
  const savedLang = localStorage.getItem('lang');
  const langToUse = savedLang || (isFrench ? 'fr' : 'en');

  // Appliquer la langue au chargement
  showLanguage(langToUse);
});
