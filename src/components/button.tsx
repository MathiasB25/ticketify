import { component$ } from "@builder.io/qwik";

interface GetProps {
    text: string,
    px: string,
    py: string,
    rounded: string,
    size: string,
    disabled: boolean,
    ifDisabled: string,
    fn: VoidFunction
}

export default component$((props: GetProps) => {
    const { text, px, py, rounded, size, disabled, ifDisabled, fn } = props;

    return (
        <div 
            class={`bg-black text-white font-semibold uppercase w-fit select-none ${ disabled ? ifDisabled : 'border-2 border-black hover:bg-transparent hover:text-black transition-colors cursor-pointer' }`}
            style={{padding: `${py}px ${px}px`, borderRadius: `${rounded}px`, fontSize: `${size}rem`}}
            onClick$={fn}
        >
            {text}
        </div>
    )
})