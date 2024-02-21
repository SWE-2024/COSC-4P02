<script>
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/authStore';
	import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

	const googleLogin = async () => {
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider).then((result) => {
			// moved this to layout.svelte
			$authStore = {
				isLoggedIn: true,
				user: result.user
			};
		});
	};

	const logOut = async () => {
		signOut(auth).then(() => {
			$authStore = {
				isLoggedIn: false,
				user: undefined
			};
		});
	};

	// leaving this in case we want to ever bring back redirect log in
	// getRedirectResult(auth)
	// 	.then((result) => {
	// 		// const credential = GoogleAuthProvider.credentialFromResult(result);
	// 		// const token = credential?.accessToken;
	// 		// const user = result?.user;
	// 	})
	// 	.catch((error) => {
	// 		const errorCode = error.errorCode;
	// 		const errorMessage = error.errorMessage;
	// 		const email = error.customData.email;
	// 		const credential = GoogleAuthProvider.credentialFromError(error);
	// 		console.error(
	// 			'Could not sign in \n Error Code:' +
	// 				errorCode +
	// 				'\n' +
	// 				errorMessage +
	// 				'\nAttempted to sign in as: ' +
	// 				email +
	// 				'\nCredential: ' +
	// 				credential
	// 		);
	// 	});
</script>

<main>
	{#if $authStore.isLoggedIn}
		<button class="btn" on:click="{() => logOut()}">Log out</button>
	{:else}
		<button on:click="{() => googleLogin()}">Log in</button>
	{/if}
</main>

<style>
	/* button {
		border-radius: 8px;
		border: 1px solid transparent;
		padding: 0.6em 1.2em;
		font-size: 1em;
		font-weight: 500;
		font-family: inherit;
		background-color: #1a1a1a;
		cursor: pointer;
		transition: border-color 0.25s;
	}

	button:hover {
		border-color: #646cff;
	}

	button:focus,
	button:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	} */
</style>
