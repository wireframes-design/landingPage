/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import "@/styles/globals.css";
import "@/i18n/i18n";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import HomePage from "@/page-sections";
import DefaultLayout from "@/wireframes/layouts/default";

// import { getToken, onMessage } from "firebase/messaging";
import { useEffect } from "react";
import { messaging } from "@/firebase/firebaseConfig";
import BlankPage from "@/page-sections/blank-page";
import PrivacyPage from "@/page-sections/privacy-page";
import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import { Toaster } from "@/toast/toaster";
import LoginPage from "@/page-sections/authentication/login";
import SignUpPage from "@/page-sections/authentication/sign-up";
import ForgotPasswordPage from "@/page-sections/authentication/forgot-password";
import Index from "@/page-sections";
const { VITE_APP_VAPID_KEY } = import.meta.env;

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Index />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/:slug" element={<PrivacyPage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/blank"
        element={
          <DefaultLayout header={<Header />} footer={<Footer />}>
            <>
              <BlankPage />
            </>
          </DefaultLayout>
        }
      ></Route>
    </>
  )
);

const App = () => {
  // async function requestPermission() {
  //   //requesting permission using Notification API
  //   const permission = await Notification.requestPermission();

  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: VITE_APP_VAPID_KEY,
  //     });

  //     //We can send token to server
  //     console.log("Token generated : ", token);
  //   } else if (permission === "denied") {
  //     //notifications are blocked
  //     alert("You denied for the notification");
  //   }
  // }

  // open if you need to notification
  // useEffect(() => {
  //   requestPermission();
  // }, []);

  // onMessage(messaging, (payload) => {
  //   console.log(" i am getting this message ");

  //   console.log(payload);
  // });

  return (
    <>
      <RouterProvider router={router} />
      {/* <ChatbotFloatingBtn/> */}
      <Toaster />
      {/* <FloatingWhatsAppIcon /> */}
    </>
  );
};

export default App;
