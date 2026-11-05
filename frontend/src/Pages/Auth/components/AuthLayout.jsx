import "./AuthLayout.css";

function AuthLayout({ children }) {
    return (
        <main className="auth-scene">
            <div className="auth-decoration auth-decoration-one" aria-hidden="true" />
            <div className="auth-decoration auth-decoration-two" aria-hidden="true" />
            <div className="auth-decoration auth-decoration-three" aria-hidden="true" />

            <section className="auth-card" aria-label="TeamFlow authentication">
                {/* TeamFlow branding */}
                <header className="auth-brand">
                    <div className="auth-brand-mark" aria-hidden="true">
                        TF
                    </div>
                    <span className="auth-brand-name">TeamFlow</span>
                </header>

                {/* Login or other authentication page */}
                <div className="auth-card-content">
                    {children}
                </div>

                {/* Card footer */}
                <div className="auth-card-divider" />

                <footer className="auth-card-footer">
                    <div className="auth-footer-brand">
                        <span className="auth-footer-mark">TF</span>
                        <span>TeamFlow</span>
                    </div>

                    <nav className="auth-legal-links" aria-label="Legal links">
                        <a href="#terms">Terms &amp; Conditions</a>
                        <span>·</span>
                        <a href="#privacy">Privacy Policy</a>
                    </nav>
                </footer>
            </section>
        </main>
    );
}

export default AuthLayout;
