<script lang="ts">
	import { authStore } from '$lib/stores/authStore';
	import { themeStore } from '$lib/stores/themeStore';
	import NewModuleForm from './NewModuleForm.svelte';
	import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
	import { addDoc, collection } from 'firebase/firestore';
	import * as fire from '$lib/firebase/firebase.client';

	const storage = getStorage();
	const db = fire.db;
	const moduleCollection = collection(db, 'modules');

	/**
	 * @var fileinputEnabled  whether or not we have selected to add a file to this new module
	 * @var videourlEnabled whether or not we have selected to add a video to this module
	 */

	/**
	 * Form input data
	 */
	let data: {
		videoInput: string;
		fileInput: File;
		module_name: string;
		module_description: string;
	} = {
		videoInput: '',
		fileInput: new File([], ''),
		module_name: '',
		module_description: ''
	};

	let fileinputEnabled: boolean = true;
	let videourlEnabled: boolean = true;

	let modalOpen: boolean = false;

	/**
	 * Error messages for form.
	 */
	let error: {
		fileInput: string;
		videoInput: string;
		moduleNameInput: string;
		moduleDescriptionInput: string;
	} = {
		fileInput: '',
		videoInput: '',
		moduleNameInput: '',
		moduleDescriptionInput: ''
	};

	const toggleModal = () => {
		modalOpen = !modalOpen;
		error = { fileInput: '', videoInput: '', moduleNameInput: '', moduleDescriptionInput: '' };
	};

	const onKeyUp = (event: KeyboardEvent) => {
		// const target = event.target as HTMLInputElement;
		if (event.code == 'Escape' && modalOpen) {
			toggleModal();
		}
	};

	export let moduleLength: number;

	/**
	 * Check whether the input string is a videourl
	 * @param url
	 */
	const validateurl = (url: string = data.videoInput): boolean => {
		var youtubeRegex =
			/^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})$/;
		// return youtubeRegex.test(url)
		return true;
	};

	/**
	 * Take the information from the form & upload to firebase.
	 * @todo
	 */
	const handleFormSubmit = async () => {
		if (!validateurl() && videourlEnabled) {
			error.videoInput = '*Please enter a valid youtube video URL.';
		} else error.videoInput = '';
		if (data.fileInput.size == 0 && fileinputEnabled) {
			error.fileInput = '*No file selected.';
		} else error.fileInput = '';
		if (data.module_name.length == 0) {
			error.moduleNameInput = 'Please enter module name';
		} else error.moduleNameInput = '';
		if (data.module_description.length == 0) {
			error.moduleDescriptionInput = 'Please enter module description';
		} else error.moduleDescriptionInput = '';

		if (error.fileInput.length == 0 && error.videoInput.length == 0) {
			// We have no errors so we can add the stuff to firebase here.
			// Vinit your thing here.
			// console.log(data);

			let module = {
				index: moduleLength,
				module_description: data.module_description,
				module_name: data.module_name,
				moduleOpen: false,
				modules_content: [{}]
			};

			if (data.fileInput) {
				const storageRef = ref(storage, data.fileInput.name);

				uploadBytes(storageRef, data.fileInput).then((snapshot) => {
					getDownloadURL(storageRef).then(async (url: string) => {
						console.log(url);
						module.modules_content = [];
						module.modules_content.push({
							item_index: module.modules_content.length,
							item_name: 'item1',
							item_type: 'pdf',
							item_url: url
						});

						if (data.videoInput != '') {
							module.modules_content.push({
								item_index: module.modules_content.length,
								item_name: 'item2',
								item_type: 'pdf',
								item_url: data.videoInput
							});
						}

						console.log(module);

						let res = await addDoc(moduleCollection, module);

						toggleModal();
					});
				});
			}
		}
	};
</script>

<!-- This is a button for admin view. Only shows up on administrator accounts. -->
{#if $authStore.admin}
	<button
		class="btn rounded-none outline-dashed outline-2 btn-lg btn-block btn-neutral {$themeStore.isLight
			? 'outline-neutral'
			: 'outline-neutral-content'} outline-offset-4"
		on:click="{toggleModal}"
	>
		<div class="grid grid-cols-1 grid-rows-1 w-full">
			<p class="text-left content-center">Add New Module</p>
			<button class="btn btn-circle btn-ghost btn-md col-start-3">
				<svg
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
						d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
					></path>
				</svg>
			</button>
		</div>
	</button>
{/if}

<dialog class="modal" class:modal-open="{modalOpen}">
	<div class="modal-box w-11/12 max-w-2xl">
		<h3 class="font-bold text-lg flex">Add a new module</h3>
		<div class="divider"></div>

		<!-- TODO if we have time: change all these binds to a single object containing them all. -->
		<NewModuleForm bind:data bind:fileinputEnabled bind:videourlEnabled bind:error />

		<div class="modal-action">
			<button class="btn btn-primary float-left" on:click="{toggleModal}"> Cancel </button>
			<button
				class="btn btn-primary float-right"
				on:click="{() => {
					handleFormSubmit();
				}}"
			>
				Add Module
			</button>
		</div>
		<!-- Exit modal button -->
		<button on:click="{toggleModal}" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
			>✕</button
		>
	</div>
</dialog>

<svelte:window on:keydown="{onKeyUp}" />
