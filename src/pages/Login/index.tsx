import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const Login = () => {
  const { user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // TODO: bind form input value later
  const handleLogin = () => {
    const user = {
      email: "john@gmail.com",
      password: "password123",
    };

    dispatch(loginUser(user));
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  }, [user, navigate]);

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
