import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if(!stripePromise) {
    stripePromise = loadStripe('pk_test_51MQuR7G95S5VmyhWjM1hPdWV0BBqjDM8SiXcx0hgk0J9Y5AroxFTNURblgzhcIRsvNjaqcYDwE6fa4RVP4Dc85Of00MztIaGaB');
  }

  return stripePromise;
}

export default getStripe;