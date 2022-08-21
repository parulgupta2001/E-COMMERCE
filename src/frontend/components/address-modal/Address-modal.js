import "./address-modal.css";
import { useEffect, useState } from "react";
import { addAddress, editAddress } from "../../api-calls/address-calls";

export function AddressModal({
  setModal,
  userDispatch,
  token,
  edit,
  addressToEdit,
}) {
  const [addressInput, setAddressInput] = useState({});

  useEffect(() => {
    if (edit) {
      setAddressInput(addressToEdit);
    }
  }, [edit]);

  const submitAddress = () => {
    if (edit) {
      editAddress(addressToEdit._id, addressInput, userDispatch, token);
      setAddressInput("");
    } else {
      addAddress(addressInput, userDispatch, token);
      setAddressInput("");
    }

    setModal(false);
  };

  return (
    <div className="address-modal-container" onClick={() => setModal(false)}>
      <form className="address-modal" onClick={(e) => e.stopPropagation()}>
        <div>
          <label htmlFor="">Name</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setAddressInput({ ...addressInput, name: e.target.value })
            }
            value={addressInput?.name}
          />
        </div>
        <div>
          <label htmlFor="">Mobile</label>
          <br />
          <input
            required
            type="number"
            onChange={(e) =>
              setAddressInput({ ...addressInput, mobile: e.target.value })
            }
            value={addressInput.mobile}
          />
        </div>
        <div>
          <label htmlFor="">Address</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setAddressInput({ ...addressInput, area: e.target.value })
            }
            value={addressInput.area}
          />
        </div>
        <div>
          <label htmlFor="">Locality</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setAddressInput({ ...addressInput, locality: e.target.value })
            }
            value={addressInput.locality}
          />
        </div>
        <div>
          <label htmlFor="">Pincode</label>
          <br />
          <input
            required
            type="number"
            onChange={(e) =>
              setAddressInput({ ...addressInput, pincode: e.target.value })
            }
            value={addressInput.pincode}
          />
        </div>
        <div>
          <label htmlFor="">City</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setAddressInput({ ...addressInput, city: e.target.value })
            }
            value={addressInput.city}
          />
        </div>
        <div>
          <label htmlFor="">State</label>
          <br />
          <input
            required
            type="text"
            onChange={(e) =>
              setAddressInput({ ...addressInput, state: e.target.value })
            }
            value={addressInput.state}
          />
        </div>
        <div>
          <label htmlFor="">Alternate Phone No.</label>
          <br />
          <input
            required
            type="number"
            onChange={(e) =>
              setAddressInput({
                ...addressInput,
                alternatePhoneNumber: e.target.value,
              })
            }
            value={addressInput.alternatePhoneNumber}
            name="alternatePhoneNumber"
          />
        </div>

        <div className="address-modal-btn-container">
          <button
            className="address-modal-btn close-address-btn"
            onClick={() => setModal(false)}
          >
            Cancel
          </button>
          <button
            className="address-modal-btn edit-address-btn"
            onClick={submitAddress}
          >
            {!edit && <span>Add Address</span>}
            {edit && <span>Edit Address</span>}
          </button>
        </div>
      </form>
    </div>
  );
}
