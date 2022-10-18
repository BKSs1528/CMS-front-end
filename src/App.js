import {Routes as Switch, Route} from "react-router-dom"

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthcontextProvider } from "./context/Authcontext";
import ToastContext, { ToastContextProvider } from "./context/ToastContext";
import Contacts from "./pages/Contacts";
import Allcontacts from "./pages/Allcontacts";
function App() {
  return (
    <ToastContextProvider>
      <AuthcontextProvider>
        <Layout>
          <Switch>
            <Route path="/" element={<Home/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/contact" element={<Contacts/>} />
            <Route path="/mycontacts" element={<Allcontacts/>} />
          </Switch>
          Hello world!
        </Layout>
        </AuthcontextProvider>
      </ToastContextProvider>
    
  );
}

export default App;
