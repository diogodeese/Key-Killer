import {
  useContext,
  createContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { Auth } from '../firebase';

interface Props {
  children?: ReactNode;
}

interface AuthContextValue {
  googleSignIn?: () => void;
  logOut?: () => void;
  user?: {
    accessToken?: string;
    displayName?: string;
    uid?: string;
  };
}

const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState({});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(Auth, provider);
  };

  const logOut = () => {
    signOut(Auth);
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(Auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
    });

    return () => {
      unsubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
