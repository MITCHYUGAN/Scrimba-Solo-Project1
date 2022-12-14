import React from 'react'
import Info from '../src/components/Info.js'
import About from '../src/components/About.js'
import Interest from '../src/components/Interest.js'
import Footer from '../src/components/Footer.js'

import './App.css';


const App = () =>{
    return(
    <div className="container">
        <Info />
        <About />
        <Interest />
        <Footer />
    </div>
    )
}

export default App

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;