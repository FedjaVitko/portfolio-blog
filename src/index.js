import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import 'styles/App.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
)
registerServiceWorker();
