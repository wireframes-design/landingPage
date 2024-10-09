import React from "react";
import DefaultLayout from "@/wireframes/layouts/default";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ForgotPasswordPage: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#09bcd3] to-[#8bc34a]">
          <div className="relative bg-white bg-opacity-30 backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-[#009688] mb-6">
              Forgot Password
            </h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-light">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-accent rounded-xl bg-transparent text-[#009688] placeholder-[#43a047] focus:outline-none focus:ring-2 focus:ring-[#43a047]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full py-2 px-4 mt-4 bg-accent text-secondary hover:bg-secondary hover:text-accent transition rounded-full"
                >
                  Send Reset Link
                </Button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-[#009688]">
              Remembered your password?
              <a
                href="/login"
                className="font-semibold text-accent hover:text-secondary"
              >
                {" "}
                Back to Login
              </a>
            </p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ForgotPasswordPage;
