import React from "react";

const RefundPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>

      <h2 className="text-2xl font-semibold mt-4">Overview</h2>
      <p>At Swipesync, we strive to provide the best services to our users. This Refund Policy outlines the conditions under which refunds may be granted.</p>

      <h2 className="text-2xl font-semibold mt-4">Eligibility for Refunds</h2>
      <ul className="list-disc ml-6">
        <li>Refunds will only be issued if there is a valid reason, such as a technical issue or service unavailability.</li>
        <li>Requests must be made within <strong>7 days</strong> of the transaction.</li>
        <li>Refunds are not applicable for services already rendered or partially used.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Non-Refundable Items</h2>
      <ul className="list-disc ml-6">
        <li>Digital products, subscriptions, and downloadable content.</li>
        <li>Payments made for personalized services.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Refund Process</h2>
      <p>To request a refund, please follow these steps:</p>
      <ul className="list-disc ml-6">
        <li>Contact our support team at <strong>support@swipesync.xyz</strong>.</li>
        <li>Provide your transaction ID and reason for the refund request.</li>
        <li>Our team will review the request and process eligible refunds within <strong>7-10 business days</strong>.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-4">Payment Gateway Fees</h2>
      <p>Please note that any processing fees charged by <strong>Razorpay</strong> or other payment providers may not be refundable.</p>

      <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
      <p>Swipesync reserves the right to modify this Refund Policy at any time. Updates will be posted on our website.</p>

      <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
      <p>If you have any questions about our Refund Policy, contact us at:</p>
      <p><strong>Email:</strong> support@swipesync.xyz</p>
      <p><strong>Website:</strong> <a href="http://www.swipesync.xyz" className="text-blue-500">www.swipesync.xyz</a></p>
    </div>
  );
};

export default RefundPolicy;
