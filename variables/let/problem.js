function getLowestProce(item) {
    const count = item.inventoty;
    let price = item.price;
    if (item.salePrice) {
        const saleCount = item.saleInventory;
        if (saleCount > 0) {
            price = item.salePrice;
        }
    }
    if (count) {
        return price;
    }
    return 0;
}

const item = {
    inventoty: 0,
    price: 3,
    salePrice: 0,
    saleInventory: 0, 
};