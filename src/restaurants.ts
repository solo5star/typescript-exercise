interface IRestaurant {
    category: string;
    name: string;
    distance: number;
    menus: string[];
    hasAlcohol: boolean;
}

interface IRestaurants {
    restaurants: IRestaurant[];

    add(restaurant: IRestaurant): void;
    filterByCategory(category: string): IRestaurant[];
}

