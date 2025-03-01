"use client"
import React, { useEffect, useState } from 'react';

const Aboutinfo = [
  {
    id: 1,
    src: "/pic1.jpg",
    text: `
      <p>We are security consultants; we make sure you get the best officers to manage your security challenges.</p>
      <p>The protection of your home, offices, and business assets is the keystone to your peace of mind.</p>
      <p>G-MC Security offers a wide range of permanent security solutions, including long-term security guard placement to help combat security issues such as theft, vandalism, and trespassing.</p>`
  },
  {
    id: 2,
    src: "/pic4.jpg",
    text: `<p>We are trusted by hundreds of homeowners, shop owners, companies, schools, and estates across the nation because our customizability and innovative delivery of technologically advanced security services differentiates us from standard private security providers.</p>
      <p>Whether you’re a small business, non-profit medical facility, or a publicly traded corporation, G-MC Security Services is here to take care of your long-term security needs.</p>`
  },
  {
    id: 3,
    src: "/pic5.jpg",
    text: `<h3>Our manned guarding services include:</h3>
    <p>• Security Guard Services, day and night.</p>
    <p>• Campus Grounds Security.</p>
    <p>• Special Event Security.</p>
    <p>• Manufacturing & Industrial Security.</p>
    <p>• Residential Building Security.</p>
    <p>• Retail Security/Shops, Warehouse & Estate.</p>
    <p>• Medical & Office Building Security.</p>
`
  },
  {
    id: 4,
    src: "/pic10.jpg",
    text: `<p>G-MC SECURITY is poised to deliver value to our clients' businesses in a proactive, efficient, and timely way, leveraging excellent customer service, trained personnel, and cutting-edge technology.</p>
      <p>Our services are top-notch, and we are known to provide well-trained and licensed security personnel to watch and secure your business, estate, and environment.</p>
      <p>With G-MC Security, you can have a relaxed mind during the day and night.</p>`
  }
];

const About = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className='flex justify-center' >
      <div className='text-black font-semibold w-[90%] lg:w-[80%]'>
        {Aboutinfo.map((data) => (
          <div key={data.id} className={`flex w-full mb-10 ${data.id === 2  || data.id === 4 ? "flex-col md:flex-row-reverse" : " flex-col md:flex-row"}`}>
            <section style={{ backgroundImage: `url(${data.src})` }} className='w-full h-60 sm:h-72 bg-cover'></section>
            <section className='w-full flex items-center py-5 px-5 lg:text-lg bg-white'>
              {isMounted ? (
                <div dangerouslySetInnerHTML={{ __html: data.text }} />
              ) : (
                <p>Loading...</p>
              )}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
