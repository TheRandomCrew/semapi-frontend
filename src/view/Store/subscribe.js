import React from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./CheckoutForm";

const Subscribe = ({ item = { name: "", id: 0 } }) => {
  return (
    <StripeProvider apiKey="pk_test_LkUEiFADRw9eseawP7xdvpji00lqUymi2L">
      <Elements>
        <CheckoutForm item={item} />
      </Elements>
    </StripeProvider>
  );
};

export default Subscribe;
