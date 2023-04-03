import { component$, Slot } from '@builder.io/qwik';
import { routeLoader$ } from '@builder.io/qwik-city';
// Components
import Header from '~/components/header';
import Footer from '~/components/footer';

export const useServerTimeLoader = routeLoader$(() => {
	return {
		date: new Date().toISOString(),
	};
});

export default component$(() => {
	return (
		<div class="flex flex-col justify-between h-screen">
			<main>
				<Header />
				<div class="p-10 xl:px-0 max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
					<Slot />
				</div>
			</main>
			<div class="">
				<div class="">
					<Footer />
				</div>
			</div>
		</div>
	);
});
