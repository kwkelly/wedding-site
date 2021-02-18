import React, { FormEvent, useState, useMemo } from "react";
import { loadStripe } from "@stripe/stripe-js";
import BaseCurrencyInput from "react-currency-input-field";
import styled from "styled-components";
import { toast } from "react-toastify";

const Button = styled.button`
  background-color: var(--lightgreen);
  transition: 0.3s;
  color: var(--white);
  border-radius: 4px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 15px 32px;
  border: none;
  height: 48px;
  font-size: 16px;

  &:hover {
    background-color: var(--green);
    cursor: pointer;
  }

  &:disabled {
    background-color: lightgray;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const CurrencyInput = styled(BaseCurrencyInput)`
  border-radius: 4px;
  padding: 0 1rem;
  margin: 1rem 0;
  font-size: 16px;
  border-color: lightgray;
  outline: none;
  transition: 0.3s;
  border-style: solid;
  height: 48px;

  @media (min-width: 769px) {
    margin-right: 1rem;
  }

  &:focus {
    border-color: var(--lightgreen);
  }
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

type Props = {
  STRIPE_PUBLISHABLE_KEY: string;
  STRIPE_PRICE_ID: string;
  STRIPE_SUCCESS_URL: string;
  STRIPE_CANCEL_URL: string;
};

function Donate(props: Props) {
  const stripePromise = useMemo(
    () => loadStripe(props.STRIPE_PUBLISHABLE_KEY),
    []
  );
  const [giftAmount, setGiftAmount] = useState(0);
  const handleClick = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const stripe = await stripePromise;
    if (!stripe) {
      return;
    }

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: props.STRIPE_PRICE_ID,
          quantity: giftAmount,
        },
      ],
      mode: "payment",
      successUrl: props.STRIPE_SUCCESS_URL,
      cancelUrl: props.STRIPE_CANCEL_URL,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message
    toast(error.message);
  };
  return (
    <form>
      <FormRow>
        <label htmlFor="amount" style={{ visibility: "hidden" }}>
          Gift amount
        </label>
        <CurrencyInput
          id="gift-amount"
          name="amount"
          placeholder="Enter gift amount"
          onValueChange={(value) => setGiftAmount(Number(value) ?? 0)}
          prefix={"$"}
          disableAbbreviations
          step={10}
          allowDecimals={false}
          allowNegativeValue={false}
        />
        <Button role="link" onClick={handleClick} disabled={!giftAmount}>
          Checkout
        </Button>
      </FormRow>
    </form>
  );
}

export { Donate };
