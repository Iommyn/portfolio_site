import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.addEventListener('mousemove', function(e){
    var customCursor = document.querySelector('.custom-cursor');
    customCursor.style.left = e.pageX + 'px';
    customCursor.style.top = e.pageY + 'px';
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        <div className="custom-cursor"></div>
    </React.StrictMode>,
)
