import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-careconnect-light-purple/20 py-12 px-4">
      <Card className="w-full max-w-md shadow-xl border-none">
        <CardHeader>
          <CardTitle className="text-3xl text-center text-careconnect-purple font-bold">
            Create an Account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input type="text" placeholder="Jane Doe" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input type="email" placeholder="jane@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <Input type="password" placeholder="••••••••" required />
            </div>

            <Button type="submit" className="w-full btn-primary">
              Sign Up
            </Button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-careconnect-purple font-medium hover:underline">
                Log In
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUp;
