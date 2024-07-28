import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Todo } from './components/Todo';
import { ThemeProvider } from "./context/ThemeProvider";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { Parent } from "./components/RefPrac/Parent";
import { FileTree } from "./components/FileTree/FileTree";


const data = [
  {
    name: 'Folder1',
    type: 'folder',
    children: [
      {
        name: 'File1.txt',
        type: 'file',
      },
      {
        name: 'Folder2',
        type: 'folder',
        children: [
          {
            name: 'File2.txt',
            type: 'file',
          },
        ],
      },
    ],
  },
  {
    name: 'File3.txt',
    type: 'file',
  },
];
function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider>
      <Router>
        <ThemeSwitcher />
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path="/" element={<Navigate to="/todo" />} />
          <Route path="/parent" element={<Parent />} />
          <Route path="/filetree" element={<FileTree data={data} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
