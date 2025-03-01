import React from "react";

const Maps = () => {
  return (
    <div className="bg-dark">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.2094663949274!2d3.5448575!3d6.429718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7ae5bffffff%3A0x3e74d98f2dba87fd!2sLagos%20Business%20School!5e0!3m2!1sen!2sng!4v1709218823456!5m2!1sen!2sng"
        className="w-full h-[450px]"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
