export function isVisible(el) {
  return process.browser ? window.getComputedStyle(el).display !== 'none' : false;
}