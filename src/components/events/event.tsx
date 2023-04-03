import { component$, $ } from "@builder.io/qwik";
import { priceFormatter } from "~/hooks/priceFormatter";
// Dependencies
import moment from "moment";
// Components
import Button from "../button";

interface GreeterProps { 
    title: string,
    description: string,
    preview: string,
    price: number,
    date: string,
    soldout: boolean
}

export default component$((props: GreeterProps) => {

    const { title, description, preview, price, soldout } = props;

    const handleBuyTicket = $(() => {
        console.log('buy ticket');
    });

    return (
        <div class={"flex flex-col gap-10"}>
            <div class={"flex flex-col gap-4"}>
                <div class={"max-h-[26rem] overflow-hidden rounded-lg"}>
                    <img src={preview} alt="" />
                </div>
                <div class={"flex flex-col gap-3"}>
                    <div class={"text-2xl font-bold uppercase"}>{title}</div>
                    <div>{description}</div>
                </div>
            </div>
            <div class={"flex flex-col gap-5"}>
                <div class={"text-xl"}>
                    <div class={"flex justify-end"}>
                        <span class={"uppercase font-semibold"}>{moment(props.date).format('LL')}</span>
                    </div>
                    <div class={"flex items-center justify-between"}>
                        <div class={"uppercase font-bold"}>Price</div>
                        <div class={"flex items-center gap-2"}>
                            { soldout && <div class={"uppercase text-red-500 font-semibold"}>Sold Out</div> }
                            <div class={`font-semibold text-right text-green-700 ${soldout && 'line-through text-red-500'}`}>{priceFormatter(price)} USD</div>
                        </div>
                    </div>
                </div>
                <div class={"flex justify-end"}> 
                    <Button 
                        text="Buy my ticket"
                        px="16"
                        py="8"
                        rounded="8"
                        size="1.125"
                        disabled={soldout}
                        ifDisabled="opacity-80 cursor-not-allowed"
                        fn={handleBuyTicket}
                    />
                </div>
            </div>
        </div>
    )
})