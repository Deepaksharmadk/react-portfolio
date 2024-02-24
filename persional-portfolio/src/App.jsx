import "./App.css";
import ForgetPass from "./components/ForgetPassword/ForgetPass.jsx";

import UserContextProvider from "./context/UserContextProvider.jsx";

function App() {
  return (
    <UserContextProvider>
      <ForgetPass />
    </UserContextProvider>
  );
}

export default App;
