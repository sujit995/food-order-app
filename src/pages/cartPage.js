import { auth, fs } from "../config/Config";
import React, { useState, useEffect } from "react";
import CartProducts from "../components/cart/CartProducts";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "../components/Modal";

const CartPage = () => {
  const navigate = useNavigate();
  const [cartProducts, setCartProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid).onSnapshot((snapshot) => {
          const newCart = snapshot.docs.map((doc) => ({
            ID: doc.id,
            ...doc.data(),
          }));
          setCartProducts(newCart);
        });
      } else {
        console.log("user is not signed in to review cart");
      }
    });
  }, []);

  // global variable
  let Product;

  // cart product increase functionality
  const cartProductIncrease = (cartProduct) => {
    Product = cartProduct;
    Product.qty = Product.qty + 1;
    Product.TotalProductPrice = Product.qty * Product.price;
    // Updating database
    auth.onAuthStateChanged((user) => {
      if (user) {
        fs.collection("Cart " + user.uid)
          .doc(cartProduct.ID)
          .update(Product)
          .then(() => {
            console.log("increase added");
          });
      } else {
        console.log("user is not lodded in to increament");
      }
    });
    console.log(cartProduct);
  };

  // cart product decrease functionality
  const cartProductDecrease = (cartProduct) => {
    Product = cartProduct;
    if (Product.qty > 1) {
      Product.qty = Product.qty - 1;
      Product.TotalProductPrice = Product.qty * Product.price;
      // Updating database
      auth.onAuthStateChanged((user) => {
        if (user) {
          fs.collection("Cart " + user.uid)
            .doc(cartProduct.ID)
            .update(Product)
            .then(() => {
              console.log("decrement");
            });
        } else {
          console.log("user is not lodded in to decreament");
        }
      });
    }
  };

  // getting the quantity from cartProducts in a separate array
  const qty = cartProducts.map((cartProduct) => {
    return cartProduct.qty;
  });

  // reduce the qty in a single value
  const reduceOfQty = (acc, value) => acc + value;
  const totalQty = qty.reduce(reduceOfQty, 0);

  // getting the totalProductPrice from cartProducts in a separate array
  const price = cartProducts.map((cartProduct) => {
    return cartProduct.TotalProductPrice;
  });

  const reduceOfPrice = (acc, currValue) => acc + currValue;
  const totalPrice = price.reduce(reduceOfPrice, 0);
  // console.log(cartProducts);

  // Payment Charging
  const handleToken = async (token) => {
    const cart = { name: "All Products", totalPrice };
    const response = await axios.post(
      "https://foodcart-app.herokuapp.com/checkout",
      {
        token,
        cart,
      }
    );
    console.log(response);
    let { status } = response.data;
    if (status === "success") {
      navigate("/menu");
      toast.success("Your order has been placed successfully");

      const uid = auth.currentUser.uid;
      const carts = await fs.collection("Cart " + uid).get();
      for (var snap of carts.docs) {
        fs.collection("Cart " + uid)
          .doc(snap.id)
          .delete();
      }
    } else {
      alert("something went wrong in checkout");
    }
  };

  const triggerModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {cartProducts.length > 0 && (
        <div className="flex flex-row justify-around w-full mt-16 mb-16 md:flex-col">
          <h1 className="text-center">Your Cart Items</h1>
          <div className="flex justify-center align-middle mt-5">
            <div className="w-1/2">
              <CartProducts
                cartProducts={cartProducts}
                cartProductIncrease={cartProductIncrease}
                cartProductDecrease={cartProductDecrease}
              />
            </div>
            <div className="w-1/2">
              <div className="text-center bg-white rounded-lg shadow-md py-4">
                <h3 className="text-xl mt-4 md:text-base">
                  Cart Summary
                </h3>
                <div className="text-lg mt-4 md:text-base">
                  Total no. of products:{" "}
                  <span className="font-bold">{totalQty}</span>
                </div>
                <div className="text-lg mt-4 md:text-base">
                  Total price to Pay:{" "}
                  <span className="font-bold">₹ {totalPrice}</span>
                </div>
                <StripeCheckout
                  stripeKey="pk_test_51IDLm4CaTlxfMmIEiqlMxh4CuToLCLnBsTpsfRmfvzDIHxjfg8iujPMeuV0Lp5wc2ZPXyyD1Ywcd2RhCqAwqtPeG001vo3aoDL"
                  token={handleToken}
                  billingAddress
                  shippingAddress
                  name="All Products"
                  amount={totalPrice * 100} // Convert to cents
                ></StripeCheckout>
                <p className="mt-[10px]">Or</p>
                <button
                  className="bg-green-500 border-none rounded-md shadow-md text-white font-bold cursor-pointer px-2 py-2"
                  onClick={() => triggerModal()}
                >
                  Cash on Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartProducts.length < 1 && (
        <div className="text-3xl font-bold italic text-center mt-10 md:text-2xl">
          Your cart is empty
        </div>
      )}
      {showModal === true && (
        <Modal
          totalPrice={totalPrice}
          totalQty={totalQty}
          hideModal={hideModal}
        />
      )}
    </div>
  );
};

export default CartPage;
