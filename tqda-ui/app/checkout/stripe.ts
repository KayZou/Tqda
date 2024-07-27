import { loadStripe, Stripe } from "@stripe/stripe-js";

let stripePromise: Stripe | null = null;

const getStripe = async () => {
    if (!stripePromise) {
      const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;
      if (!stripeKey) {
        throw new Error("Stripe key is not set");
      }
      stripePromise = await loadStripe(stripeKey);
    }
    return stripePromise;
  };

export default getStripe;
