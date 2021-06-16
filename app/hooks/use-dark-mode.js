import { useEffect, useState } from 'react';
import useLocalStorage from './use-local-storage';
import useMedia from './use-media';

export default function useDarkMode() {
  const [componentMounted, setComponentMounted] = useState(false);
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');
  const prefersDarkMode = usePrefersDarkMode();
  const enabled =
    typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;

    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }

    setComponentMounted(true);
  }, [enabled]);

  return [enabled, setEnabledState, componentMounted];
}

function usePrefersDarkMode() {
  return useMedia(['(prefers-color-scheme: dark)'], [true], false);
}
