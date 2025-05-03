
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Info, Users, Heart, Phone } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-white to-careconnect-light-purple/30 py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="outline" className="bg-white px-3 py-1 text-careconnect-purple border-careconnect-purple mb-4">
                About Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission & Vision</h1>
              <p className="text-lg md:text-xl text-gray-700 mt-4">
                Care Connect was founded with a simple but powerful mission: to make healthcare and support accessible to everyone in our community.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Info size={24} className="text-careconnect-purple" />
                  <h2 className="text-3xl font-semibold">Our Story</h2>
                </div>
                <p className="text-gray-700 mb-4">
                  Care Connect began in 2020 when our founder, Dr. Maria Sanchez, recognized a critical gap in healthcare accessibility in our community. During the global pandemic, many residents—particularly elderly and disabled individuals—struggled to receive the care and support they needed.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small network of volunteers has grown into a comprehensive platform connecting those in need with caregivers, medical professionals, and community volunteers.
                </p>
                <p className="text-gray-700 mb-4">
                  Today, Care Connect serves thousands of community members, facilitating everything from medical appointments to grocery deliveries to companionship for isolated individuals.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-careconnect-light-purple flex items-center justify-center">
                      <Heart className="h-5 w-5 text-careconnect-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Mission</h4>
                      <p className="text-gray-600">To create a compassionate community where everyone has access to the care they need.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-careconnect-light-purple flex items-center justify-center">
                      <Users className="h-5 w-5 text-careconnect-purple" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Our Vision</h4>
                      <p className="text-gray-600">A world where no one faces health challenges alone.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-video bg-careconnect-purple/10 rounded-lg overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                    alt="Care Connect team member helping someone"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs">
                  <p className="italic text-careconnect-purple">"We believe that everyone deserves access to quality care and support, regardless of their circumstances."</p>
                  <p className="text-right font-medium mt-2">— Dr. Maria Sanchez, Founder</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-careconnect-light-purple/20">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Core Values</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                These principles guide everything we do at Care Connect, from how we develop our platform to how we interact with our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-careconnect-light-purple/30">
                  <CardHeader>
                    <div className="h-12 w-12 rounded-full bg-careconnect-light-purple flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Our dedicated team brings together expertise in healthcare, technology, and community service.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px] border-4 border-careconnect-light-purple">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-careconnect-purple mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-careconnect-light-purple/10">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Partners</h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                We collaborate with healthcare providers, community organizations, and businesses to create a comprehensive support network.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow h-24">
                  <div className="text-xl font-bold text-gray-500">{partner}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 bg-gradient-to-br from-careconnect-purple/90 to-careconnect-dark-purple text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
              <p className="text-lg md:text-xl opacity-90">
                Have questions about Care Connect? We'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-white text-careconnect-purple hover:bg-careconnect-light-purple">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact Us
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
                  <Users className="mr-2 h-4 w-4" />
                  Join Our Team
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Values data
const values = [
  {
    title: "Compassion",
    description: "We approach every interaction with empathy and understanding, recognizing the unique needs of each individual.",
    icon: <Heart className="h-6 w-6 text-careconnect-purple" />
  },
  {
    title: "Accessibility",
    description: "We are committed to making healthcare and support services available to everyone, regardless of their circumstances.",
    icon: <Users className="h-6 w-6 text-careconnect-purple" />
  },
  {
    title: "Community",
    description: "We believe in the power of community to provide support, share resources, and create meaningful connections.",
    icon: <Users className="h-6 w-6 text-careconnect-purple" />
  },
  {
    title: "Innovation",
    description: "We continually seek new and better ways to address healthcare challenges and improve our services.",
    icon: <Info className="h-6 w-6 text-careconnect-purple" />
  },
  {
    title: "Empowerment",
    description: "We strive to give individuals the tools, knowledge, and support they need to take charge of their health.",
    icon: <Users className="h-6 w-6 text-careconnect-purple" />
  },
  {
    title: "Integrity",
    description: "We are committed to honesty, transparency, and ethical practices in all aspects of our work.",
    icon: <Heart className="h-6 w-6 text-careconnect-purple" />
  }
];

// Team data
const team = [
  {
    name: "Rishav Raj",
    role: "Backend Dev",
    bio: "works on Backend ",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Honours Bhadauria",
    role:  "Frontend Dev",
    bio: " Works on frontend ",
    image: "https://avatars.githubusercontent.com/u/185463007?v=4"
  },
  {
    name: "Viahal Dubey",
    role: "Team Leader",
    bio: "Vishal works with us to ensure seamless coordination .",
    image: "https://avatars.githubusercontent.com/u/188987520?v=4"
  }
];

// Partners data
const partners = [
  "City Hospital",
  "Community Health Foundation",
  "ElderCare Services",
  "Metro Medical Center",
  "Wellness Pharmacy",
  "First Response Medical",
  "Home Health Associates",
  "Senior Support Network"
];

export default AboutPage;
