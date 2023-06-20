import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const Logout = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (!user) {
    navigate("/");
  }

  return (
    <div>
      <button onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};
