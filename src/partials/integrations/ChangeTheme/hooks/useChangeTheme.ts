import { useEffect, useState } from 'react'
import { detectColorScheme } from '../helper'
import type { ThemeMode } from '../types'

export const useChangeTheme = () => {
  const [theme, setTheme] = useState<ThemeMode>()

  useEffect(() => {
    setTheme(detectColorScheme())
  }, [])

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
      return
    }
    setTheme('light')
    document.documentElement.setAttribute('data-theme', 'light')
    localStorage.setItem('theme', 'light')
  }
  return {
    handleClick,
    theme
  }
}
