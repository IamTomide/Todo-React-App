import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ListContainer from './components/ListContainer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ListContainer />
  </StrictMode>,
)
