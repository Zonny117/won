import ReactDOM from 'react-dom/client';
import App from '@/App.tsx';
import '@/scss/reset.css';
import '@/scss/common.scss';
import { Provider } from 'react-redux';
import store from '@/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
