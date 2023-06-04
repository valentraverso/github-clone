import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './UI/styles/general.css';

const queryClient = new QueryClient();
const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <HelmetProvider context={helmetContext}>
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  </HelmetProvider>
);
