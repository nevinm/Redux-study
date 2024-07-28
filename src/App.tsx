import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todo } from './components/Todo';
import { ThemeProvider } from "./context/ThemeProvider"
import { ThemeSwitcher } from "./components/ThemeSwitcher"
import { Parent } from "./components/RefPrac/Parent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <ThemeSwitcher />

      <Todo />
      -------------------------------------
      <Parent />
    </ThemeProvider>
  )
}

export default App
