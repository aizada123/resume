import React from "react";

const Contact = () => {
  return (
    <div className="container">
      <div id={"contact"} name="contact" className="contact">
        <h2>You can find me here</h2>
        <div className="contact__items">
          <a href="https://www.instagram.com/">
            <div className="contact__item">
              <img
                src="https://cdn.worldvectorlogo.com/logos/instagram-2016-5.svg"
                width={50}
                height={50}
              />
            </div>
          </a>
          <a href="https://web.whatsapp.com/">
            {" "}
            <div className="contact__item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/WhatsApp_Logo.svg/1200px-WhatsApp_Logo.svg.png"
                width={50}
                height={50}
              />
            </div>
          </a>
          <a href="https://xn--80affa3aj0al.xn--80asehdb/">
            {" "}
            <div className="contact__item">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png"
                width={50}
                height={50}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
