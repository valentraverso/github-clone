import ReactDOM from 'react-dom/client';
import Router from './routes/Router';
import './UI/styles/general.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Router />
);
