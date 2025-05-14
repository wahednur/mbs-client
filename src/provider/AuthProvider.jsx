import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { toast } from "sonner";
import useAxiosCommon from "../hooks/useAxiosCommon";
import auth from "./../firebase/firebaseConfig";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const axiosCommon = useAxiosCommon();

  const googleProvider = new GoogleAuthProvider();

  // Login with google
  const googleLogin = async () => {
    try {
      setLoading(true);
      return await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error(error);
    }
  };

  //Create User with email and password
  const createUser = async (email, password) => {
    try {
      setLoading(true);
      return await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  // Login with email and password
  const loginUser = async (email, password) => {
    try {
      setLoading(true);
      return await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };
  // Update user

  const updateUser = async (name, photo) => {
    try {
      setLoading(true);
      return await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      return await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  // User auth state observer
  useEffect(() => {
    const checkAuthStatus = async () => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log("Current user ==>", currentUser);
        if (currentUser) {
          //get token and store client
          const userInfo = { email: currentUser?.email };
          try {
            const { data } = await axiosCommon.post("/jwt", userInfo);
            if (data.token) {
              localStorage.setItem("access-token", data.token);
            }
          } catch (err) {
            console.log(err);
          }
        } else {
          // Remove token
          localStorage.removeItem("access-token");
        }
      });
      return () => unsubscribe();
    };
    checkAuthStatus();
  }, [axiosCommon]);

  const authInfo = {
    user,
    setUser,
    logOut,
    loading,
    setLoading,
    googleLogin,
    createUser,
    loginUser,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
