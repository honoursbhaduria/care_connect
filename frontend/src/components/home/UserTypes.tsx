
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const userTypes = [
  {
    type: "Care Seekers",
    description: "Elderly, disabled, or unwell individuals who need assistance with healthcare or daily activities.",
    benefits: ["Request help with specific needs", "Find local healthcare providers", "Schedule appointments easily", "Access emergency contacts quickly"],
    image: "https://images.unsplash.com/photo-1516715094483-75da7dee9758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    color: "bg-careconnect-soft-blue",
    route: "/care-seekers"
  },
  {
    type: "Volunteers",
    description: "Community members who want to offer their time and skills to help others in need.",
    benefits: ["Connect with those who need help", "Choose flexible volunteering hours", "Make a difference locally", "Track your community impact"],
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    color: "bg-careconnect-soft-green",
    route: "/volunteers"
  },
  {
    type: "Medical Professionals",
    description: "Doctors, nurses, therapists, and other healthcare providers who want to offer services.",
    benefits: ["Reach more patients in need", "Manage appointments efficiently", "Provide remote consultations", "Connect with community resources"],
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    color: "bg-careconnect-light-purple",
    route: "/professionals"
  },
];

const UserTypes = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="mb-4">How Care Connect Works For Everyone</h2>
          <p className="text-lg text-gray-600">
            Whether you're seeking care, want to volunteer, or are a healthcare professional, 
            Care Connect provides tools to make connecting easier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg">
              <div className={`${user.color} h-3`}></div>
              <div className="h-48 overflow-hidden">
                <img 
                  src={user.image} 
                  alt={user.type} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">{user.type}</h3>
                <p className="mb-4 text-gray-600">{user.description}</p>
                <ul className="space-y-2 mb-6">
                  {user.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center">
                      <span className="mr-2 text-careconnect-purple">✓</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple" asChild>
                  <Link to={user.route}>Sign Up as {user.type.replace('s', '')}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserTypes;
