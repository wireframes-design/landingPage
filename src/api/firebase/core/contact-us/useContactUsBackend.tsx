import { createDocument } from "@/api/firebase/master/firestoreCrud";
import { CONTACTUSCOLLECTION } from "@/api/firebase/collections";
import { firestore } from "@/firebase/firebaseConfig";
import { serverTimestamp } from "firebase/firestore";

const useContactUsBackend = (collection = CONTACTUSCOLLECTION) => {
  const createContactUs = async (data: any) => {
    const document = {
      fullName: data.fullName,
      contact: data.contact,
      email: data.email,
      message: data.message,
      from:"vani.guru",
      createdAt: serverTimestamp(),
    };
    const contact = await createDocument(collection, document);
    return contact;
  };

  return {
    createContactUs,
  };
};
export default useContactUsBackend;
