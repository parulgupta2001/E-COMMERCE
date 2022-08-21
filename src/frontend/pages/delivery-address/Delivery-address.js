import { Address } from "../../components/address/Address";
import "./delivery-address.css";

export function DeliveryAddress() {
  return (
    <div className="delivery-address-container">
      <h2>Select Delivery Address</h2>
      <Address />
    </div>
  );
}
