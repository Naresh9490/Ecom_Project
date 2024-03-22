import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faWallet,
  faMoneyBillWave,
  faBarcode,
} from "@fortawesome/free-solid-svg-icons";
import { faPaypal, faGooglePay } from "@fortawesome/free-brands-svg-icons";

const Payment = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    name: "",
    number: "",
    expiration: "",
    cvv: "",
    email: "", // For PayPal
    upiId: "", // For UPI
    voucherCode: "", // For Voucher
  });
  const [showCoupons, setShowCoupons] = useState(false);

  const couponCodes = [
    {
      code: "SAVE10",
      imageUrl: "/images/ten-percent-discount-tag_1308-82.jpg",
    },
    {
      code: "DISCOUNT20",
      imageUrl: "/images/sale-banner-template-with-waterc.jpg",
    },
    {
      code: "OFFER15",
      imageUrl: "/images/sale-15-off-poster-design-templa.jpg",
    },
    {
      code: "PROMO50",
      imageUrl:
        "/images/shopping-mall-illustration-set-half-price-discount-gleaming-giftlike-golden-coupon-coin_632180-345.jpg",
    },
    {
      code: "DEAL25",
      imageUrl: "/images/promo-code-insert-promo-code-cou.jpg",
    },
  ];

  const paymentOptions = [
    {
      method: "credit",
      icon: faCreditCard,
      label: "Credit Card",
      fields: ["name", "number", "expiration", "cvv"],
    },
    {
      method: "debit",
      icon: faWallet,
      label: "Debit Card",
      fields: ["name", "number", "expiration", "cvv"],
    },
    {
      method: "paypal",
      icon: faPaypal,
      label: "PayPal",
      fields: ["email"],
    },
    {
      method: "cashondelivery",
      icon: faMoneyBillWave,
      label: "Cash on Delivery",
      fields: [],
    },
    {
      method: "upi",
      icon: faGooglePay,
      label: "UPI",
      fields: ["upiId"],
    },
    {
      method: "voucher",
      icon: faBarcode,
      label: "Voucher",
      fields: ["voucherCode"],
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(paymentMethod, paymentDetails);
    // Simulate payment processing
    setPaymentCompleted(true); // Mark payment as completed
  };

  if (paymentCompleted) {
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-lg">
              <div className="card-body p-5 text-center">
                <h2 className="card-title mb-4">Order Successful</h2>
                <p>Your payment has been processed successfully.</p>
                <p>Thank you for your purchase!</p>
                <button
                  className="btn btn-primary btn-lg mt-3"
                  onClick={() => navigate("/")}
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container  py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-lg">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Payment Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  {paymentOptions.map(({ method, icon, label }) => (
                    <div
                      key={method}
                      className="col-md-6 d-flex align-items-center mb-2"
                    >
                      <FontAwesomeIcon icon={icon} className="me-2" />
                      <input
                        id={method}
                        name="paymentMethod"
                        type="radio"
                        className="me-1"
                        required
                        onChange={() => handlePaymentMethodChange(method)}
                        checked={paymentMethod === method}
                      />
                      <label htmlFor={method}>{label}</label>
                    </div>
                  ))}
                </div>

                {/* Coupon Codes Section */}
                <div className="mb-4">
                  <button
                    type="button"
                    className="btn btn-info"
                    onClick={() => setShowCoupons(!showCoupons)}
                  >
                    Coupon Codes
                  </button>
                  {showCoupons && (
                    <div className="mt-3 text-center">
                      <h5>Available Coupons:</h5>
                      <ul className="list-unstyled">
                        {couponCodes.map(({ code, imageUrl }) => (
                          <li key={code} className="my-2">
                            <div>{code}</div>
                            <img
                              src={imageUrl}
                              alt={`Coupon ${code}`}
                              style={{ maxWidth: "100px", maxHeight: "100px" }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {paymentOptions
                  .find((option) => option.method === paymentMethod)
                  ?.fields.map((field) => (
                    <div key={field} className="mb-3">
                      <label htmlFor={`cc-${field}`} className="form-label">
                        {field.charAt(0).toUpperCase() +
                          field
                            .slice(1)
                            .replace(/([A-Z])/g, " $1")
                            .trim()}
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`cc-${field}`}
                        name={field}
                        required
                        onChange={handleChange}
                        value={paymentDetails[field]}
                      />
                    </div>
                  ))}

                <div
                  className="d-grid gap-2"
                  style={{ width: "50%", margin: "0 auto" }}
                >
                  <button className="btn btn-primary btn-lg" type="submit">
                    Complete Payment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
