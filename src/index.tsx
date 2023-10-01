import ReactDOM from 'react-dom/client';
import { HashRouter} from 'react-router-dom';
import './index.scss';
import { GlobalStyle } from "./styles/GlobalStyle"
import App from './components/App/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App />
    <GlobalStyle />
  </HashRouter>
);
