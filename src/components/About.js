import React from "react";

const About = () => {
  return (
    <>
      <div className="relative bg-white" id="about">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
            <img className="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" alt="" />
          </div>
        </div>
        <div className="relative pt-12 pb-16 px-4 sm:pt-16 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-2">
          <div className="lg:col-start-2 lg:pl-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-lg lg:ml-auto lg:mr-0">
              <h2 className="leading-6 text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Welcome to</h3>
              <p className="mt-8 text-lg text-gray-500">KK CAPITAL, founded by Mr. Kiran Kalshetti in the year 2017. The main objective of the company is to serve the financial needs of various small and medium enterprise.</p>
              <p className="mt-8 text-lg text-gray-500">Our dedicated team of professional financial experts are ready to help you with all types of loan requirements be it business or personal.</p>
              <p className="mt-8 text-lg text-gray-500">The knowledge and experience of our team of dedicated professionals is the key that opens the door to fulfill all the needs and requirements of our clients and serve them in the best possible way. Our broad range of services including Business loan, Term loan, Loan against property, Commercial property loan, Home loan and Personal loan.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
