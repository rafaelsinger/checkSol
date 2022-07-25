const checkSol = () => {
    const isPhantomInstalled = window.phantom?.solana?.isPhantom; //boolean that checks if there is an established phantom connection
    const slope = new window.Slope(); //slope
    return isPhantomInstalled || slope;
}