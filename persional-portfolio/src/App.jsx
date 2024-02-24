import "./App.css";
import Login from "./components/Login/Login.jsx";

import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return <UserContextProvider></UserContextProvider>;
}

export default App;
