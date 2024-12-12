import { Dashboard } from "./pages/dashboard";
import { Home } from "./pages/home";
import { Share } from "./pages/share";
import { SignIn } from "./pages/signin";
import { SignUp } from "./pages/signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/share/:id" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
