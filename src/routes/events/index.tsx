import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from '@builder.io/qwik-city';
// Components
import { EventCard } from '~/components/event-card';
// Mock
import mockData from '../../../db/db.json'

export default component$(() => {
    return (
        <div class="">
			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
				{ mockData.map(event => (
					<EventCard
						id={event.id}
						title={event.title}
						description={event.description}
						preview={event.preview}
						price={event.price}
						date={event.date}
						soldout={event.soldout}
					/>
				))}
			</div>
		</div>
    )
})

export const head: DocumentHead = {
	title: 'Ticketify | Events',
};