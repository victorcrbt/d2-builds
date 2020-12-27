import { THEME_KEY } from '@constants/local-storage-keys';

export function getTheme() {
  return localStorage.getItem(THEME_KEY);
}

export function setTheme(data: string) {
  localStorage.setItem(THEME_KEY, data);
}

export function deleteTheme() {
  localStorage.removeItem(THEME_KEY);
}
