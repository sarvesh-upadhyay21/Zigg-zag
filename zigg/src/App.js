import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./component/Sidebar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import UserManagement from "./pages/UserManagement";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import SubscriberManagement from "./pages/SubscriberManagement";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SubscriberPlan from "./pages/SubscriberPlan";
import OrderPerchaseDetails from "./pages/OrderPerchaseDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
         
        <Route path="/SubscribePlan" exact element={<SubscriberPlan />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/userManagement" exact element={<UserManagement />} />
        <Route path="/orderPerchase" exact element={<OrderPerchaseDetails/>} />
        <Route
          path="/subscribeManagement"
          exact
          element={<SubscriberManagement />}
        />
        {/* <Route path="*" exact element={<NotFound/>}/> */}
      </Routes>

      <Sidebar />
    </div>
  );
}

export default App;
