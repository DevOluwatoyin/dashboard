import { auth, googleProvider } from "@/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { create } from "zustand";

const AuthSlice = create<AuthSlice>()((set) => ({
  signedIn: false,
  signUp: async (email, password) => {
    try {
      const data = await createUserWithEmailAndPassword(auth, email, password);
      console.log(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  signIn: async (email, password) => {
    try {
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  googleSignIn: async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
      console.log(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  logOut: async () => {
    try {
      const data = await signOut(auth);
      console.log(data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  },

  // increase: (by) => set((state) => ({ bears: state.bears + by })),
}));

export default AuthSlice;
