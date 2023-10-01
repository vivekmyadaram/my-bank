import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element }) => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

  return show ? <Element /> : navigate("/log-in");
};

export default ProtectedRoute;
