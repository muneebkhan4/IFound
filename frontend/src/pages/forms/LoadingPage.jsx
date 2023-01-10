import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
const LoadingPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  setTimeout(() => {
    navigate(location.state.navigate);
  }, 3000);
  return (
    <div className="content">
      <h1 className="fonts">
        {location.state.message}Navigating to Dashboard...
      </h1>
      <div className="spinner-grow fonts" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingPage;
