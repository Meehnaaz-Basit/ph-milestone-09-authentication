import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGoogleLogOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGitHubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  return (
    <div className="gap-4">
      {/* conditional button rendering ==== 
      user ? logout : login
      */}

      {user ? (
        <button onClick={handleGoogleLogOut} className="btn">
          Logout
        </button>
      ) : (
        <>
          <button onClick={handleGoogleLogin} className="btn">
            Google Login
          </button>
          <button onClick={handleGitHubLogin} className="btn">
            GitHub Login
          </button>
        </>
      )}
      {user && (
        <div>
          <h3>User: {user.displayName}</h3>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
