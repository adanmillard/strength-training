import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  let navigate = useNavigate();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (user) {
    navigate("/profile");
    return <div>...Loading</div>;
  }

  const signIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};
