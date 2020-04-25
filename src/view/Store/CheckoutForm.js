import React, { useState } from "react";
import { Grommet, Box, Heading, Form, Button, grommet, TextInput } from "grommet";
import { Money } from "grommet-icons";

import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement
} from "react-stripe-elements";

const CheckoutForm = ({ item = { name: "", id: 0 }, stripe }) => {
  const [email, setEmail] = useState("");

  const onSubscribe = async () => {
    console.log({
      customer_email: email,
      plan_id: item.id
    });

    let { token } = await stripe.createToken({ name: email });
    console.log(
      `https://data.seosemapi.com:35566/stripe/subscribe?stripe_token=${token.id}&customer_email=${email}&plan_id=${item.id}`
    );
    fetch(
      `https://data.seosemapi.com:35566/stripe/subscribe?stripe_token=${token.id}&customer_email=${email}&plan_id=${item.id}`,
      {
        method: "post",
        body: JSON.stringify({
          token: "",
          customer_email: email,
          plan_id: item.id
        })
      }
    )
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log("response", data);
        if (data.ok) console.log("Purchase Complete!");
      });
  };

  console.log(item)
  return (
    <Grommet style={{ height: "100vh" }} theme={grommet}>
      <Box
        align="center"
        justify="center"
        pad="small"
        fill="vertical"
        background={{ image: "url('')" }}
        direction="row"
        gap="xsmall"
      >
        <Box
          align="center"
          justify="center"
          pad={{ horizontal: "xlarge", vertical: "large" }}
          background={{ color: "light-2", opacity: "strong" }}
          round="medium"
          gap="medium"
        >
          <Box align="center" justify="between" direction="row" flex={false}>
            <Heading size="small">{item.name}</Heading>
          </Box>
          <Heading >{(item.amount)/100} {item.currency} per {item.interval}</Heading>
          <Form>
            <label>
              Card number
              <CardNumberElement />
            </label>
            <label>
              Expiration date
              <CardExpiryElement />
            </label>
            <label>
              CVC
              <CardCVCElement />
            </label>
            <label>
              Email
              <TextInput
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <Button
              label="Pay"
              color="neutral-1"
              fill="horizontal"
              hoverIndicator={true}
              icon={<Money />}
              primary={true}
              type="submit"
              onClick={() => onSubscribe()}
            />
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
};

export default injectStripe(CheckoutForm);
