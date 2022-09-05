import Routes from "./Pages/Routes"
import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import TestContextProvider from "./context/TestContext";

function App() {
  return (

<>
<TestContextProvider>
<Routes/>

</TestContextProvider>
</>   
  );
}

export default App;
