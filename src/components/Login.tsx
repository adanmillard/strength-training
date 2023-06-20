import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const Login = () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

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
