(() => {
  'use strict';

  const year = document.getElementById('footer-year');
  if (year) year.textContent = String(new Date().getFullYear());

  // Keep the original Chinese text beside its English translation in the HTML.
  // Only replace text nodes or explicit attributes, never links or nested markup.
  const translations = [...document.querySelectorAll('[data-en]')].map(element => {
    const attribute = element.dataset.i18nAttr;
    return {
      element,
      attribute,
      zh: attribute ? element.getAttribute(attribute) : element.textContent,
      en: element.dataset.en
    };
  });
  const languageButtons = [...document.querySelectorAll('[data-language]')];
  const languageKey = 'xu-meng-homepage-language';

  function setLanguage(language) {
    const selected = language === 'en' ? 'en' : 'zh';
    document.documentElement.lang = selected === 'en' ? 'en' : 'zh-CN';
    translations.forEach(item => {
      if (item.attribute) item.element.setAttribute(item.attribute, item[selected]);
      else item.element.textContent = item[selected];
    });
    languageButtons.forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === selected));
    });
  }

  let savedLanguage = 'zh';
  try { savedLanguage = localStorage.getItem(languageKey) || 'zh'; }
  catch { /* Storage may be unavailable in private mode or local file previews. */ }
  setLanguage(savedLanguage);
  languageButtons.forEach(button => {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      setLanguage(language);
      try { localStorage.setItem(languageKey, language); }
      catch { /* Language switching still works without persistence. */ }
    });
  });
  const languageSwitch = document.querySelector('.language-switch');
  if (languageSwitch) languageSwitch.hidden = false;

  const links = [...document.querySelectorAll('.section-nav a')];
  const sections = [...document.querySelectorAll('main > section')];

  function showSection() {
    const target = sections.find(section => `#${section.id}` === location.hash) || sections[0];
    if (!target) return;
    sections.forEach(section => {
      const active = section === target;
      section.hidden = !active;
      section.classList.toggle('is-active', active);
    });
    links.forEach(link => {
      const active = link.hash === `#${target.id}`;
      link.setAttribute('aria-current', String(active));
      link.setAttribute('aria-controls', link.hash.slice(1));
      link.setAttribute('aria-expanded', String(active));
    });
  }

  // 使用真实锚点，支持键盘、深链接及浏览器前进/后退。
  // 不把导航伪装成 ARIA tabs；禁用脚本时所有栏目仍可阅读。
  window.addEventListener('hashchange', showSection);
  showSection();
})();
