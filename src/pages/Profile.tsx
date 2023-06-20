import { getAuth } from "firebase/auth";
import { Logout } from "../components/Logout";
import { useAuthState } from "react-firebase-hooks/auth";

export const Profile = () => {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  console.log(auth);

  if (loading) {
    return <div>...Loading</div>;
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
