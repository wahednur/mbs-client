import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

// ---- Payment Form Component ----
const PaymentForm = ({ agreementInfo }) => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);

  // Step 1: Create Payment Intent
  useEffect(() => {
    if (!agreementInfo?.flat?.rent) return;

    axiosSecure
      .post("/create-payment-intent", {
        amount: agreementInfo.flat.rent,
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      });
  }, [agreementInfo, axiosSecure]);

  // Step 2: Handle Payment Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || !clientSecret) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error.message);
      setProcessing(false);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      toast.error(confirmError.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {
      const { data } = await axiosSecure.post("/agreement-request", {
        ...agreementInfo,
        transactionId: paymentIntent.id,
      });

      if (data.insertedId) {
        toast.success("Payment successful! Agreement submitted.");
        navigate("/dashboard/my-agreements");
      }
    }

    setProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": { color: "#aab7c4" },
            },
            invalid: { color: "#9e2146" },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-filled w-full"
        disabled={!stripe || !clientSecret || processing}
      >
        {processing ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

// ---- Main Payment Page ----
const Payment = () => {
  const { state: agreementInfo } = useLocation();

  return (
    <div className="max-w-xl mx-auto p-10 bg-white rounded-lg mt-10 shadow-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">Payment Page</h2>
      <p className="mb-4">
        You're about to pay <strong>{agreementInfo?.rent} BDT</strong> for{" "}
        <strong>{agreementInfo?.name}</strong>.
      </p>

      <Elements stripe={stripePromise}>
        <PaymentForm agreementInfo={agreementInfo} />
      </Elements>
    </div>
  );
};

export default Payment;
