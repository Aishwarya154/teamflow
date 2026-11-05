import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router";

import Homepage from "./Pages/Homepage";

import Login from "./Pages/Auth/pages/Login";
import ForgotPassword from "./Pages/Auth/pages/ForgotPassword";
import VerifyOTP from "./Pages/Auth/pages/VerifyOTP";
import ResetPassword from "./Pages/Auth/pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Colleague's existing homepage */}
        <Route path="/" element={<Homepage />} />

        {/* Your authentication pages */}
        <Route path="/login" element={<Login />} />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/verify-otp"
          element={<VerifyOTP />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />

        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
