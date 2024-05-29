class Hamburger {
    static SIZE_SMALL = 'small';
    static SIZE_LARGE = 'large';

    static STUFFING_CHEESE = 'cheese';
    static STUFFING_SALAD = 'salad';
    static STUFFING_POTATO = 'potato';

    static TOPPING_SEASONING = 'seasoning';
    static TOPPING_MAYO = 'mayo';

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
    }

    calculatePrice() {
        let price = 0;

        if (this.size === Hamburger.SIZE_SMALL) {
            price += 50;
        } else if (this.size === Hamburger.SIZE_LARGE) {
            price += 100;
        }

        if (this.stuffing === Hamburger.STUFFING_CHEESE) {
            price += 10;
        } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
            price += 20;
        } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
            price += 15;
        }

        for (const topping of this.toppings) {
            if (topping === Hamburger.TOPPING_SEASONING) {
                price += 15;
            } else if (topping === Hamburger.TOPPING_MAYO) {
                price += 20;
            }
        }

        return price;
    }

    calculateCalories() {
        let calories = 0;

        if (this.size === Hamburger.SIZE_SMALL) {
            calories += 20;
        } else if (this.size === Hamburger.SIZE_LARGE) {
            calories += 40;
        }

        if (this.stuffing === Hamburger.STUFFING_CHEESE) {
            calories += 20;
        } else if (this.stuffing === Hamburger.STUFFING_SALAD) {
            calories += 5;
        } else if (this.stuffing === Hamburger.STUFFING_POTATO) {
            calories += 10;
        }

        for (const topping of this.toppings) {
            if (topping === Hamburger.TOPPING_MAYO) {
                calories += 5;
            }
        }

        return calories;
    }
}

// маленький гамбургер з начинкою з сиру
var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
console.log("Calories: " + hamburger.calculateCalories());

// скільки коштує
console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
hamburger.addTopping(Hamburger.TOPPING_SEASONING);

// А скільки тепер коштує?
console.log("Price with seasoning: " + hamburger.calculatePrice());