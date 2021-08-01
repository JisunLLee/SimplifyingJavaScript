const taxRate = 0.1;
const shipping = 5.00;
const total = 100 + (100 * taxRate) + shipping;
retrun  `구매금액은 ${total} 입니다`;


const discountable = cart.filter(item => item.discountAvailable);
