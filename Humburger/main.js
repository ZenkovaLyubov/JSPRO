const sizeHum = [
    { title: 'Маленький', price: 50, kkal: 20 },
    { title: 'Большой', price: 100, kkal: 40 },
];
const stuffingHum = [
    { title: 'Сыр', price: 10, kkal: 20 },
    { title: 'Салат', price: 20, kkal: 5 },
    { title: 'Картофель', price: 15, kkal: 10 },
];
const toppingHum = [
    { title: 'Зелень', price: 15, kkal: 0 },
    { title: 'Майонез', price: 20, kkal: 5 },
];

class Humburger {
    constructor(size = {}, stuffing = {}, topping1 = {}, topping2 = {}) {

        this.sizeH = size;
        this.stuffingH = stuffing;
        this.toppingH1 = topping1;
        this.toppingH2 = topping2;
    }
    sumPrice() {
        const { price: priceSize = 0 } = this.sizeH;
        const { price: priceStuffing = 0 } = this.stuffingH;
        const { price: pricetopping1 = 0 } = this.toppingH1;
        const { price: pricetopping2 = 0 } = this.toppingH2;
        const sum = priceSize + priceStuffing + pricetopping1 + pricetopping2;
        console.log(`Сумма: ${sum} рублей`);
    }
    sumKkal() {
        const { kkal: kkalSize = 0 } = this.sizeH;
        const { kkal: kkalStuffing = 0 } = this.stuffingH;
        const { kkal: kkaltopping1 = 0 } = this.toppingH1;
        const { kkal: kkaltopping2 = 0 } = this.toppingH2;
        const sum = kkalSize + kkalStuffing + kkaltopping1 + kkaltopping2;
        console.log(`Всего Ккал: ${sum}`);
    }
    getSize() {
        console.log(`Размер гамбургера: ${this.sizeH.title}`);
    }
    getStuffing() {
        console.log(`Начинка гамбургера: ${this.stuffingH.title}`);
    }
    getTopping() {
        const { title: titletopping1 = '' } = this.toppingH1;
        const { title: titletopping2 = '' } = this.toppingH2;
        if ((titletopping1 !== '') || (titletopping2 !== ''))
            console.log(`Добавки гамбургера: ${titletopping1} , ${titletopping2}`);
    }

}
const [S, L] = sizeHum;
const [cheese, salad, potatoes] = stuffingHum;
const [herb, mayo] = toppingHum;
const hum = new Humburger(L, salad, herb, mayo);
hum.sumPrice();
hum.sumKkal();
hum.getSize();
hum.getStuffing();
hum.getTopping();


