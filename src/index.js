import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GridPage from "./components/grid/GridPage";
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<GridPage />, document.getElementById('root'));
registerServiceWorker();
