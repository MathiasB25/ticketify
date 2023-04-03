import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<div class="">
			<div>Home page</div>
		</div>
	);
});

export const head: DocumentHead = {
	title: 'Ticketify | Home',
	meta: [
		{
			name: 'description',
			content: 'Buy a ticket for your favorite events.',
		},
	],
};