import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RouterPage from './RouterPage';
import { BrowserRouter } from 'react-router-dom'

createRoot (document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <RouterPage/>
        </BrowserRouter>
    </StrictMode>
)
