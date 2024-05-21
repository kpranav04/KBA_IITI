import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextProvider } from './hooks/context/AuthContext.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
  <AuthContextProvider>
    {/* <SearchContextProvider> */}
      <App />
    {/* </SearchContextProvider> */}
  </AuthContextProvider>
</React.StrictMode>
)

// reportWebVitals();
