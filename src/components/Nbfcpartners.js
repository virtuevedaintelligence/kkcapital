import React from "react";
import BAJAJ from "../assets/img/nbfc-partners/bajaj-finance.png";
import TATACAPITAL from "../assets/img/nbfc-partners/TCFSL.jpeg";
import POONAWALAFINCORP from "../assets/img/nbfc-partners/poonawalla-fincorp.png";
import ADITYABIRLACAPITAL from "../assets/img/nbfc-partners/aditya-birla-group.jpg";
import CREDITSAISONS from "../assets/img/nbfc-partners/credit-saison.svg";
import SMFGINDIACREDIT from "../assets/img/nbfc-partners/smfg-indiacredit.svg";
import LTFINANCE from "../assets/img/nbfc-partners/lnt-finance.svg";
import EDELWEISS from "../assets/img/nbfc-partners/edelweiss.png";
import GODREJCAPITAL from "../assets/img/nbfc-partners/godrej-capital.png";
import FEDFINAFINANCIAL from "../assets/img/nbfc-partners/fedfina.png";
import CLIXCAPITALSERVICES from "../assets/img/nbfc-partners/clix-capital-service.png";
import SMCFINANCE from "../assets/img/nbfc-partners/smc-finance.jpg";
import MASSFINANCIALSERVICES from "../assets/img/nbfc-partners/mas-logo.png";
import SHRIRAMFINANCE from "../assets/img/nbfc-partners/sfl-logo.png";
import UGROCAPITAL from "../assets/img/nbfc-partners/ugro-capital.png";
import ARKAFINACORP from "../assets/img/nbfc-partners/arka-fincap.png";
import NEOGROTHCREDIT from "../assets/img/nbfc-partners/neogrowth-credit.png";
import AMBITFINVEST from "../assets/img/nbfc-partners/ambit-finvest.jpeg";
import PIRAMALFINANCE from "../assets/img/nbfc-partners/piramal-finance.svg";
import MAHINDRAFINANCE from "../assets/img/nbfc-partners/mahindra-finance.png";
import GROWTHSOURCEFINANCIALTECHNOLOGY from "../assets/img/nbfc-partners/growth-source.png";

const nbfcs = [
  {
    name: "Bajaj Finance Ltd.",
    role: "NBFC",
    imageUrl: BAJAJ,
  },
  {
    name: "Tata Capital Financial Services Ltd.",
    role: "NBFC",
    imageUrl: TATACAPITAL,
  },
  {
    name: "Poonawala Fincorp Ltd.",
    role: "NBFC",
    imageUrl: POONAWALAFINCORP,
  },
  {
    name: "Aditya Birla capital Ltd.",
    role: "NBFC",
    imageUrl: ADITYABIRLACAPITAL,
  },
  {
    name: "Credit Saisons India",
    role: "NBFC",
    imageUrl: CREDITSAISONS,
  },
  {
    name: "Smfg India credit Ltd.",
    role: "NBFC",
    imageUrl: SMFGINDIACREDIT,
  },
  {
    name: "L&t finance Ltd.",
    role: "NBFC",
    imageUrl: LTFINANCE,
  },
  {
    name: "Edelweiss",
    role: "NBFC",
    imageUrl: EDELWEISS,
  },
  {
    name: "Godrej Capital",
    role: "NBFC",
    imageUrl: GODREJCAPITAL,
  },
  {
    name: "Fed Fina Financial Service Ltd.",
    role: "NBFC",
    imageUrl: FEDFINAFINANCIAL,
  },
  {
    name: "Clix Capital Services Ltd.",
    role: "NBFC",
    imageUrl: CLIXCAPITALSERVICES,
  },
  {
    name: "Smc Finance Ltd.",
    role: "NBFC",
    imageUrl: SMCFINANCE,
  },
  {
    name: "Mass Financial Services Ltd.",
    role: "NBFC",
    imageUrl: MASSFINANCIALSERVICES,
  },
  {
    name: "Shriram finance Ltd.",
    role: "NBFC",
    imageUrl: SHRIRAMFINANCE,
  },
  {
    name: "ugro capital Ltd.",
    role: "NBFC",
    imageUrl: UGROCAPITAL,
  },
  {
    name: "arka finacorp Ltd.",
    role: "iifl finance Ltd",
    imageUrl: ARKAFINACORP,
  },
  {
    name: "Neogroth credit pvt Ltd.",
    role: "NBFC",
    imageUrl: NEOGROTHCREDIT,
  },
  {
    name: "ambit finvest pvt Ltd.",
    role: "NBFC",
    imageUrl: AMBITFINVEST,
  },
  {
    name: "Piramal finance Ltd.",
    role: "NBFC",
    imageUrl: PIRAMALFINANCE,
  },
  {
    name: "mahindra finance Ltd.",
    role: "NBFC",
    imageUrl: MAHINDRAFINANCE,
  },
  {
    name: "growth source financial technology Ltd.",
    role: "NBFC",
    imageUrl: GROWTHSOURCEFINANCIALTECHNOLOGY,
  },

  // More people...
];
const Nbfcpartners = () => {
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Our Partners</h2>
              <p className="text-xl text-gray-500">NBFC</p>
            </div>
            <ul className="mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-8">
              {nbfcs.map((nbfc) => (
                <li key={nbfc.name}>
                  <div className="space-y-4">
                    <img className="mx-auto h-14" src={nbfc.imageUrl} alt="" />
                    <div className="space-y-2">
                      <div className="text-xs font-medium lg:text-sm">
                        <h3>{nbfc.name}</h3>
                        <p className="text-indigo-600">{nbfc.role}</p>
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

export default Nbfcpartners;
