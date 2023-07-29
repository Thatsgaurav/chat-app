import React, { useEffect } from "react";
import { useChatContext } from "@/context/chatContext";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebase";

/**
 * The Chats component retrieves and updates user data from a Firestore collection using the
 * useChatContext hook.
 * @returns The component is returning a `<div>` element with the text "Chats".
 */
const Chats = () => {
  const { users, setUsers } = useChatContext();

  useEffect(() => {
    onSnapshot(collection(db, "users"), (snapshot) => {
      const updatedUsers = {};
      snapshot.forEach((doc) => {
        updatedUsers[doc.id] = doc.data();
        console.log(doc.data());
      });
      setUsers(updatedUsers);
    });
  }, []);

  return <div>Chats</div>;
};

export default Chats;
