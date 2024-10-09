import React from "react";
import DefaultLayout from "@/wireframes/layouts/default";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage: React.FC = () => {
  return (
    <>
      <DefaultLayout>
        <div className="min-h-screen flex items-center justify-center bg-light">
          <div className="relative bg-light bg-opacity-30 border border-accent backdrop-blur-lg shadow-lg rounded-xl p-8 w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-[#009688] mb-6">
              Login
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
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-light">
                    Password
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-xs text-light hover:underline hover:text-accent"
                  >
                    Forgot Password?
                  </a>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-2 border border-accent rounded-xl bg-transparent text-[#009688] placeholder-[#43a047] focus:outline-none focus:ring-2 focus:ring-[#43a047]"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <Button
                  type="submit"
                  className="w-full py-2 px-4 mt-5 bg-accent text-secondary hover:bg-secondary hover:text-accent font-bold rounded-full transition"
                >
                  Log In
                </Button>
              </div>
            </form>
            <p className="mt-4 text-center text-sm text-light">
              Didn’t have an account?
              <a
                href="/sign-up"
                className="font-semibold text-accent hover:text-secondary"
              >
                {" "}
                Sign up
              </a>
            </p>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default LoginPage;
