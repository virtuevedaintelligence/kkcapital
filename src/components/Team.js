import React from "react";
/* This example requires Tailwind CSS v2.0+ */
import team from "../assets/img/team-photo.JPG";
// const people = [
//   {
//     name: "Kiran Ashok Kalshetti",
//     role: "Proprietor",
//     imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Ramprit Yadav",
//     role: "Sales team leader",
//     imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Pankaj Devale",
//     role: "Team Leader",
//     imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Janvi Joshi",
//     role: "Head Telecaller",
//     imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },
//   {
//     name: "Shivam Rathod",
//     role: "Manager",
//     imageUrl: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
//     twitterUrl: "#",
//     linkedinUrl: "#",
//   },

//   // More people...
// ];
const Team = () => {
  return (
    <>
      <div className="bg-white" id="team" data-aos="fade-up">
        <div className="max-w-8xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Meet our team</h2>
              <p className="text-xl text-gray-500">These members have more than 5 years of experience. They will try their best to fulfill your requirement according to your needs</p>
            </div>
            <img src={team} className="mx-auto md:h-32 lg:h-96" alt="Our Team" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
