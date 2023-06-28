import { getAuth } from "firebase/auth";
import { Logout } from "../components/Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { NotLoggedin } from "../components/NotLoggedin";

export const Profile = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  console.log(auth);
  let navigate = useNavigate();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!user) {
    setTimeout(() => {
      navigate("/");
    }, 5000);

    return (
      <div>
        <NotLoggedin />
      </div>
    );
  }

  return (
    <div>
      <div>
        <h1>Welcome {user?.displayName}</h1>
      </div>
      <Logout />
    </div>
  );
};
