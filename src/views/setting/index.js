import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

console.log('NODE_CUSTOM_ENV', process.env.NODE_CUSTOM_ENV)
function App() {
    return <div>这是设置页面</div>
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
