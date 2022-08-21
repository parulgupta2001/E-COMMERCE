import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * Every user will have cart (Quantity of all Products in Cart is set to 1 by default), wishList by default
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Parul",
    lastName: "Gupta",
    email: "parulgupta@gmail.com",
    password: "parul123",
    address: [
      {
        _id: uuid(),
        name: "Parul Gupta",
        mobile: "9772129167",
        area: "401, Malviya Nagar, JLN Marg",
        locality: "Near Women Polytechnic College",
        pincode: "301215",
        city: "Jaipur",
        state: "Rajasthan",
        alternatePhoneNumber: "8386014141",
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
