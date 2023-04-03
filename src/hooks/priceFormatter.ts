// Create our number formatter.
export const priceFormatter = (price: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return formatter.format(price);
}