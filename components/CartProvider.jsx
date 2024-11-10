'use client'

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode=''
      cartMode=""
      stripe=''
      successUrl='success'
      cancelUrl='error'
      language='en-US'
      currency='USD'
      billingAddressCollection={true}
      shouldPersist={true}
    >
        {children}
    </CProvider>
  );
};

export default CartProvider;
