import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// eslint-disable-next-line no-unused-vars
function MyApp(){
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

// eslint-disable-next-line no-unused-vars
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com' , target: '_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 

  // reactElement,
  // // anotherElement
)
