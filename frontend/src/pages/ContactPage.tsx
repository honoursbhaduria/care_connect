
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-careconnect-light-purple py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-gray-700 mb-8">
                We're here to help! Reach out to us with any questions, concerns, or feedback.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-semibold mb-6">Send Us a Message</h2>
                <Card className="border-0 shadow-lg">
                  <CardContent className="pt-6">
                    <form className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block font-medium text-gray-700">Your Name</label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-careconnect-purple focus:border-careconnect-purple"
                          placeholder="Enter your full name" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email Address</label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-careconnect-purple focus:border-careconnect-purple"
                          placeholder="Enter your email" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="subject" className="block font-medium text-gray-700">Subject</label>
                        <input 
                          type="text" 
                          id="subject" 
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-careconnect-purple focus:border-careconnect-purple"
                          placeholder="What is your message about?" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="message" className="block font-medium text-gray-700">Message</label>
                        <textarea 
                          id="message" 
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-careconnect-purple focus:border-careconnect-purple"
                          placeholder="Type your message here..." 
                        ></textarea>
                      </div>
                      
                      <div className="pt-4">
                        <Button className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple py-6 text-lg">
                          Send Message
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-semibold mb-6">Contact Information</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <div className="flex items-start">
                        <div className="bg-careconnect-light-purple p-3 rounded-lg mr-4">
                          <Phone className="h-6 w-6 text-careconnect-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Phone</h3>
                          <p className="text-gray-600">7080139684</p>
                          <p className="text-gray-600">7088019684 (Support)</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6">
                      <div className="flex items-start">
                        <div className="bg-careconnect-light-purple p-3 rounded-lg mr-4">
                          <Mail className="h-6 w-6 text-careconnect-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Email</h3>
                          <p className="text-gray-600">info@careconnect.in</p>
                          <p className="text-gray-600">support@careconnect.in</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6">
                      <div className="flex items-start">
                        <div className="bg-careconnect-light-purple p-3 rounded-lg mr-4">
                          <MapPin className="h-6 w-6 text-careconnect-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Address</h3>
                          <p className="text-gray-600">123  Street</p>
                          <p className="text-gray-600">unkownville, HC 12345</p>
                        </div>
                      </div>
                    </Card>
                    
                    <Card className="p-6">
                      <div className="flex items-start">
                        <div className="bg-careconnect-light-purple p-3 rounded-lg mr-4">
                          <Clock className="h-6 w-6 text-careconnect-purple" />
                        </div>
                        <div>
                          <h3 className="font-medium mb-2">Hours</h3>
                          <p className="text-gray-600">Mon-Fri: 9am - 5pm</p>
                          <p className="text-gray-600">Sat: 10am - 2pm</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
                
                <div className="p-6 bg-careconnect-purple rounded-lg text-white">
                  <div className="flex items-start">
                    <MessageSquare className="h-6 w-6 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                      <p className="mb-4">Our support team is available 24/7 for urgent assistance.</p>
                      <Button variant="secondary" className="bg-white text-careconnect-purple hover:bg-white/90">
                        Call Emergency Support
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-careconnect-light-purple p-3 rounded-full text-careconnect-purple hover:bg-careconnect-purple hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-careconnect-light-purple p-3 rounded-full text-careconnect-purple hover:bg-careconnect-purple hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-careconnect-light-purple p-3 rounded-full text-careconnect-purple hover:bg-careconnect-purple hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-careconnect-light-purple p-3 rounded-full text-careconnect-purple hover:bg-careconnect-purple hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-semibold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to common questions about Care Connect's services and community support.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {[
                  {
                    question: "How do I request help through Care Connect?",
                    answer: "You can request help by filling out the form on our Services page, or by contacting us directly by phone or email. Our team will match you with the appropriate resources or volunteers based on your needs."
                  },
                  {
                    question: "How can I volunteer with Care Connect?",
                    answer: "To become a volunteer, visit our Volunteer page and complete the registration form. We'll review your application and get in touch with you to discuss opportunities that match your skills and availability."
                  },
                  {
                    question: "Is Care Connect available in my area?",
                    answer: "Care Connect currently serves the greater Healthville area and surrounding communities. You can check if your location is covered by entering your zip code on our homepage or by contacting our support team."
                  },
                  {
                    question: "How do you ensure the safety of care seekers and volunteers?",
                    answer: "We conduct background checks on all volunteers, verify credentials of healthcare professionals, and have a thorough vetting process. We also implement a rating and review system to maintain quality and safety standards."
                  },
                  {
                    question: "Are Care Connect services free?",
                    answer: "Many of our basic services are free, supported by grants and donations. Some specialized services may have associated fees, but we strive to keep costs minimal and can often connect users with subsidized or low-cost options."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
