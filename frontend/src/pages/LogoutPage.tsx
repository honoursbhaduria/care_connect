
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { LogOut, Home } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LogoutPage = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const logout = () => {
      // Remove token and user info from localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of your Care Connect account",
    });
    };
    logout();
  }, [toast]);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-careconnect-light-purple/30">
        <div className="max-w-md w-full">
          <Card className="shadow-lg border-careconnect-light-purple/50">
            <CardHeader className="space-y-1">
              <div className="flex justify-center mb-4">
                <div className="h-16 w-16 rounded-full bg-careconnect-light-purple flex items-center justify-center">
                  <LogOut size={32} className="text-careconnect-purple" />
                </div>
              </div>
              <CardTitle className="text-2xl text-center">You've been logged out</CardTitle>
              <CardDescription className="text-center">
                Thank you for using Care Connect
              </CardDescription>
            </CardHeader>
            
            <CardContent className="text-center py-4">
              <p className="text-gray-600">
                You have successfully logged out of your account. We hope you found the services helpful.
              </p>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 pt-2">
              <Button 
                onClick={handleSignIn} 
                className="w-full bg-careconnect-purple hover:bg-careconnect-dark-purple"
              >
                <LogOut className="mr-2 h-4 w-4" /> Sign in again
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleGoHome} 
                className="w-full border-careconnect-purple/50 hover:bg-careconnect-light-purple"
              >
                <Home className="mr-2 h-4 w-4" /> Return to Homepage
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LogoutPage;
