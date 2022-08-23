import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useUser, useAuth } from "../../contexts/index";
import { useEffect, useState } from "react";
import { getAddress, deleteAddress } from "../../api-calls/index";
import { useLocation, useNavigate } from "react-router-dom";
import { AddressModal } from "../index";

import "./address.css";

export function Address() {
  const [modal, setModal] = useState(false);
  const [edit, setEdit] = useState(false);
  const [addressToEdit, setaddressToEdit] = useState(false);

  const { userState, userDispatch, setDeliveryAddress } = useUser();
  const { address } = userState;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { authState } = useAuth();
  const { token } = authState;

  useEffect(() => {
    getAddress(token, userDispatch);
  }, []);

  return (
    <div className="address-container">
      {address.length === 0 && (
        <div className="no-address-available">No address available</div>
      )}
      <button className="add-new-address-btn" onClick={() => setModal(true)}>
        Add New Address
      </button>

      <div className="address-wrapper">
        {address.length > 0 &&
          address.map((add) => (
            <div className="address-content-container">
              <div
                className="delivery-address-content"
                key={add._id}
                onClick={() => {
                  if (pathname === "/deliveryAddress") {
                    setDeliveryAddress(add);
                    navigate("/cart/checkout");
                  }
                }}
              >
                <span>{add?.name}</span>
                <br />
                <span>{add?.area}</span>
                <br />
                <span>{add?.locality}</span>
                <br />
                <span>
                  {add?.city}, {add?.state} - {add?.pincode}
                </span>
                <br />
                <span>Contact:{add?.mobile}</span>
              </div>
              <div className="address-icons-container">
                <FaEdit
                  className="address-icon green-color"
                  onClick={() => {
                    setModal(true);
                    setEdit(true);
                    setaddressToEdit(add);
                  }}
                />
                <AiFillDelete
                  className="address-icon red-color"
                  onClick={() => deleteAddress(add._id, userDispatch, token)}
                />
              </div>
            </div>
          ))}
      </div>

      {modal && (
        <AddressModal
          setModal={setModal}
          userDispatch={userDispatch}
          token={token}
          edit={edit}
          addressToEdit={addressToEdit}
        />
      )}
    </div>
  );
}
