import React, { useEffect, useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc, onSnapshot, serverTimestamp } from "firebase/firestore";

export default function FloatingChat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), snapshot => {
      setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsub();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    await addDoc(collection(db, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
    });
    setNewMessage("");
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white/10 backdrop-blur p-4 rounded-xl w-72">
      <div className="h-48 overflow-y-auto mb-2 space-y-1">
        {messages.map(msg => (
          <div key={msg.id} className="bg-white/20 p-2 rounded text-sm">{msg.text}</div>
        ))}
      </div>
      <form onSubmit={sendMessage} className="flex gap-2">
        <input value={newMessage} onChange={e => setNewMessage(e.target.value)} className="flex-1 p-2 rounded bg-white/20" placeholder="Type..." />
        <button className="px-3 bg-purple-600 rounded">➤</button>
      </form>
    </div>
  );
}
