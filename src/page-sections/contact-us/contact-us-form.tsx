/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useTheme } from "@/wireframes/theme/theme-provider";

import { useTranslation } from "react-i18next";
import ReCAPTCHAComponent from "@/components/header/ReCAPTCHAComponent";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import GradualSpacing from "@/wireframes/text-animations/gradual-spacing";

import useContactUsBackend from "@/api/firebase/core/contact-us/useContactUsBackend";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "@/toast/use-toast";
import { isContactNumberValid, isDescriptionValid, isEmailValid, isNameValid } from "@/utilities/formValidation";

const ContactUsForm: React.FC = () => {
  const { theme } = useTheme();

  const themeBgClass = theme === "dark" ? "bg-neutral-100" : "bg-black";
  const themeBgBtn = theme === "dark" ? "bg-black" : "bg-neutral-100";
  const themeTextClass = theme === "dark" ? "text-black" : "text-white";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    message: "",
  });
  // const [isChecked, setIsChecked] = useState(false);

  const [isInterestedInCompany, setIsInterestedInCompany] = useState(false);
  const [isAgreeToTerms, setIsAgreeToTerms] = useState(false);

  const [validationData, setValidationData] = useState({
    fullNameValidation: { isValid: true, message: "" },
    emailValidation: { isValid: true, message: "" },
    contactValidation: { isValid: true, message: "" },
    messageValidation: { isValid: true, message: "" },
    checkboxValidation: { isValid: true, message: "" },
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleIntrestedInCompanyChange = () => {
    const newCheckedState = !isInterestedInCompany;
    setIsInterestedInCompany(newCheckedState);
    // if (newCheckedState) {
    //   setIsAgreeToTerms(true);
    // }
  };

  const handleAgreeToTermsChange = () => {
    setIsAgreeToTerms(!isAgreeToTerms);
  };

  const { createContactUs } = useContactUsBackend();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { fullName, email, contact, message } = formData;

      const fullNameValidation = isNameValid(fullName);
      const emailValidation = isEmailValid(email);
      const contactValidation = isContactNumberValid(contact);
      const messageValidation = isDescriptionValid(message);


      setValidationData({
        fullNameValidation,
        emailValidation,
        contactValidation,
        messageValidation,
        checkboxValidation: {
          isValid: isAgreeToTerms,
          message: isAgreeToTerms ? "" : "This field is required.",
        },
      });

      // Check if all fields are valid
      if (
        fullNameValidation.isValid &&
        emailValidation.isValid &&
        contactValidation.isValid &&
        messageValidation.isValid &&
        isAgreeToTerms
      ) {
        console.log("User data", formData);
        const contacts = await createContactUs(formData);
        // Reset form data
        setFormData({
          fullName: "",
          email: "",
          contact: "",
          message: "",
        });
        setIsInterestedInCompany(false);
        setIsAgreeToTerms(false);

        toast({
          title: "Form Submitted",
          description: "Your form has been successfully submitted. We will review your information shortly.",
        });

        // Optionally, redirect or perform other actions
        // window.location.href = "";
      }
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error submitting your message. Please try again.");
    }
  };

  return (
    <HeroSectionChildren id="contact-us">
      <div className="container mx-auto mb-12 flex flex-col justify-center items-start">
        <header className="text-start">
          <GradualSpacing
            className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl text-wrap text-start leading-normal font-bold mt-20 sm:mt-12 md:mt-8 lg:mt-10"
            text="Get In Touch"
          />
        </header>
        <div className="text-start mb-4">
          <h5 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl leading-normal font-bolder py-3">
            Say something, we'd <span className="text-primary">love to</span>{" "}
            chat.
          </h5>
        </div>
        <div className="text-start mb-8">
          <h5 className="text-md sm:text-md md:text-lg lg:text-xl font-normal mb-4">
            If you want to inquire more about our service please use the contact form.
          </h5>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full max-w-3xxl flex flex-wrap">
            <div className="w-full">
              <form
                className={`rounded pt-6 mb-4 p-4 `}
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-2">
                  <div className="mb-4">
                    <label
                      className={`block text-start text-sm font-bold mb-2`}
                      htmlFor="fullName"
                    >
                      Full Name<span className="text-primary text-xl"> *</span>
                    </label>
                    <Input
                      className={`shadow appearance-none border rounded w-full py-2 text-gray-700 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-accent`}
                      id="full_name"
                      name="fullName"
                      type="text"
                      placeholder="Full name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {!validationData.fullNameValidation.isValid && (
                      <p className="text-primary text-start text-sm">
                        {validationData.fullNameValidation.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className={`block text-start text-sm font-bold mb-2`}
                      htmlFor="contact"
                    >
                      Contact<span className="text-primary text-xl"> *</span>
                    </label>
                    <Input
                      className={`shadow appearance-none  border rounded w-full py-2 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-accent`}
                      id="contact"
                      name="contact"
                      type="text"
                      placeholder="Contact"
                      value={formData.contact}
                      onChange={handleChange}
                    />
                    {!validationData.contactValidation.isValid && (
                      <p className="text-primary text-start text-sm">
                        {validationData.contactValidation.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-4">
                    <label
                      className={`block text-start text-sm font-bold mb-2`}
                      htmlFor="email"
                    >
                      Email<span className="text-primary text-xl"> *</span>
                    </label>
                    <Input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline text-accent`}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {!validationData.emailValidation.isValid && (
                      <p className="text-primary text-start text-sm">
                        {validationData.emailValidation.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className={`block text-start text-sm font-bold mb-2`}
                    htmlFor="message"
                  >
                    Message<span className="text-primary text-xl"> *</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="rounded"
                  />
                  {!validationData.messageValidation.isValid && (
                    <p className="text-primary text-start text-sm">
                      {validationData.messageValidation.message}
                    </p>
                  )}
                </div>
                <div className="text-start">
                  <div className="flow items-start space-x-2">
                    <Checkbox
                      name="intrestedInCompany"
                      checked={isInterestedInCompany}
                      onCheckedChange={handleIntrestedInCompanyChange}
                      className="peer h-[1rem] w-[18px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600  dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900"
                    />

                    <label
                      htmlFor="intrestedInCompany"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I'm intrested in hearing how vani can help my
                      organisation
                    </label>
                  </div>
                  <div className="flow items-start space-x-2 mt-4">
                    <Checkbox
                      name="agreeToTerms"
                      checked={isAgreeToTerms}
                      onCheckedChange={handleAgreeToTermsChange}
                      className="peer h-[1rem] w-[18px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600 dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900"
                    />

                    <label
                      htmlFor="agreeToTerms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree, to allow vani to store and process my personal
                      data. View our{" "}
                      <a
                        href="/privacy-policy"
                        className={`underline underline-offset-4 text-primary hover:text-muted `}
                      >
                        privacy policy
                      </a>{" "}
                      to learn more.
                      <span className="text-primary text-xl"> *</span>
                      {!validationData.checkboxValidation.isValid && (
                        <p className="text-primary text-start text-sm">
                          {validationData.checkboxValidation.message}
                        </p> 
                     )}
                    </label>
                  </div>
                </div>
                {/* <div className="flex justify-center mb-4 mt-6 mb-6">
                  <ReCAPTCHAComponent />
                </div> */}
                <div className={`z-10 flex items-center justify-center`}>
                  <Button
                    type="submit"
                    className="mt-4 bg-background text-foreground hover:bg-muted-foreground rounded-full text-lg"
                  >
                    SUBMIT
                  </Button>
                </div>
              </form>
            </div>

         
          </div>
        </div>
      </div>
    </HeroSectionChildren>
  );
};

export default ContactUsForm;
