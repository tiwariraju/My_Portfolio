import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './index.css';

const rootEl = document.getElementById('root');

if (!rootEl) {
  document.body.innerHTML =
    '<p style="padding:2rem;font-family:sans-serif;">Error: #root element not found.</p>';
} else {
  createRoot(rootEl).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>
  );
}
