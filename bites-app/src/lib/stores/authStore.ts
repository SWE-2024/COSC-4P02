import { auth, db } from "$lib/firebase/firebase.client";
import { GoogleAuthProvider, signInWithPopup, signOut, type User } from "firebase/auth";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { writable } from "svelte/store";

export const authStore = writable<{
  isLoggedIn: boolean
  user?: User
}>({
  isLoggedIn: false,
  user: undefined
});

export const logout = async () => {
  await signOut(auth)
}

// Sign in and add the user to the database if necessary
export const loginWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  await signInWithPopup(auth, provider).then(async () => {
    // add user to the firebase db on sign in if there is no reference
    
		try {
			const docRef = doc(collection(db, 'users'), auth.currentUser?.uid);
			const docSnap = await getDoc(docRef);

			if (!docSnap.exists()) {
				setDoc(docRef, {
          uid: auth.currentUser?.uid,
          admin: false
        });
				console.log('Added account to firebase.');
			} else {
				console.log('Account already recorded in firebase');
			}
		} catch (e) {
			console.error(e);
		}
  });
}