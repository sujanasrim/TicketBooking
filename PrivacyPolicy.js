import React from 'react';
import './PrivacyPolicy.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <Navbar />
      <div className="privacy-policy-content">
        <h1>Privacy Policy for JazzShow</h1>
        <p><strong>Effective Date:</strong> [Insert Date]</p>

        <h2>Introduction</h2>
        <p>
          At JazzShow, we are committed to protecting your privacy and ensuring that your personal information is handled in 
          a safe and responsible  manner. This Privacy Policy outlines our practices regarding the collection, use, 
          and disclosure of information we receive from users of our movie booking website.
        </p>

        <h2>Information We Collect</h2>

        <h3>Personal Information</h3>
        <p>
          We may collect personal information that you provide to us directly, such as:
        </p>
        <ul>
          <li>Name</li>
          <li>Contact information (email address, phone number, mailing address)</li>
          <li>Date of birth</li>
          <li>Payment information (credit card details)</li>
          <li>Booking history</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>
          When you interact with our website and online services, we may automatically collect certain information 
          about your device and usage, including:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Pages visited</li>
          <li>Time and date of visit</li>
          <li>IP address</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the collected information for various purposes, including:
        </p>
        <ul>
          <li>Processing and managing your bookings</li>
          <li>Improving our website and services</li>
          <li>Communicating with you about your bookings and promotional offers</li>
          <li>Handling payments securely</li>
          <li>Providing customer support</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal information 
        from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the 
        internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2>Your Rights</h2>
        <p>
          You have certain rights regarding your personal information, including:
        </p>
        <ul>
          <li>Accessing your data</li>
          <li>Correcting inaccurate or incomplete data</li>
          <li>Requesting deletion of your data</li>
          <li>Objecting to the processing of your data</li>
          <li>Requesting restriction of processing your data</li>
        </ul>
        <p>
          To exercise these rights, please contact us using the contact information provided below.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an
           updated effective date. We encourage you to review this Privacy Policy periodically to stay informed about 
           how we are protecting your information.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
        </p>
        <p>
          Email: [JazzShowSupport@gmail.com]<br />
          Phone: [1230-1230-4657]<br />
        </p>

        <p>Thank you for trusting JazzShow with your personal information. We are committed to ensuring your privacy 
          and protecting your data.</p>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
