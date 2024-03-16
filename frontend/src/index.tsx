import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { WithTheme } from './app/providers/ThemeProvider';
import { App } from './app/App';

import "./app/styles/index.css"
import '@/shared/config/i18n'

createRoot(
    document.getElementById('root') as Element
).render(<BrowserRouter>
    <WithTheme>
        <App />
    </WithTheme>
</BrowserRouter>);

