import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Active Wear",
    url: "http://res.cloudinary.com/dwhran9qg/image/upload/Active Wear/BmbleLeggingsMotionBurgundy_z9oslf.webp",
  },
  {
    _id: uuid(),
    categoryName: "Cricket",
    url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/istockphoto-497200319-612x612_k32vj0.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Football",
    url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/png-clipart-fifa-15-fifa-18-fifa-street-4-fc-barcelona-2014-fifa-world-cup-messi-tshirt-sport-thumbnail_xfcmnp.png",
  },
  {
    _id: uuid(),
    categoryName: "Fitness Equipments",
    url: "http://res.cloudinary.com/dwhran9qg/image/upload/Image/25-254513_running-on-treadmill-png_eknbdt.jpg",
  },
];
