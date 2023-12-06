import React from "react";
import businessLoan from "../assets/img/services/business-loan.jpg";
import termLoan from "../assets/img/services/term-loan.jpg";
import loanAgainstProperty from "../assets/img/services/loan-against-property.jpg";
import personalLoan from "../assets/img/services/personal-loan.jpg";
import homeLoan from "../assets/img/services/housing-loan.jpg";
import commercialPropertyLoan from "../assets/img/services/commercial-loan.jpg";
import unsecuredOverdraftFacilities from "../assets/img/services/unsecured-overdraft-facilities.png";
import workingWithCapitalLimit from "../assets/img/services/working-capital-limit.png";
const callouts = [
  {
    name: "Business loan",
    description: "Every business needs capital, a business loan is one of the best-unsecured options to meet both working capital and short term capital require- ments",
    imageSrc: businessLoan,
    imageAlt: "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Term loan",
    description: "The term loan is a loan that you can take for a specific period depending on your requirement.",
    imageSrc: termLoan,
    imageAlt: "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Loan against property",
    description: "It is a type of secured loan where you can borrow money by proving any property as collateral.",
    imageSrc: loanAgainstProperty,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Personal loan",
    description: "A personal Loan is a type of unsecured loan that can be a good option for someone not having any collateral.",
    imageSrc: personalLoan,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Home loan",
    description: "Buying or building a home has become a lot more difficult. In such a time home loan can help you to own a house you desire",
    imageSrc: homeLoan,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Commercial property Loan",
    description: "Investing a lot of capital in the starting may be difficult, You can take a commercial loan for purposes like building office space.",
    imageSrc: commercialPropertyLoan,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Unsecured overdraft facilities",
    description: "Description comes here",
    imageSrc: unsecuredOverdraftFacilities,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
  {
    name: "Working capital limit(od/cc/cgtmsme/turm loan)",
    description: "Description comes here",
    imageSrc: workingWithCapitalLimit,
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];
const Services = () => {
  return (
    <>
      <div className="bg-gray-100" id="services">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Services</h2>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative" data-aos="fade-up">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img src={callout.imageSrc} alt={callout.imageAlt} className="h-full w-full object-cover object-center" />
                  </div>
                  <h3 className="mt-6 text-base font-semibold text-gray-900">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
