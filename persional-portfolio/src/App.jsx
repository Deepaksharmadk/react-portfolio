import "./App.css";

import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  );
}

export default App;
