import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Cricket/ball_woy6oc.jpg",
    name: "NX Cricket White Season Ball ",
    price: 2999,
    rating: 3.7,
    stock: "In Stock",
    delivery: "Standard Delivery",
    categoryName: "Cricket",
    productDetail:
      " NX White Cricket Ball is Specially Made with Entirely Hand Stitched. It is Specially designed for match Practice, T20 Matches, Practice Sessions, T20 Tournaments.",
  },

  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Active Wear/activewear-promo-9c8cc063fabb42d78c7c7be32d15f2b3_wq5m8d.webp",
    name: "Ankle Length Leggings",
    price: 549,
    rating: 4.4,
    stock: "In Stock",
    delivery: "Fast Delivery",
    categoryName: "Active Wear",
    productDetail:
      "Product Dimensions 11 x 25 x 4 cm; 350 Grams, Manufacturer :Network Clothing Company, Country of Origin: India, Department: Women.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Cricket/61DIp2fEEKL._SX679__zrgdwu.jpg",
    name: "DSC Guard Cricket Helmet",
    price: 859,
    rating: 3.6,
    stock: "In Stock",
    delivery: "Fast Delivery",
    categoryName: "Cricket",
    productDetail:
      "Material:Outer Shell: Cloth Covered High Impact Resistant Polypropylene | Inner Mesh: Shock Resistant, Sweat Absorbent| High density EVA foam padding for superior cushioning.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Active Wear/T-shirt_uhzcco.jpg",
    name: "GM Cricket Men's Full T-Shirt",
    price: 1999,
    rating: 4.1,
    stock: "Out of Stock",
    delivery: "Standard Delivery",
    categoryName: "Active Wear",
    productDetail:
      "100 % Polyseter,Gsm : 160,Process : wicking properties,Polo construction with buttons,More comfortable,Sleeve with rib opening",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Fitness Accessories/Rope_nolt1p.jpg",
    name: "Skip Rope With Counter",
    price: 749,
    rating: 3.5,
    stock: "In Stock",
    delivery: "Standard Delivery",
    categoryName: "Fitness Equipment",
    productDetail:
      "Igera twist and kink resistant wire increases reliability, speed and endurance. Good for shedding weight fast, toning up and maintaining muscle tone.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Football/football_njg1tz.webp",
    name: "NIVIA Street Football - Size: 5 ",
    price: 699,
    rating: 4.2,
    stock: "Out of Stock",
    delivery: "Standard Delivery",
    categoryName: "Football",
    productDetail:
      "Nivia Street Football is highly durable and made up of rubber material. Suitable for Hard Ground without Grass,Wet & Grassy Ground & Artificial Turf. Proudly Made in India.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Fitness Equipments/Treadmill_xbrvqy.jpg",
    name: "TDA-600 Motorized Treadmill",
    price: 9000,
    rating: 2.9,
    stock: "In Stock",
    delivery: "Fast Delivery",
    categoryName: "Fitness Equipment",
    productDetail:
      "3-Year Motor Warranty, 1-Year Parts And Labour Warranty,3.0HP DC Motor,13.3 Touch Screen Display - Speed, Time, Distance, Calories burned, Heart rate,Max User Weight: 150KG.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Fitness Accessories/weights_pxl56y.webp",
    name: "cube cuffs | wrist and ankle weights",
    price: 1899,
    rating: 4.9,
    stock: "In Stock",
    delivery: "Standard Delivery",
    categoryName: "Fitness Equipment",
    productDetail:
      "Weighted wraps for your ankles & wrists for that comfortable resistance. At 1 lbs each, these beautiful bracelets can weigh in on every workout.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Football/Shoes_boecfy.jpg",
    name: "Nike Bravata II FG Football Shoes",
    price: 3495,
    rating: 4.6,
    stock: "Out of Stock",
    delivery: "Standard Delivery",
    categoryName: "Football",
    productDetail:
      "Product Dimension: 33 x 23 x 11 cm; 550 Grams, Department: Mens, Manufacturer: Nike, Item Dimensions LxWxH: 33 x 23 x 11 Centimeters, Net Quantity: 1 count",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Active Wear/Tracksuit_tfypbu.jpg",
    name: "Yonex Track Suit (Jet Blue)",
    price: 4224,
    rating: 3.4,
    stock: "In Stock",
    delivery: "Fast Delivery",
    categoryName: "Active Wear",
    productDetail:
      "Pattern: Solid Fabric: Polyester Fabric,Yonex Tracksuit is a court designed top that allows the full range of movement needed on court.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Football/81_RVmc3lKL._SX679__vbthvs.jpg",
    name: "Nivia Air Strike Football Keeper Gloves",
    price: 345,
    rating: 3.2,
    stock: "Out of Stock",
    delivery: "Standard Delivery",
    categoryName: "Football",
    productDetail:
      "Extra grip and durability in all weather conditions from the latex palm, Positive Cut provides a good and comfortable fit with a great contact area to the ball.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Cricket/Cricket_kit_mqckys.jpg",
    name: "DSC Premium Cricket Set",
    price: 5299,
    rating: 4.2,
    stock: "In Stock",
    delivery: "Standard Delivery",
    categoryName: "Cricket",
    productDetail:
      "1 Cricket Bat,1 DSC Helmet,1 Pair Batting Pad,1 thigh Pad,1 Pair Batting Gloves,1 Abdominal Guard,1 Arm Guard.",
  },
  {
    _id: uuid(),
    img: "https://res.cloudinary.com/dwhran9qg/image/upload/Fitness Equipments/Cardio_equipment_pw3rif.jpg",
    name: "Powermax Bike With Back Rest",
    price: 9890,
    rating: 1.9,
    stock: "Out of Stock",
    delivery: "Standard Delivery",
    categoryName: "Fitness Equipment",
    productDetail:
      "Powermax GB 110 SX Bike with Back Rest is equipped with an Adjustable seat height.This machine will provide you with Computer display for speed, time, distance & calories.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Active Wear/Wholesale-Gym-Wear-Women-Quickly-Dry-Fitness-Sports-Yoga-Wear-Custom-Women-Shorts-and-Bra-Set_f7mkww.jpg",
    name: "2 piece set of gym wear",
    price: 1859,
    rating: 4.3,
    stock: "Out of Stock",
    delivery: "Fast Delivery",
    categoryName: "Active Wear",
    productDetail:
      "Breathable, Quick-Drying, Body-Shape, Waterproof,Windbreak, Anti-Static, Seamless, Anti-Wrinkle,etc",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Cricket/p1623911_hnxonc.avif",
    name: "Safety Certified Cricket batting Pads",
    price: 1999,
    rating: 2.4,
    stock: "In Stock",
    delivery: "Standard Delivery",
    categoryName: "Cricket",
    productDetail:
      "Impact protection, EVA Foam padding enables a lightweight batting pad- 750 gms in Large size,User comfort.",
  },
  {
    _id: uuid(),
    img: "http://res.cloudinary.com/dwhran9qg/image/upload/Football/Football_jnjmua.jpg",
    name: "Adidas FIFA World Cup Football",
    price: 2499,
    rating: 4.4,
    stock: "In Stock",
    delivery: "Fast Delivery",
    categoryName: "Football",
    productDetail:
      "Model Name: WORLD CUP OMB,Certification:Officially licensed by FIFA,Stitching Type:Machine Stitched,Bladder Type:Latex bladder.",
  },
];
