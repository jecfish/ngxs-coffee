interface AppModel {
    // define state here
    coffeeList: Coffee[];
    cart: { name: string; quantity: number }[];
}

interface AppApp {
    readonly app: AppModel;
}

interface Coffee {
    name: string;
    price: number;
    recipe: RecipeItem[];
}

interface RecipeItem {
    name: string;
    quantity: number;
}