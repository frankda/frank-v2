import { useState, useEffect } from 'react'

const saveToLocalStorage = (key: string, value: boolean) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

const getFromLocalStorage = (key: string) => {
  const value = window.localStorage.getItem(key)
  if (value) {
    return JSON.parse(value)
  }
}

const useTheme = () => {
  const [ isDarkTheme, setIsDarkTheme ] = useState(true)
  
  const toggleTheme = () => {
    saveToLocalStorage('isDark', !isDarkTheme)
    setIsDarkTheme(!isDarkTheme)
  }

  useEffect(() => {
    const localTheme = getFromLocalStorage('isDark')
    localTheme !== undefined ? setIsDarkTheme(localTheme) : setIsDarkTheme(true)
  }, [])

  return { isDarkTheme, toggleTheme }
}

export default useTheme