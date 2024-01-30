import React, { useState } from "react";
import { auth, fs } from "../config/Config";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ totalPrice, totalQty, hideModal }) => {
  const navigate = useNavigate();

  // Form states
  const [cell, setCell] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");

  // Handle cash on delivery
  const handleCashOnDelivery = async (e) => {
    e.preventDefault();
    const uid = auth.currentUser.uid;

    // Fetch user data
    const userData = await fs.collection("users").doc(uid).get();

    // Save buyer personal info
    await fs.collection("Buyer Personal Info").add({
      Name: userData.data().FullName,
      Email: userData.data().Email,
      CellNo: cell,
      ResidentialAddress: residentialAddress,
      CartPrice: totalPrice,
      CartQty: totalQty,
    });

    // Move cart items to buyer's cart
    const cartData = await fs.collection("Cart " + uid).get();
    cartData.forEach(async (doc) => {
      const data = doc.data();
      await fs.collection("Buyer-Cart " + uid).add(data);
      await fs
        .collection("Cart " + uid)
        .doc(doc.id)
        .delete();
    });

    // Hide modal, navigate, and show success toast
    hideModal();
    navigate("/menu");
    toast.success("Your order has been placed successfully", {
      backgroundColor: "green",
      color: "#fff",
    });
  };

  // Close modal
  const handleCloseModal = () => {
    hideModal();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70 flex justify-center items-center mx-auto">
      <div className="w-[450px] p-20 bg-white relative">
        <form className="h-auto" onSubmit={handleCashOnDelivery}>
          <fieldset>
            <legend>Phone Number</legend>
            <input
              className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
              type="number"
              placeholder="Cell No"
              required
              value={cell}
              onChange={(e) => setCell(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Address</legend>
            <input
              className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
              type="text"
              placeholder="Residential Address"
              required
              value={residentialAddress}
              onChange={(e) => setResidentialAddress(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <legend>Total Quantity</legend>
            <input
              className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
              type="text"
              readOnly
              required
              value={totalQty}
            />
          </fieldset>
          <fieldset>
            <legend>Total Price</legend>
            <input
              className="w-[200px] h-[30px] bg-gray-300 focus:outline-none p-7"
              type="text"
              readOnly
              required
              value={totalPrice}
            />
          </fieldset>
          <button className="h-[28px] w-[120px] bg-green-500 border-none rounded-md shadow-md text-white font-medium cursor-pointer mt-2">
            Submit
          </button>
        </form>
        <div
          className="bg-red-600 w-[25px] h-[25px] rounded-full flex items-center justify-center text-white text-sm font-semibold absolute top-0 right-0 cursor-pointer"
          onClick={handleCloseModal}
        >
          x
        </div>
      </div>
    </div>
  );
};

export default Modal;
