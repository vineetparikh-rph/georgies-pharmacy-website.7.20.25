import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { initGentleOptimizations } from './utils/gentleMobileOptimizer';

// Initialize gentle mobile optimizations only
initGentleOptimizations();

createRoot(document.getElementById('root')!).render(<App />);
