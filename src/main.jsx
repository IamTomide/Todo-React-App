import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import ThemeProvider from './context/ThemeContext';
import ListContainer from './components/ListContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <ListContainer />
    </ThemeProvider>
    
  </StrictMode>,
)
