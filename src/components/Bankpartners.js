import React from "react";
import HDFC from "../assets/img/banks-partners/hdfc-bank.png";
import AXIS from "../assets/img/banks-partners/axis-bank.svg";
import IDFC from "../assets/img/banks-partners/idfc-first-bank.png";
import KOTAK from "../assets/img/banks-partners/kotak-mahindra-bank.png";
import DEUTSCHE from "../assets/img/banks-partners/deutsche-bank.png";
import ICIC from "../assets/img/banks-partners/icici-bank.jpg";
import YES from "../assets/img/banks-partners/yes-bank.png";
import INDUSIND from "../assets/img/banks-partners/indusind-bank.png";
import STANDARDCHARTERED from "../assets/img/banks-partners/standard-chartered.png";
import UNITYSMALLFINANCE from "../assets/img/banks-partners/unity-small-finance.svg";
// this is bank partners 1
const banks = [
  {
    name: "HDFC",
    role: "Bank",
    imageUrl: HDFC,
  },
  {
    name: "Axis",
    role: "Bank",
    imageUrl: AXIS,
  },
  {
    name: "IDFC",
    role: "Bank",
    imageUrl: IDFC,
  },
  {
    name: "Kotak Mahindra",
    role: "Bank",
    imageUrl: KOTAK,
  },
  {
    name: "Deutsche",
    role: "Bank",
    imageUrl: DEUTSCHE,
  },
  {
    name: "ICICI",
    role: "Bank",
    imageUrl: ICIC,
  },
  {
    name: "YES",
    role: "Bank",
    imageUrl: YES,
  },
  {
    name: "IndusInd",
    role: "Bank",
    imageUrl: INDUSIND,
  },
  {
    name: "Standard Chartered",
    role: "Bank",
    imageUrl: STANDARDCHARTERED,
  },
  {
    name: "Unity Small Finance",
    role: "Bank",
    imageUrl: UNITYSMALLFINANCE,
  },

  // More people...
];
const Bankpartners = () => {
  return (
    <>
      <div className="bg-white" id="partners">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Partners</h2>
              <p className="text-xl text-gray-500">Banks</p>
            </div>
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-5">
              {banks.map((bank) => (
                <li key={bank.name}>
                  <div className="space-y-4">
                    <img className="mx-auto h-14" src={bank.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{bank.name}</h3>
                        <p className="text-indigo-600">{bank.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bankpartners;
