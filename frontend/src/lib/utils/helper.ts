export function getOptionName(
    epoch: string,
    strike: string,
    expiry: string,
    nft: string
) {
    const option = nft + "-" + epoch + "-" + strike + "eth-" + expiry;
    console.log("Option", option);
    
    return option
}

export function getQuantity(amount: string, premium: string): Number {
    return Number(amount)/Number(premium);
}

