import React from 'react';
import './CopyrightPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const CopyrightPage = () => {
  return (
    <div className="copyright-page-container">
      <Navbar />
      <div className="copyright-page-content">
        <h1>Copyright Notice</h1>
        <p>Welcome to the Copyright Page of JazzShow.</p>
        <p>
          This page provides information about our copyright policies and the terms under which we protect
           our intellectual property.
        </p>
        <h2>1. Copyright Information</h2>
        <p>
          All content on this website, including text, images, graphics, logos, and design, 
          is the property of JazzShow and is protected by copyright laws. Unauthorized use or 
          reproduction of this content is prohibited.
        </p>
        <h2>2. Copyright Ownership</h2>
        <p>
          JazzShow holds the exclusive rights to all content on this website. This includes 
          but is not limited to the design, text, images, and software used to create and maintain the site.
        </p>
        <h2>3. Intellectual Property Rights</h2>
        <p>
          All trademarks, service marks, and trade names are owned by JazzShow. Any use of these marks without
           prior written consent is prohibited.
        </p>
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions or concerns regarding our copyright policies, please contact us at:
        </p>
        <p>
          Email: [JazzShowSupport@gmail.com]<br />
          Phone: [1230-1230-4657]<br />
        </p>
        <p>
          Thank you for visiting our website and for respecting our intellectual property.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default CopyrightPage;
