// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from "./components/App";
// import registerServiceWorker from './registerServiceWorker';
// import { BrowserRouter } from 'react-router-dom';
// import './index.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// ReactDOM.render((
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//     ), document.getElementById('root')
// );
// registerServiceWorker();

////Redux Counter:
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
)

render()
store.subscribe(render)
