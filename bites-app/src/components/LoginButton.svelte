<script lang="ts">
	import { authStore, loginWithGoogle, logout } from '$lib/stores/authStore';

	import google_icon from '$lib/images/icon-google.svg';
	import facebook_icon from '$lib/images/icon-facebook.svg';
	import apple_icon from '$lib/images/icon-apple.svg';

	let login_modal_open = false;

	// console.log($authStore.user)

	authStore.subscribe((storedUser) => ({ user: storedUser }));

	const googleLoginHandler = () => {
		loginWithGoogle().then(() => {
			login_modal_open = false;
		});
	};

	const logoutHandler = () => {
		logout();
	};

	const toggleLoginModal = () => {
		login_modal_open = !login_modal_open;
	};
</script>

<main>
	{#if $authStore.isLoggedIn}
		<button class="btn text-lg btn-ghost" on:click="{logoutHandler}">
			<img src="{$authStore.user?.photoURL}" alt="" class="w-10 rounded-full" />
			Log out
		</button>
	{:else}
		<button class="btn text-lg btn-ghost" on:click="{toggleLoginModal}"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
				></path>
			</svg>
			Log in</button
		>
	{/if}

	<dialog class="modal" class:modal-open="{login_modal_open}">
		<div class="modal-box join join-vertical">
			<h3 class="font-bold text-lg flex">Select a login provider</h3>
			<div class="divider"></div>
			<button
				class="btn btn-lg bg-[color:white] text-[color:black] mb-3"
				on:click="{googleLoginHandler}"
			>
				<img src="{google_icon}" alt="Google Logo" class="absolute left-11 h-8 w-8" />
				Login with Google
			</button>
			<button class="btn btn-lg bg-[color:black] mb-3">
				<img src="{apple_icon}" alt="Apple Logo" class="absolute left-10 h-8 w-8" />
				Login with Apple
			</button>
			<button class="btn btn-lg bg-[color:#1778f2] text-[color:white]">
				<img src="{facebook_icon}" alt="Facebook Logo" class="absolute left-11 h-7 w-7" />
				Login with Facebook
			</button>
		</div>
		<div></div>
		<form method="dialog" class="modal-backdrop">
			<button on:click="{toggleLoginModal}">Close</button>
		</form>
	</dialog>
</main>

<style>
</style>
