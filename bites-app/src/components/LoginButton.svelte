<script>
	import { auth } from '$lib/firebase/firebase.client';
	import { authStore } from '$lib/stores/authStore';
	import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

	let login_modal_open = false;

	const googleLogin = async () => {
		const provider = new GoogleAuthProvider();

		signInWithPopup(auth, provider).then((result) => {
			// moved this to layout.svelte
			$authStore = {
				isLoggedIn: true,
				user: result.user
			};
			login_modal_open = false;
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

	const toggleLoginModal = () => {
		login_modal_open = !login_modal_open;
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
		<button class="btn text-lg" on:click="{() => logOut()}">Log out</button>
	{:else}
		<button class="btn text-lg" on:click="{toggleLoginModal}">Log in</button>
	{/if}

	<dialog class="modal" class:modal-open="{login_modal_open}">
		<div class="modal-box join join-vertical">
			<h3 class="font-bold text-lg flex">Select a login provider</h3>
			<div class="divider"></div>
			<button class="btn btn-lg" on:click="{() => googleLogin()}">Login with Google</button>
			<button class="btn btn-lg">Login with Apple</button>
			<button class="btn btn-lg">Login with Facebook</button>
		</div>
		<div></div>
		<form method="dialog" class="modal-backdrop">
			<button on:click="{toggleLoginModal}">Close</button>
		</form>
	</dialog>
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
