import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      
      <h2 className="text-2xl font-semibold mt-4">Introduction</h2>
      <p>Welcome to Swipesync. These Terms and Conditions outline the rules and regulations for using our website and services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Acceptance of Terms</h2>
      <p>By accessing and using our website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">User Responsibilities</h2>
      <ul className="list-disc ml-6">
        <li>You must be at least 18 years old to use our services.</li>
        <li>Ensure that any information you provide is accurate and up to date.</li>
        <li>Do not engage in any fraudulent, abusive, or unlawful activities.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Payments and Transactions</h2>
      <p>All transactions processed through <strong>Razorpay</strong> are subject to their terms and policies. We do not store or process your payment details directly.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Intellectual Property</h2>
      <p>All content on this website, including logos, text, and graphics, is the property of Swipesync and is protected under copyright laws.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Limitation of Liability</h2>
      <p>Swipesync is not responsible for any damages, losses, or liabilities resulting from the use of our services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Changes to Terms</h2>
      <p>We may update these Terms and Conditions at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
      <p>For any inquiries regarding these Terms and Conditions, contact us at:</p>
      <p><strong>Email:</strong> support@swipesync.xyz</p>
      <p><strong>Website:</strong> <a href="http://www.swipesync.xyz" className="text-blue-500">www.swipesync.xyz</a></p>
    </div>
  );
};

export default TermsAndConditions;
