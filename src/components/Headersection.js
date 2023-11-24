import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Imageslider from "./Imageslider";

const navigation1 = [
  { name: "About", href: "#about" },
  { name: "Vision", href: "#vision" },
  { name: "Mission", href: "#mission" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Partner", href: "#partner" },
  { name: "Contact Us", href: "#contact" },
];

const Headersection = () => {
  return (
    <>
      <div>
        <div className="bg-gray-800 pb-32">
          <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
              <>
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                  <div className="border-b border-gray-700">
                    <div className="flex items-center justify-between h-16 px-4 sm:px-0">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                        </div>
                        <div className="hidden md:block">
                          <div className="ml-10 flex items-baseline space-x-4">
                            {navigation1.map((item) => (
                              <Fragment key={item.name}>
                                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                <a href={item.href} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                                  {item.name}
                                </a>
                              </Fragment>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? <XIcon className="block h-6 w-6" aria-hidden="true" /> : <MenuIcon className="block h-6 w-6" aria-hidden="true" />}
                        </Disclosure.Button>
                      </div>
                    </div>
                  </div>
                </div>

                <Disclosure.Panel className="border-b border-gray-700 md:hidden">
                  <div className="px-2 py-3 space-y-1 sm:px-3">
                    {navigation1.map((item) => (
                      <Fragment key={item.name}>
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <a href={item.href} className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
                          {item.name}
                        </a>
                      </Fragment>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <header className="py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Welcome to Kkcapital!</h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
              <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                {/* <Imageslider /> */}
                Image Slider comes here
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default Headersection;
