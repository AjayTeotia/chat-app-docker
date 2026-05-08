import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { HomePage } from "./pages/home-page";
import { LoginPage } from "./pages/login-page";
import { SignupPage } from "./pages/signup-page";
import { SettingsPage } from "./pages/settings-page";
import { ProfilePage } from "./pages/profile-page";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
