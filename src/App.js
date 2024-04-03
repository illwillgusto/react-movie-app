import React, { useEffect } from "react";

import { connect } from "react-redux";

import { checkUserAuthentication } from "./store/users/actions";
import "./scss/main.scss";
import AppRouter from "./AppRouter";

const App = (props) => {
  useEffect(() => {
    props.checkUserAuthentication();

  }, []);
  return <AppRouter {...props} />
};

const mapDispatchToProps = (dispatch) => ({
  checkUserAuthentication: () => dispatch(checkUserAuthentication()),
});

export default connect(null, mapDispatchToProps)(App);




































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Movie App
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
