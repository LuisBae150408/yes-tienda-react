import { useEffect, useState } from 'react'

const KEY = 'yes-theme'
// Prioridad: elección guardada > preferencia del sistema
const initial = () =>
  localStorage.getItem(KEY) || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

export function useTheme() {
  const [theme, setTheme] = useState(initial)

  useEffect(() => {
    if (theme === 'dark') document.body.setAttribute('data-theme', 'dark')
    else document.body.removeAttribute('data-theme')
  }, [theme])

  const toggle = () =>
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark'
      localStorage.setItem(KEY, next)
      return next
    })

  return { theme, toggle }
}
