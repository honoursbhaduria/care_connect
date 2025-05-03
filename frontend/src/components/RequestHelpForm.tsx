import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Calendar } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Dashboard } from "@/pages/needful"
import { useNavigate } from 'react-router-dom';

const RequestHelpForm = () => {
  // Form state
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    email: '',
    phone: '',
    category: '',
    location: '',
    time: '',
    description: ''
  });
  
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();
  const handleNavigate = () => {
      resetForm(); // Reset the form if needed
      navigate('/dashboard'); // Navigate to /dashboard
    };

  // Update form data
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:5000/api/help/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description,
          category: formData.category,
          location: formData.location,
          time: formData.time,
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit request');
      }

      setShowSuccessDialog(true);
      toast({
        title: "Request submitted successfully",
        description: "A Care Connect volunteer will contact you shortly.",
      });
    } catch (error) {
      console.error('Error submitting request:', error);
      toast({
        title: "Submission failed",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Reset form after submission
  const resetForm = () => {
    setFormData({
      title: '',
      name: '',
      email: '',
      phone: '',
      category: '',
      location: '',
      time: '',
      description: ''
    });
    setShowSuccessDialog(false);
  };

  return (
    <>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-base">Request Title</Label>
              <Input 
                type="text" 
                id="title" 
                value={formData.title}
                onChange={handleChange}
                className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                placeholder="Brief title for your request" 
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                  placeholder="Enter your full name" 
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base">Email Address</Label>
                <Input 
                  type="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                  placeholder="Enter your email" 
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base">Phone Number</Label>
              <Input 
                type="tel" 
                id="phone" 
                value={formData.phone}
                onChange={handleChange}
                className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                placeholder="Enter your phone number" 
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="category" className="text-base">Service Needed</Label>
                <select 
                  id="category" 
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-careconnect-purple focus:border-careconnect-purple"
                  required
                >
                  <option value="" disabled>Select the type of help needed</option>
                  <option value="medical">Medical Assistance</option>
                  <option value="delivery">Grocery & Medication Delivery</option>
                  <option value="emotional">Emotional Support</option>
                  <option value="appointment">Appointment Booking</option>
                  <option value="volunteer">Find a Volunteer</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base">Location</Label>
                <Input 
                  type="text" 
                  id="location" 
                  value={formData.location}
                  onChange={handleChange}
                  className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                  placeholder="Your location" 
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time" className="text-base">When do you need help?</Label>
              <div className="relative">
                <Input 
                  type="datetime-local" 
                  id="time" 
                  value={formData.time}
                  onChange={handleChange}
                  className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                  required
                />
                <Calendar className="absolute right-3 top-3 text-gray-400 pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="description" className="text-base">Details</Label>
              <Textarea 
                id="description" 
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                placeholder="Please describe what you need help with..." 
                required
              />
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit"
                className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple py-6 text-lg shadow-md hover:shadow-lg transition-all"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : (
                  <>
                    Submit Request 
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Request Submitted Successfully!</DialogTitle>
            <DialogDescription>
              <div className="flex flex-col items-center text-center pt-4">
                <div className="bg-careconnect-light-purple p-3 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-careconnect-purple" />
                </div>
                <p className="text-lg">
                  Thank you for reaching out! A Care Connect volunteer will contact you within 24 hours.
                </p>
                <Button 
                  className="mt-6 bg-careconnect-purple hover:bg-careconnect-dark-purple"
                  onClick={resetForm}
                >
                  Submit Another Request
                </Button>
                <Button 
                  className="mt-6 bg-careconnect-purple hover:bg-careconnect-dark-purple"
                  onClick={handleNavigate}
                >
                  Navigate to Request Dashboard
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestHelpForm;