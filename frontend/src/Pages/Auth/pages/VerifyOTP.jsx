import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthLayout from "../components/AuthLayout";
import "./VerifyOTP.css";

function VerifyOTP() {
    const location = useLocation();
    const navigate = useNavigate();

    const email = location.state?.email || "";
    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState("");

    const handleVerify = (event) => {
        event.preventDefault();

        if (!/^\d{6}$/.test(otp)) {
            setMessage("Please enter a valid 6-digit OTP.");
            return;
        }

        // TODO: Call POST /api/verify-otp/ here.
        navigate("/reset-password", {
            state: { email },
        });
    };

    return (
        <AuthLayout>
            <div className="otp-heading">
                <h1>Verify your email</h1>
                <p>
                    We've sent a verification code to
                    {email ? ` ${email}` : " your registered email"}.
                </p>
            </div>

            <form className="otp-form" onSubmit={handleVerify}>
                <div className="otp-field">
                    <label htmlFor="otp">Verification code</label>

                    <input
                        id="otp"
                        type="text"
                        inputMode="numeric"
                        autoComplete="one-time-code"
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                        value={otp}
                        onChange={(event) =>
                            setOtp(event.target.value.replace(/\D/g, ""))
                        }
                        required
                        autoFocus
                    />
                </div>

                <button type="submit" className="otp-submit">
                    Verify OTP
                </button>
                {message && (
                    <p className="otp-message" role="alert">
                        {message}
                    </p>
                )}

                <button
                    type="button"
                    className="otp-resend"
                    onClick={() =>
                        setMessage(
                            "Resend OTP API will be connected with the backend."
                        )
                    }
                >
                    Resend OTP
                </button>
            </form>

            <div className="otp-change-email">
                <Link
                    to="/forgot-password"
                    state={{ email }}
                >
                    Change email address
                </Link>
            </div>
        </AuthLayout>
    );
}

export default VerifyOTP;
