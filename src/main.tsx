import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from 'posthog-js/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PostHogProvider
        apiKey={import.meta.env.VITE_POSTHOG_KEY}
        options={{
          api_host: import.meta.env.VITE_POSTHOG_HOST,
          capture_pageview: false, // we're handling pageview manually in App.tsx
        }}
      >
        <App />
      </PostHogProvider>
    </BrowserRouter>
  </StrictMode>,
);
