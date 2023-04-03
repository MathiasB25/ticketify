import { component$ } from '@builder.io/qwik';
// Dependencies
import moment from 'moment'
// Hooks
import { priceFormatter } from '~/hooks/priceFormatter';

interface GreeterProps { 
    id: number,
    title: string,
    description: string,
    preview: string,
    price: number,
    date: string,
    soldout: boolean
}

export const EventCard = component$((props: GreeterProps) => {

    return (
        <a href={`/events/${props.id}`}>
            <div class={"flex flex-col gap-y-4 hover:scale-105 hover:shadow-2xl bg-white rounded-lg p-4 transition-all"}>
                <div class="h-[200px] overflow-hidden rounded-lg">
                    <img src={props.preview} alt="Image preview" />
                </div>
                <div class="flex flex-col">
                    <div class={"text-lg font-bold uppercase"}>{props.title}</div>
                    <div class={"event-card-description"}>{props.description}</div>
                </div>
                <div class={"flex flex-col"}>
                    <div class={"flex justify-end"}>
                        <span class={"uppercase font-semibold"}>{moment(props.date).format('LL')}</span>
                    </div>
                    <div class={"flex items-center justify-between"}>
                        <div class={"uppercase font-bold"}>Price</div>
                        <div class={"flex items-center gap-2"}>
                            { props.soldout && <div class={"uppercase text-red-500 font-semibold"}>Sold Out</div> }
                            <div class={`font-semibold text-right text-green-700 ${props.soldout && 'line-through text-red-500'}`}>{priceFormatter(props.price)} USD</div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
});
