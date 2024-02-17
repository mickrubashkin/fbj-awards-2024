import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/global-styles.css';
import 'bulma/css/bulma.min.css';
import App from '@/components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
