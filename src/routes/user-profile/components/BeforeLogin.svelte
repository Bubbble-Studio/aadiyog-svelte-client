<script lang="ts">
	import BottomTabBar from '$lib/components/TabBar/BottomTabBar.svelte';
	import Community from '$lib/icons/CommunityIcon.svelte';
	import Courses from '$lib/icons/CoursesIcon.svelte';
	import User from '$lib/icons/UserIcon.svelte';
	import Profile from '$lib/icons/ProfileIcon.svelte';
	import { createEventDispatcher } from 'svelte';
	import Button from '$lib/components/Button/Button.svelte';
	import { goto } from '$app/navigation';

	let tabs = [
		{ name: 'Courses', icon: Courses },
		{ name: 'Community', icon: Community },
		{ name: 'Profile', icon: Profile }
	];

	let activeTab = 2;
	const dispatch = createEventDispatcher();
	function handleClick(index: number) {
		activeTab = index;
		dispatch('click', activeTab);
	}
	function handelSignUp() {
		goto('/user-profile/2');
	}
</script>

<div class="w-full px-8 pt-12 pb-4 flex flex-row items-center justify-center bg-white">
	<h1 class="ml-2 text-neutral-grey-3 font-semibold">Profile</h1>
</div>

<div class="h-full px-8 pt-8 flex flex-col items-start w-full overflow-x-hidden bg-neutral-grey-11">
	<div class="bg-white px-4 py-4 rounded-xl">
		<div class="flex flex-row items-center justify-center">
			<div class="flex items-center justify-center w-28 h-20 rounded-full bg-neutral-grey-11">
				<User />
			</div>
			<div class="ml-4">
				<h2 class="text-neutral-grey-2 font-semibold">Guest User</h2>
				<h3 class="text-neutral-grey-3 mt-2">Create an account to save and track your progress</h3>
			</div>
		</div>

		<div class="mt-4">
			<Button id="Signup or Login" fullWidth variant="primary" on:click={handelSignUp}
				>Sign up or Login</Button
			>
		</div>
	</div>

	<div class="fixed bottom-0 left-0 w-full bg-white">
		<BottomTabBar {tabs} id="One" activeTab={2} />
	</div>
</div>
