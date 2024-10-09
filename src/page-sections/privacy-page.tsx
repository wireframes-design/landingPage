/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/HomePage.tsx
import React from "react";
import DefaultLayout from "@/wireframes/layouts/default";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PrivacyPolicy from "@/page-sections/privacy-policy/privacy";
import TermsConditions from "@/page-sections/privacy-policy/terms-conditions";
import Header from "@/components/header/Header";
import { useParams } from "react-router-dom";
import Footer from "@/components/header/Footer";

const PrivacyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <DefaultLayout header={<Header />} footer={<Footer />}>
        <div className="flex flex-col justify-start items-center min-h-screen pt-10 w-full mt-10">
          <Tabs
            defaultValue={slug}
            className="w-full sm:w-3/4 md:w-full max-w-7xl"
          >
            <TabsList className="flex justify-center w-full gap-x-4 sm:gap-x-2 md:gap-x-4">
              <TabsTrigger
                value="privacy-policy"
                className="w-full sm:w-auto text-secondary bg-accent rounded border border-secondary"
              >
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger
                value="terms-conditions"
                className="w-full sm:w-auto text-secondary bg-accent rounded border border-secondary"
              >
                Terms and Conditions
              </TabsTrigger>
            </TabsList>
            <TabsContent value="privacy-policy" className="w-full">
              <div className="w-full">
                <PrivacyPolicy />
              </div>
            </TabsContent>
            <TabsContent
              id="terms-conditions"
              value="terms-conditions"
              className="w-full"
            >
              <div className="w-full">
                <TermsConditions />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DefaultLayout>
    </>
  );
};

export default PrivacyPage;
