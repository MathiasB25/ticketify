import { component$, $ } from '@builder.io/qwik';
import Button from './button';

export default component$(() => {
	
	const handleSignIn = $(() => {
		console.log('sign in')
	})

	return (
		<header class="flex items-center justify-between h-14 py-2 px-10 shadow-sm border-b border-neutral-100">
			<div class="">
				<a href="/">
					<span class="text-xl hover:text-neutral-600 transition-colors hover:underline">Ticketify</span>
				</a>
			</div>
			<nav>
				<ul class="flex items-center gap-4">
					<li>
						<a class="hover:underline" href="/">Home</a>
					</li>
					<li>
						<a class="hover:underline" href="/events">Events</a>
					</li>
				</ul>
			</nav>
			<div>
				<div class={"flex items-center gap-5"}>
					<Button 
						text='Sign in'
						px='8'
						py='4'
						rounded='8'
						size='1'
						disabled={false}
						ifDisabled=''
						fn={handleSignIn}
					/>
				</div>
				{/* <div class="flex items-center justify-center w-10 h-10 rounded-full bg-neutral-300 hover:bg-neutral-400 select-none cursor-pointer transition-colors">
					<span class="font-semibold">M</span>
				</div> */}
			</div>
		</header>
	);
});
