import "./electron-types"
import { createRoot } from 'react-dom/client';
import { App } from './app/components/App';

const root = createRoot(document.body);
root.render(<App />);