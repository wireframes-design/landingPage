import { createDocument } from "@/api/firebase/master/firestoreCrud";
import { CHATBOTCOLLECTION } from "@/api/firebase/collections";
import { orderBy, query, serverTimestamp } from "firebase/firestore";
import { firestore } from "@/firebase/firebaseConfig";

const useChatbotBackend = (collection = CHATBOTCOLLECTION) => {
  const createChat = async (prompt: string) => {
    const document = {
      prompt,
      createTime: serverTimestamp(),
    };
    const chat = await createDocument(collection, document);
    if (chat) {
      return {
        success: true,
        data: chat,
      };
    } else {
      return {
        success: false,
        message: "something whent wrong",
      };
    }
  };


 

  return {
    createChat,
  };
};
export default useChatbotBackend;
