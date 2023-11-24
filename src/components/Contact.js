import React from "react";

const Contact = () => {
  return (
    <>
      <div className="relative bg-white" id="contact">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover lg:absolute lg:h-full" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80" alt="" />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Get in touch!</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">We’d love to hear from you! Send us a message using the form opposite, or email us. We’d love to hear from you! Send us a message using the form opposite, or email us.</p>
              <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                    First name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="first_name" id="first_name" autoComplete="given-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="First Name" />
                  </div>
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input type="text" name="last_name" id="last_name" autoComplete="family-name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Last Name" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="nameOfCompany" className="block text-sm font-medium text-gray-700">
                    Name of Company
                  </label>
                  <div className="mt-1">
                    <input id="nameOfCompany" name="nameOfCompany" type="text" autoComplete="nameOfCompany" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name of Company" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input id="email" name="email" type="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Email" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
                    Contact Number
                  </label>
                  <div className="mt-1">
                    <input type="text" name="contact" id="contact" autoComplete="contact" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="natureOfBusiness" className="block text-sm font-medium text-gray-700">
                    Nature of Business
                  </label>
                  <div className="mt-1">
                    <input type="text" name="natureOfBusiness" id="natureOfBusiness" autoComplete="natureOfBusiness" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                  </div>
                </div>
                <fieldset className="sm:col-span-2">
                  <legend className="block text-sm font-medium text-gray-700">Annual Turnover</legend>
                  <div className="mt-4 grid grid-cols-1 gap-y-4">
                    <div className="flex items-center">
                      <input id="budget_under_25k" name="budget" defaultValue="under_25k" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="budget_under_25k" className="ml-3">
                        <span className="block text-sm text-gray-700">Less than &#8377;25K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_25k-50k" name="budget" defaultValue="25k-50k" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="budget_25k-50k" className="ml-3">
                        <span className="block text-sm text-gray-700">&#8377;25K – &#8377;50K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_50k-100k" name="budget" defaultValue="50k-100k" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="budget_50k-100k" className="ml-3">
                        <span className="block text-sm text-gray-700">&#8377;50K – &#8377;100K</span>
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input id="budget_over_100k" name="budget" defaultValue="over_100k" type="radio" className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300" />
                      <label htmlFor="budget_over_100k" className="ml-3">
                        <span className="block text-sm text-gray-700">&#8377;100K+</span>
                      </label>
                    </div>
                  </div>
                </fieldset>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">
                      How can we help you?
                    </label>
                    <span id="how_can_we_help_description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea id="how_can_we_help" name="how_can_we_help" aria-describedby="how_can_we_help_description" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" defaultValue={""} />
                  </div>
                </div>
                <div className="text-right sm:col-span-2">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
