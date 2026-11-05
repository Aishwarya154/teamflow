import { useState } from "react";
import { Link } from "react-router";
import AuthLayout from "../components/AuthLayout";
import "./Login.css";

function Login() {
    const [step, setStep] = useState("email");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState("");

    const handleContinue = (event) => {
        event.preventDefault();
        setMessage("");
        setEmail(email.trim());
        setStep("password");
    };

    const handleLogin = (event) => {
        event.preventDefault();

        // TODO: Integrate POST /api/login/
        setMessage(
            "Login service is not connected yet. Backend integration is coming soon."
        );
    };

    const handleGoogleLogin = () => {
        // TODO: Integrate Google OAuth with the Django backend.
        setMessage(
            "Google sign-in will be available after backend OAuth integration."
        );
    };

    const goBack = () => {
        setStep("email");
        setPassword("");
        setShowPassword(false);
        setMessage("");
    };

    return (
        <AuthLayout>
            {step === "email" ? (
                <>
                    <h1 className="login-title">Log in to continue</h1>

                    <form
                        className="login-form"
                        onSubmit={handleContinue}
                    >
                        <div className="login-field">
                            <label htmlFor="email">Email</label>

                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="Enter your email"
                                autoComplete="email"
                                required
                                autoFocus
                            />
                        </div>

                        <label className="remember-me">
                            <input
                                type="checkbox"
                                checked={rememberMe}
                                onChange={(event) =>
                                    setRememberMe(event.target.checked)
                                }
                            />
                            <span>Remember me</span>
                        </label>

                        <button type="submit" className="login-primary">
                            Continue
                        </button>
                    </form>

                    <div className="login-social-divider">
                        <span>Or continue with</span>
                    </div>

                    <button
                        type="button"
                        className="login-google"
                        onClick={handleGoogleLogin}
                    >
                        <svg
                            className="google-icon"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                        >
                            <path
                                fill="#4285F4"
                                d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11A9.4 9.4 0 0 1 31 34.4v5.2h6.8c4-3.7 5.8-9.1 5.8-15.1z"
                            />
                            <path
                                fill="#34A853"
                                d="M24 44c5.4 0 9.9-1.8 13.2-4.9l-6.8-5.2c-1.8 1.2-4 2-6.4 2-4.9 0-9-3.3-10.5-7.8h-7v5.3C9.8 38.6 16.4 44 24 44z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M13.5 28.1a12 12 0 0 1 0-8.2v-5.3h-7a20 20 0 0 0 0 18.8l7-5.3z"
                            />
                            <path
                                fill="#EA4335"
                                d="M24 12.1c2.9 0 5.5 1 7.6 3l5.7-5.7C33.9 6.1 29.4 4 24 4c-7.6 0-14.2 5.4-17.5 10.6l7 5.3c1.5-4.5 5.6-7.8 10.5-7.8z"
                            />
                        </svg>

                        <span>Continue with Google</span>
                    </button>

                    {message && (
                        <p className="login-message" role="status">
                            {message}
                        </p>
                    )}

                    <div className="login-help">
                        <Link
                            to="/forgot-password"
                            state={{ email }}
                        >
                            Can't log in?
                        </Link>
                    </div>
                </>
            ) : (
                <>
                    <button
                        type="button"
                        className="login-back"
                        onClick={goBack}
                    >
                        ← Back
                    </button>

                    <h1 className="login-title">Enter your password</h1>

                    <div className="selected-email">
                        <span>{email}</span>

                        <button type="button" onClick={goBack}>
                            Change
                        </button>
                    </div>

                    <form
                        className="login-form"
                        onSubmit={handleLogin}
                    >
                        <div className="login-field">
                            <label htmlFor="password">Password</label>

                            <div className="password-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    placeholder="Enter your password"
                                    autoComplete="current-password"
                                    required
                                    autoFocus
                                />

                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    aria-label={
                                        showPassword
                                            ? "Hide password"
                                            : "Show password"
                                    }
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                        </div>

                        <button type="submit" className="login-primary">
                            Log in
                        </button>

                        {message && (
                            <p className="login-message" role="status">
                                {message}
                            </p>
                        )}
                    </form>

                    <div className="login-help">
                        <Link
                            to="/forgot-password"
                            state={{ email }}
                        >
                            Can't log in?
                        </Link>
                    </div>
                </>
            )}
        </AuthLayout>
    );
}

export default Login;
