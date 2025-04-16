import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./store"
import Calculator from "./components/CounterApp"
import ToggleTheme from './components/ToggleTheme';
import "./App.css"
import App from "./App"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <Calculator />
      </div>
    </Provider> */}
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <ToggleTheme/>
      </div> */}
      <App />
  </React.StrictMode>
)