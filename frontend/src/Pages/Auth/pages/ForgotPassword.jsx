import { useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthLayout from "../components/AuthLayout";
import "./ForgotPassword.css";

function ForgotPassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // TODO: Call POST /api/forgot-password/ here.
        // Navigate only for frontend flow testing.
        navigate("/verify-otp", {
            state: { email },
        });
    };

    return (
        <AuthLayout>
            <h1 className="forgot-title">Can't log in?</h1>

            <p className="forgot-description">
                Enter the email address associated with your TeamFlow account.
                We'll help you reset your password.
            </p>

            <form className="forgot-form" onSubmit={handleSubmit}>
                <div className="login-field">
                    <label htmlFor="forgot-email">Email</label>

                    <input
                        type="email"
                        id="forgot-email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        autoFocus
                    />
                </div>

                <button type="submit" className="login-primary">
                    Send OTP
                </button>
            </form>

            <div className="login-help">
                <Link to="/login">Back to login</Link>
            </div>
        </AuthLayout>
    );
}

export default ForgotPassword;
