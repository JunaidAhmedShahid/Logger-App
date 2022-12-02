import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loader } from "../../components/Shared/Loader";

const Dashboard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    // forcefully redirect to /admistration/logger Route
    navigate("/administration/logger");
  }, [location.pathname, location.search, navigate]);
  return <Loader />;
};

export default Dashboard;
