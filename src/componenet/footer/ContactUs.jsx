import React from "react";

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

      <h2 className="text-2xl font-semibold mt-4">Get in Touch</h2>
      <p>If you have any questions, concerns, or feedback, feel free to reach out to us. Our team is here to help!</p>

      <h2 className="text-2xl font-semibold mt-4">Contact Information</h2>
      <p><strong>Email:</strong> <a href="mailto:support@swipesync.xyz" className="text-blue-500">support@swipesync.xyz</a></p>
      <p><strong>Website:</strong> <a href="http://www.swipesync.xyz" className="text-blue-500">www.swipesync.xyz</a></p>

      <h2 className="text-2xl font-semibold mt-4">Office Address</h2>
      <p>Swipesync Technologies Pvt. Ltd.</p>
      <p>123 Business Street, Tech Park</p>
      <p>City, State, ZIP Code</p>
      <p>Country</p>

      <h2 className="text-2xl font-semibold mt-4">Customer Support</h2>
      <p>Our support team is available from <strong>Monday to Friday, 9 AM - 6 PM (IST)</strong>.</p>

      <h2 className="text-2xl font-semibold mt-4">Send Us a Message</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block font-semibold">Name:</label>
          <input type="text" className="w-full p-2 border rounded" placeholder="Your Name" />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Email:</label>
          <input type="email" className="w-full p-2 border rounded" placeholder="Your Email" />
        </div>

        <div className="mb-4">
          <label className="block font-semibold">Message:</label>
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Your Message"></textarea>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
