import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import './UI/styles/general.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <Router />
  </QueryClientProvider>
);
