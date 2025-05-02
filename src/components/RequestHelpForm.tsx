
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle } from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const RequestHelpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessDialog(true);
      
      toast({
        title: "Request submitted successfully",
        description: "A Care Connect volunteer will contact you shortly.",
      });
    }, 1500);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setService('');
    setMessage('');
    setShowSuccessDialog(false);
  };

  return (
    <>
      <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Your Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 py-3 focus:ring-careconnect-purple focus:border-careconnect-purple"
                placeholder="Enter your phone number" 
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="service" className="text-base">Service Needed</Label>
              <select 
                id="service" 
                value={service}
                onChange={(e) => setService(e.target.value)}
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
              <Label htmlFor="message" className="text-base">Details</Label>
              <Textarea 
                id="message" 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default RequestHelpForm;
