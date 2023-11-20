import React from "react";
const stats = [
  { label: "Founded", value: "2021" },
  { label: "Employees", value: "5" },
  { label: "Beta Users", value: "521" },
  { label: "Raised", value: "$25M" },
];
const Missionvission = () => {
  return (
    <>
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0" id="mission">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full bg-gray-50 rounded-r-3xl lg:right-72" />
              <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width={404} height={392} fill="none" viewBox="0 0 404 392">
                <defs>
                  <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                <img className="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100" alt="" />
                <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600 via-indigo-600 opacity-90" />
                <div className="relative px-8">
                  {/* Stats section */}
                  <div className="mt-10">
                    <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                      {stats.map((stat) => (
                        <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                          <dt className="text-base font-medium text-white">{stat.label}</dt>
                          <dd className="text-3xl font-extrabold tracking-tight text-white">{stat.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0" id="vision">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Our Vision</h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg"> To become a leader in the industry of finance by providing our clients with hustle free financial services with our wide range of services covering all the dimensions of their requirements.</p>
              </div>
            </div>
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h1 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Finance Is What We Do!</h1>
            </div>

            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Our Mission</h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p className="text-lg"> KK Capital aims to become the one stop solution for all types of financial requirements of our clients by providing various types of loans in the both secured and unsecured category with the help of our team and our simple loan sanction process.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Missionvission;
