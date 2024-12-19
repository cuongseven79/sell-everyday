/*=== SVG ===*/
import argentSVG from "assets/icons/argentina.svg";
import vietnamSVG from "assets/icons/vietnam.svg";
import usaSVG from "assets/icons/united-states.svg";

export const locates = [
  { country: "Vietnam", currency: "VND", flagURL: vietnamSVG, url: "/vi" },
  { country: "Argentina", currency: "PESO", flagURL: argentSVG, url: "/ar" },
  { country: "United States", currency: "USD", flagURL: usaSVG, url: "/us" },
];
export const equipments = [{ name: "Fan" }, { name: "Bulb" }, { name: "Gas" }];

export const categories = [
  {
    category_id: 1,
    category_name: "Electronics",
    category_types: [
      {
        id: 101,
        name: "Mobile Phones",
        products: [
          {
            product_id: 10101,
            product_name: "iPhone 14",
            product_price: 799,
            product_image: "iphone14.jpg",
            product_category: "Mobile Phones",
          },
          {
            product_id: 10102,
            product_name: "Samsung Galaxy S23",
            product_price: 749,
            product_image: "galaxys23.jpg",
            product_category: "Mobile Phones",
          },
          {
            product_id: 10103,
            product_name: "Google Pixel 8",
            product_price: 699,
            product_image: "pixel8.jpg",
            product_category: "Mobile Phones",
          },
          {
            product_id: 10104,
            product_name: "OnePlus 11",
            product_price: 649,
            product_image: "oneplus11.jpg",
            product_category: "Mobile Phones",
          },
          {
            product_id: 10105,
            product_name: "Xiaomi Mi 13",
            product_price: 599,
            product_image: "mi13.jpg",
            product_category: "Mobile Phones",
          },
        ],
      },
      {
        id: 102,
        name: "Laptops",
        products: [
          {
            product_id: 10201,
            product_name: "MacBook Pro",
            product_price: 1299,
            product_image: "macbookpro.jpg",
            product_category: "Laptops",
          },
          {
            product_id: 10202,
            product_name: "Dell XPS 15",
            product_price: 1199,
            product_image: "dellxps15.jpg",
            product_category: "Laptops",
          },
          {
            product_id: 10203,
            product_name: "HP Spectre x360",
            product_price: 1099,
            product_image: "hpspectre.jpg",
            product_category: "Laptops",
          },
          {
            product_id: 10204,
            product_name: "Lenovo ThinkPad",
            product_price: 999,
            product_image: "thinkpad.jpg",
            product_category: "Laptops",
          },
          {
            product_id: 10205,
            product_name: "ASUS ROG Zephyrus",
            product_price: 1399,
            product_image: "asusrog.jpg",
            product_category: "Laptops",
          },
        ],
      },
      {
        id: 103,
        name: "Audio Devices",
        products: [
          {
            product_id: 10301,
            product_name: "AirPods Pro",
            product_price: 249,
            product_image: "airpodspro.jpg",
            product_category: "Audio Devices",
          },
          {
            product_id: 10302,
            product_name: "Sony WH-1000XM5",
            product_price: 349,
            product_image: "sonywh1000xm5.jpg",
            product_category: "Audio Devices",
          },
          {
            product_id: 10303,
            product_name: "Bose SoundLink",
            product_price: 299,
            product_image: "bosesoundlink.jpg",
            product_category: "Audio Devices",
          },
          {
            product_id: 10304,
            product_name: "JBL Flip 6",
            product_price: 129,
            product_image: "jblflip6.jpg",
            product_category: "Audio Devices",
          },
          {
            product_id: 10305,
            product_name: "Beats Studio Buds",
            product_price: 149,
            product_image: "beatsstudiobuds.jpg",
            product_category: "Audio Devices",
          },
        ],
      },
      {
        id: 104,
        name: "Wearables",
        products: [
          {
            product_id: 10401,
            product_name: "Apple Watch Series 9",
            product_price: 399,
            product_image: "applewatch9.jpg",
            product_category: "Wearables",
          },
          {
            product_id: 10402,
            product_name: "Samsung Galaxy Watch 6",
            product_price: 349,
            product_image: "galaxywatch6.jpg",
            product_category: "Wearables",
          },
          {
            product_id: 10403,
            product_name: "Fitbit Charge 5",
            product_price: 179,
            product_image: "fitbitcharge5.jpg",
            product_category: "Wearables",
          },
          {
            product_id: 10404,
            product_name: "Garmin Fenix 7",
            product_price: 699,
            product_image: "garminfenix7.jpg",
            product_category: "Wearables",
          },
          {
            product_id: 10405,
            product_name: "Huawei Watch GT 3",
            product_price: 249,
            product_image: "huaweigt3.jpg",
            product_category: "Wearables",
          },
        ],
      },
      {
        id: 105,
        name: "Tablets",
        products: [
          {
            product_id: 10501,
            product_name: "iPad Pro",
            product_price: 799,
            product_image: "ipadpro.jpg",
            product_category: "Tablets",
          },
          {
            product_id: 10502,
            product_name: "Samsung Galaxy Tab S9",
            product_price: 749,
            product_image: "galaxytabs9.jpg",
            product_category: "Tablets",
          },
          {
            product_id: 10503,
            product_name: "Microsoft Surface Pro 9",
            product_price: 999,
            product_image: "surfacepro9.jpg",
            product_category: "Tablets",
          },
          {
            product_id: 10504,
            product_name: "Lenovo Tab P12",
            product_price: 499,
            product_image: "lenovotabp12.jpg",
            product_category: "Tablets",
          },
          {
            product_id: 10505,
            product_name: "Amazon Fire HD 10",
            product_price: 149,
            product_image: "firehd10.jpg",
            product_category: "Tablets",
          },
        ],
      },
    ],
  },
  {
    category_id: 2,
    category_name: "Fashion",
    category_types: [
      {
        id: 200,
        name: "Clothing",
        products: [
          {
            product_id: 10201,
            product_name: "T-Shirt",
            product_price: 20,
            product_image: "tshirt.jpg",
            product_category: "Clothing",
          },
          {
            product_id: 10202,
            product_name: "Jeans",
            product_price: 50,
            product_image: "jeans.jpg",
            product_category: "Clothing",
          },
          {
            product_id: 10203,
            product_name: "Jacket",
            product_price: 100,
            product_image: "jacket.jpg",
            product_category: "Clothing",
          },
          {
            product_id: 10204,
            product_name: "Dress",
            product_price: 70,
            product_image: "dress.jpg",
            product_category: "Clothing",
          },
          {
            product_id: 10205,
            product_name: "Shorts",
            product_price: 25,
            product_image: "shorts.jpg",
            product_category: "Clothing",
          },
        ],
      },
      {
        id: 201,
        name: "Men's Clothing",
        products: [
          {
            product_id: 20101,
            product_name: "Polo Shirt",
            product_price: 40,
            product_image: "poloshirt.jpg",
            product_category: "Men's Clothing",
          },
          {
            product_id: 20102,
            product_name: "Formal Pants",
            product_price: 60,
            product_image: "formalpants.jpg",
            product_category: "Men's Clothing",
          },
          {
            product_id: 20103,
            product_name: "Suit Jacket",
            product_price: 150,
            product_image: "suitjacket.jpg",
            product_category: "Men's Clothing",
          },
          {
            product_id: 20104,
            product_name: "Hoodie",
            product_price: 50,
            product_image: "hoodie.jpg",
            product_category: "Men's Clothing",
          },
          {
            product_id: 20105,
            product_name: "Casual Shirt",
            product_price: 30,
            product_image: "casualshirt.jpg",
            product_category: "Men's Clothing",
          },
        ],
      },
      {
        id: 202,
        name: "Women's Clothing",
        products: [
          {
            product_id: 20201,
            product_name: "Blouse",
            product_price: 30,
            product_image: "blouse.jpg",
            product_category: "Women's Clothing",
          },
          {
            product_id: 20202,
            product_name: "Skirt",
            product_price: 40,
            product_image: "skirt.jpg",
            product_category: "Women's Clothing",
          },
          {
            product_id: 20203,
            product_name: "Evening Gown",
            product_price: 100,
            product_image: "eveninggown.jpg",
            product_category: "Women's Clothing",
          },
          {
            product_id: 20204,
            product_name: "Leggings",
            product_price: 25,
            product_image: "leggings.jpg",
            product_category: "Women's Clothing",
          },
          {
            product_id: 20205,
            product_name: "Tank Top",
            product_price: 20,
            product_image: "tanktop.jpg",
            product_category: "Women's Clothing",
          },
        ],
      },
      {
        id: 203,
        name: "Shoes",
        products: [
          {
            product_id: 20301,
            product_name: "Running Shoes",
            product_price: 120,
            product_image: "runningshoes.jpg",
            product_category: "Shoes",
          },
          {
            product_id: 20302,
            product_name: "Formal Shoes",
            product_price: 150,
            product_image: "formalshoes.jpg",
            product_category: "Shoes",
          },
          {
            product_id: 20303,
            product_name: "Sandals",
            product_price: 50,
            product_image: "sandals.jpg",
            product_category: "Shoes",
          },
          {
            product_id: 20304,
            product_name: "Sneakers",
            product_price: 100,
            product_image: "sneakers.jpg",
            product_category: "Shoes",
          },
        ],
      },
    ],
  },
  {
    category_id: 3,
    category_name: "Home Appliances",
    category_types: [
      // {
      //   "id": 103,
      //   "name": "Kitchen",
      //   "products": [
      //     { "product_id": 10301, "product_name": "Microwave", "product_price": 200, "product_image": "microwave.jpg", "product_category": "Kitchen" },
      //     { "product_id": 10302, "product_name": "Refrigerator", "product_price": 1200, "product_image": "refrigerator.jpg", "product_category": "Kitchen" },
      //     { "product_id": 10303, "product_name": "Blender", "product_price": 50, "product_image": "blender.jpg", "product_category": "Kitchen" },
      //     { "product_id": 10304, "product_name": "Toaster", "product_price": 30, "product_image": "toaster.jpg", "product_category": "Kitchen" },
      //     { "product_id": 10305, "product_name": "Coffee Maker", "product_price": 100, "product_image": "coffeemaker.jpg", "product_category": "Kitchen" }
      //   ]
      // }
    ],
  },
  {
    category_id: 4,
    category_name: "Sports & Outdoors",
    category_types: [
      {
        id: 104,
        name: "Fitness",
        products: [
          {
            product_id: 10401,
            product_name: "Yoga Mat",
            product_price: 30,
            product_image: "yogamat.jpg",
            product_category: "Fitness",
          },
          {
            product_id: 10402,
            product_name: "Dumbbells",
            product_price: 80,
            product_image: "dumbbells.jpg",
            product_category: "Fitness",
          },
          {
            product_id: 10403,
            product_name: "Resistance Bands",
            product_price: 15,
            product_image: "resistancebands.jpg",
            product_category: "Fitness",
          },
          {
            product_id: 10404,
            product_name: "Treadmill",
            product_price: 600,
            product_image: "treadmill.jpg",
            product_category: "Fitness",
          },
          {
            product_id: 10405,
            product_name: "Exercise Bike",
            product_price: 300,
            product_image: "exercisebike.jpg",
            product_category: "Fitness",
          },
        ],
      },
    ],
  },
  {
    category_id: 5,
    category_name: "Toys",
    category_types: [
      // {
      //   "id": 105,
      //   "name": "Games & Puzzles",
      //   "products": [
      //     { "product_id": 10501, "product_name": "Lego Set", "product_price": 75, "product_image": "lego.jpg", "product_category": "Games & Puzzles" },
      //     { "product_id": 10502, "product_name": "Chess Board", "product_price": 30, "product_image": "chessboard.jpg", "product_category": "Games & Puzzles" },
      //     { "product_id": 10503, "product_name": "Jigsaw Puzzle", "product_price": 20, "product_image": "jigsaw.jpg", "product_category": "Games & Puzzles" },
      //     { "product_id": 10504, "product_name": "Rubik's Cube", "product_price": 10, "product_image": "rubikscube.jpg", "product_category": "Games & Puzzles" },
      //     { "product_id": 10505, "product_name": "Board Game", "product_price": 40, "product_image": "boardgame.jpg", "product_category": "Games & Puzzles" }
      //   ]
      // }
    ],
  },
];
