import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      
      <h2 className="text-2xl font-semibold mt-4">Introduction</h2>
      <p>Welcome to Swipesync. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our website and services.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Information We Collect</h2>
      <ul className="list-disc ml-6">
        <li><strong>Personal Information:</strong> Name, email address, phone number, and payment details when you use Razorpay for transactions.</li>
        <li><strong>Usage Data:</strong> Information about how you interact with our website.</li>
        <li><strong>Cookies and Tracking Technologies:</strong> To enhance user experience and analyze traffic.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>Process payments through Razorpay securely.</li>
        <li>Provide customer support and improve user experience.</li>
        <li>Communicate updates and promotional offers.</li>
        <li>Prevent fraudulent activities and ensure security.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Payment Information</h2>
      <p>We use <strong>Razorpay</strong> as our payment gateway. Razorpay may collect and process your payment details in accordance with their <strong>Privacy Policy</strong>. We do not store your payment information on our servers.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Data Sharing and Security</h2>
      <ul className="list-disc ml-6">
        <li>We do not sell or share your personal information with third parties, except as required by law.</li>
        <li>We implement industry-standard security measures to protect your data.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Your Rights</h2>
      <ul className="list-disc ml-6">
        <li>Access and update your personal information.</li>
        <li>Request the deletion of your data, subject to legal obligations.</li>
        <li>Opt out of marketing communications.</li>
      </ul>
      
      <h2 className="text-2xl font-semibold mt-4">Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. Changes will be posted on this page.</p>
      
      <h2 className="text-2xl font-semibold mt-4">Contact Us</h2>
      <p>For any questions regarding this Privacy Policy, please contact us at:</p>
      <p><strong>Email:</strong> support@swipesync.xyz</p>
      <p><strong>Website:</strong> <a href="http://www.swipesync.xyz" className="text-blue-500">www.swipesync.xyz</a></p>
    </div>
  );
};

export default PrivacyPolicy;

