/**
 * Aditya Borate — Dark/Light Mode Theme Switcher
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeSwitcher();
});

/* Dark/Light Theme Switcher */
function initThemeSwitcher() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const root = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.classList.add('dark-mode');
  } else {
    root.classList.remove('dark-mode');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      root.classList.toggle('dark-mode');
      const isDark = root.classList.contains('dark-mode');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
  }
}
