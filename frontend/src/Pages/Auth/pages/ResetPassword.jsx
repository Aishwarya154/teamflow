import { useState } from "react";
import { useLocation, Link } from "react-router";
import AuthLayout from "../components/AuthLayout";
import "./ResetPassword.css";

function ResetPassword() {
    const location = useLocation();
    const email = location.state?.email || "";

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);
    const [message, setMessage] = useState("");

    const handleReset = (event) => {
        event.preventDefault();
        setMessage("");

        if (password.length < 8) {
            setMessage("Password must contain at least 8 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setMessage("Passwords do not match.");
            return;
        }

        // TODO: Call POST /api/reset-password/ here.
        setMessage(
            "Password validation passed. Backend password reset is not connected yet."
        );
    };

    return (
        <AuthLayout>
            <div className="reset-heading">
                <h1>Create a new password</h1>
                <p>
                    {email
                        ? `Reset the password for ${email}.`
                        : "Choose a new password for your TeamFlow account."}
                </p>
            </div>

            <form className="reset-form" onSubmit={handleReset}>
                <div className="reset-field">
                    <label htmlFor="new-password">New password</label>

                    <div className="reset-input-wrapper">
                        <input
                            id="new-password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="Enter new password"
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <div className="reset-field">
                    <label htmlFor="confirm-password">
                        Confirm password
                    </label>

                    <div className="reset-input-wrapper">
                        <input
                            id="confirm-password"
                            type={showConfirmPassword ? "text" : "password"}
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            placeholder="Confirm new password"
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <p className="reset-hint">
                    Use at least 8 characters for your password.
                </p>

                <button type="submit" className="reset-submit">
                    Reset password
                </button>

                {message && (
                    <p className="reset-message" role="status">
                        {message}
                    </p>
                )}
            </form>

            <div className="reset-back">
                <Link to="/login">Back to login</Link>
            </div>
        </AuthLayout>
    );
}

export default ResetPassword;
