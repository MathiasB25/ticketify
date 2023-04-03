import { component$ } from "@builder.io/qwik";
import { DocumentHead, useLocation } from "@builder.io/qwik-city";
// Mock
import mockData from '../../../../db/db.json';
import Event from "~/components/events/event";

export default component$(() => {
    
    const loc = useLocation();
    const eventId = Number(loc.params.event);
    const eventData = mockData.filter(event => event.id === eventId)[0];

    return (
        <div>
            <Event
                title={eventData.title}
                description={eventData.description}
                preview={eventData.preview}
                price={eventData.price}
                date={eventData.date}
                soldout={eventData.soldout}
            />
        </div>
    )
})

export const head: DocumentHead = {
	title: 'Ticketify | Event',
};