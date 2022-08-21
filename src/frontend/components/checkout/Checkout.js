import { useUser } from "../../contexts/index";
import "./checkout.css";

export function Checkout() {
  const { deliveryAddress } = useUser();
  return (
    <div className="checkout-container">
      <span>{deliveryAddress.name}</span>
      <br />
      <span>{deliveryAddress.area}</span>
      <br />
      <span>{deliveryAddress.locality}</span>
      <br />
      <span>
        {deliveryAddress.city}, {deliveryAddress.state} -
        {deliveryAddress.pincode}
      </span>
      <br />
      <span>Contact: {deliveryAddress.mobile}</span>
    </div>
  );
}
