import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import 'semantic-ui-css/semantic.min.css';
import 'styles/App.css';
import App from 'components/App';
import registerServiceWorker from './registerServiceWorker';

import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-okaidia.css';

ReactDOM.render(<App />,
  document.getElementById('root'),
)
registerServiceWorker();
