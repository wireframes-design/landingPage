/* eslint-disable @typescript-eslint/no-unused-vars */
// src/pages/HomePage.tsx
import React, { useEffect } from "react";
import HeroSectionChildren from "@/wireframes/page-sections/hero/HeroSectionChildren";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ReCAPTCHAComponent from "@/components/header/ReCAPTCHAComponent";
import AlertComponent from "@/components/alert/alert-component";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import AlertDialogComponent from "@/components/alert-dialog/alert-dialog-component";
import { ToastSimple } from "@/components/toast/toast";
import { Checkbox } from "@/components/ui/checkbox";
import { CheckboxDemo } from "@/components/checkbox/checkbox-test";
const Blank: React.FC = () => {
  return (
    <HeroSectionChildren id="blank">
      <div className={`container mx-auto px-4 py-8`}>
        {/* <div>
          <AlertComponent
            title={"Error"}
            description={"Your session has expired. Please log in again."}
            variant="destructive"
            // icon={<ExclamationTriangleIcon />}
          />
        </div> */}
        <div className="flex justify-center mb-4 mt-6 mb-6">
          <ReCAPTCHAComponent />
        </div>
        <div>
          <div className="items-top flex space-x-2 justify-center">
            {/* <Checkbox className="peer h-4 w-4 shrink-0 rounded-sm border border-gray-200 border-gray-900 shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gray-900 data-[state=checked]:text-gray-50 dark:border-gray-800 dark:border-gray-50 dark:focus-visible:ring-gray-300 dark:data-[state=checked]:bg-red-50 dark:data-[state=checked]:text-gray-900"/> */}
            <Checkbox className="peer h-[1.15rem] w-[20px] p-0 rounded-none  border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-1 focus:ring-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-foreground data-[state=checked]:border-muted-foreground data-[state=checked]:text-background dark:border-gray-600 dark:bg-gray-800 dark:focus:ring-blue-400 dark:data-[state=checked]:bg-foreground dark:data-[state=checked]:text-gray-900" />

            {/* <div>
            <CheckboxDemo />
          </div> */}

            {/* <div>
  <CheckboxDemo />
</div> */}

            {/* <Checkbox id="terms1"  className="bg-foregroud"/>
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Accept terms and conditions
            </label>
            <p className="text-sm text-muted-foreground">
              You agree to our Terms of Service and Privacy Policy.
            </p>
          </div> */}

            {/* <div className="flex items-center space-x-2">
                    <Checkbox id="terms2" />
                    <label
                      htmlFor="terms2"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Accept terms and conditions
                    </label>
                  </div> */}
          </div>
        </div>
        {/* <div>
<ToastSimple/>
</div> */}

        {/* <div>
          <AlertDialogComponent
          dialogTitle="Are you absolutely sure?"
          dialogDescription="This action cannot be undone. This will permanently delete your
          account and remove your data from our servers."
          cancelBtnText="Cancel"
          saveBtnText="Continue"
          />
        </div> */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col items-center justify-center p-4 mt-4">
            <div>
              <h1>Heading 1</h1>
              <h2>Heading 2</h2>
              <h3>Heading 3</h3>
              <h4>Heading 4</h4>
              <h5>Heading 5</h5>
              <h6>Heading 6</h6>
              <p>Subtitle</p>
              <p>Title</p>
              <p>Body text</p>
              <p>Paragraph text</p>
              <h2>Card Title</h2>
              <p>Card Body</p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  <p>Card Description</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Button variant="outline" className="mt-4">
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  <p>Card Description</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Button variant="outline" className={`mt-4`}>
              Button
            </Button>
          </div>

          <div className="flex flex-col items-center justify-center p-4">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  <p>Card Description</p>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
            <Button variant="outline" className={` mt-4`}>
              Button
            </Button>
          </div>
        </div> */}
      </div>
    </HeroSectionChildren>
  );
};

export default Blank;
