import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import './ContactCTA.css';

const ContactCTA = () => {
  const whatsappMsg = encodeURIComponent("Hello Oracle Photography, I am interested in your photography services. I would like to know more about availability and booking.");
  const whatsappUrl = `https://wa.me/919717333513?text=${whatsappMsg}`;

  return (
    <section className="contact-cta-section" id="contact">
      <div className="container">
        <div className="cta-wrapper">
          <div className="cta-content">
            <h2>Ready to create memories?</h2>
            <p>Get in touch with us today to discuss your next big event.</p>
          </div>
          <div className="cta-actions">
            <a href="tel:+919717333513" className="btn btn-phone">
              <Phone size={18} className="cta-icon" />
              097173 33513
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <MessageCircle size={18} className="cta-icon" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
