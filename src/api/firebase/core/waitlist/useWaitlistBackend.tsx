import { createDocument } from "@/api/firebase/master/firestoreCrud";
import {
  WAITLISTCOLLECTION,
} from "@/api/firebase/collections";
import { serverTimestamp } from "firebase/firestore";

const useWaitlistBackend = (collection = WAITLISTCOLLECTION) => {
  const createWaitlist = async (data: any) => {
    const document = {
      email: data.emailId,
      from: "vani.guru",
      createdAt: serverTimestamp(),
    };
    const waitlist = await createDocument(collection, document);
    return waitlist;
  };

  return {
    createWaitlist,
  };
};
export default useWaitlistBackend;
