import React from "react";

export const Landing = () => {
  return (
    <div>
      <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">Kmunity</h1>
            <p className="lead">Connect with peopple you need.</p>
            <div className="buttons">
              <a href="register.html" className="btn btn-primary">
                Sign Up
              </a>
              <a href="login.html" className="btn btn">
                Login
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
