const Product1 = {
    name: "Iphone 16 Pro Max",
    description: "iOS 18,512GB, 48 MP Triple-Kamera, RAM: 8GB,Chip: Apple A18 Pro",
    price: 1299,
    info: function () {
        return `${this.name} ${this.description} ${this.price} €`;
    }
};

const Product2 = {
    name: "tomtom navigator 7 Europa",
    description: "Navigation,ROM 32GB,7Zoll, Black, RAM 4GB, lifetime Mapupdate",
    price: 209,
    info: function () {
        return `${this.name} ${this.description} ${this.price} €`;
    }
};

const Product3 = {
    name: "Samsung TV",
    description: "S95F 77 Zoll 4K, OLED, Dolby Atmos, RAM 12GB, Tizen OS,Graphitschwarz",
    price: 3879,
    info: function () {
        return `${this.name} ${this.description} ${this.price} € `;
    }
};

function Product(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.info = function () {
        return `${this.name} ${this.description} ${this.price} €`;
    }
}



let GooglePixelPro = new Product("Google Pixel 9 Pro", "Rose, Android 15,128GB,RAM 16GB,CPU Tensor G4 Octa-Core", 809);
let SamsungS25Ultra = new Product("Samsung Galaxy S25 Ultra 5G", "Android 15, 512GB, Titanium Gray, RAM 12GB, CPU Snapdragon 8 Elite", 1359);
let GarminNavigator = new Product("Garmin DriveSmart 86 EU MT-S", "8 Zoll, Mapupdate lifetime, Radar", 329);
let LGOled65 = new Product("LG TV", "LG OLED65C5ELB 65 Zoll 4K OLED α9 Gen8 4K AI Prozessor, webOS 25, 120Hz", 1499);

const allProducts = [Product1, Product2, Product3, GooglePixelPro, SamsungS25Ultra, GarminNavigator, LGOled65];

allProducts.forEach((product, index) => {
    console.log("============= Товар =============")
    console.log(`Товар ${index + 1}`);
    console.log(` name: ${product.name}`);
    console.log(` price: ${product.price} €`);
    console.log(` description: ${product.description}`);
    console.log("============= info ===============")
    console.log(` info: ${product.info()}`);

});




