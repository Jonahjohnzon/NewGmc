import React from "react";
import { MdOutlinePhoneAndroid, MdMail, MdLocationPin } from "react-icons/md";

const Second = () => {
  return (
    <div className="text-black bg-white font-Inter flex flex-col items-center justify-center py-5">
      <div className="w-[95%] mb-12 lg:w-[80%]">
        <div>
          <div className="text-2xl md:text-3xl mb-8 font-medium text-center lg:text-left">
            Head Office
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="w-[100%] text-center lg:text-left">
            <div>
              <ul className="text-gray text-sm md:text-base font-medium mb-5 flex flex-col sm:flex-row justify-between">
                <li className="mb-2 flex flex-col items-center w-full">
                  <a href="tel:+2348021026339" className="hover:text-blue-900 transition-colors flex flex-col items-center">
                    <MdOutlinePhoneAndroid className="text-4xl lg:text-6xl mb-2" />
                    +234-802-102-6339
                  </a>
                </li>
                <li className="mb-2 flex flex-col items-center w-full">
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=gmercycrownlimitedcso@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors flex flex-col items-center"
                  >
                    <MdMail className="text-4xl lg:text-6xl mb-2" />
                    gmercycrownlimitedcso@gmail.com
                  </a>
                </li>
                <li className="text-center mb-2 flex flex-col items-center w-full">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=SUNNYVILLA+ESTATE+Off+Lagos+Business+School+Lekki+LBS+Lekki+Express+Road"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors flex flex-col items-center"
                  >
                    <MdLocationPin className="text-4xl lg:text-6xl mb-2" />
                    <p className="w-[80%] sm:w-1/2">Head Office, SUNNYVILLA ESTATE, Off Lagos Business School Lekki LBS, Lekki Express Road.</p>
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[95%] lg:w-[80%]">
        <div>
          <div className="text-2xl md:text-3xl font-medium mb-7 text-center lg:text-left">
            Ogun Office
          </div>
        </div>
        <div className="flex flex-col text-sm md:text-base lg:flex-row justify-between items-center">
          <div className="w-[100%] text-center lg:text-left">
            <div>
              <ul className="text-gray font-medium mb-5 flex justify-between">
              <li className="text-center mb-2 flex flex-col items-center w-full">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=8+Iyana+Yesi+Market+Road+Ota+Off+Covenant+University+Ota"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-900 transition-colors flex flex-col items-center"
                  >
                    <MdLocationPin className="text-4xl lg:text-6xl mb-2" />
                    <p className="w-[80%] sm:w-1/3">Branch office Ogun State 8 Iyana Yesi Market Road Ota Off Covenant University Ota.</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Second;
