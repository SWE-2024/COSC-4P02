import { doc } from "firebase/firestore"
import { auth, db } from "./firebase.client"
import { authStore } from "$lib/stores/authStore"

const userRef = doc(db, "user/" + auth.currentUser?.uid);
