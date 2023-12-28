// export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
import Stripe from "stripe";
export const stripe = new Stripe("sk_test_51OI7pXSCB4XPwt5d1AUcSEwJGy1aqbeDnz6EGOcaPogNtHO9jrMDiFK80CM3dgMKeubR9AG5v9C6zWLUHltBxD5f00ikRBuW5O", {
  apiVersion: "2023-08-16",
  typescript: true,
});
