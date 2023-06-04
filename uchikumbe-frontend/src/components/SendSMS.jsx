import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../utils/fetchUser";
import { userQuery, messageListQuery } from "../utils/data";
import { client } from "../client";

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState(null);
  const [receiver, setReceiver] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);
  const { userId } = useParams();
  const userInfo = fetchUser();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message && receiver) {
      setMessage("");
      setSendingMessage(true);

      const newMessage = {
        _type: "message",
        sender: userInfo,
        receiver: receiver,
        content: message,
        like: [],
      };
      setChatMessages((prevState) => [...prevState, newMessage]);

      client.create(newMessage)
        .then((response) => {
          console.log("Message sent to Sanity:", response);
          setSendingMessage(false);
        })
        .catch((error) => {
          console.error("Error sending message to Sanity:", error);
          setChatMessages((prevState) => prevState.filter((msg) => msg !== newMessage));
          setMessage(message);
          setSendingMessage(false);
        });
    }
  };

  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setReceiver(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    if (receiver && userInfo && chatMessages == null) {
      const senderId = userInfo.sub; // Replace with the actual sender ID
      const receiverId = userId; // Replace with the actual receiver ID

      const chatQuery = messageListQuery(senderId, receiverId);
      
      client.fetch(chatQuery)
        .then((messages) => {
          console.log(messages)
          setChatMessages(messages);
        })
        .catch((error) => {
          console.error("Error fetching chat messages:", error);
        });
    }
  }, [userInfo, receiver]);

  return (
    <div className="flex flex-col pl-40 pr-40 h-96">
      <h2 className="text-2xl font-bold mb-4">
        {receiver ? receiver.userName : "Loading..."}
      </h2>
      <Card className="flex-grow overflow-y-scroll">
        <CardBody className="space-y-2">
          {chatMessages?.map((chatMessage, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="font-bold">{chatMessage.sender?.name}</span>
              <span>{chatMessage.content}</span>
            </div>
          ))}
        </CardBody>
      </Card>
      <div className="flex justify-center mt-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Type your message here"
            className="px-20 py-3 w-full border rounded-lg"
            value={message}
            onChange={handleMessageChange}
            disabled={!receiver}
          />
          <button
            className="p-2 rounded-lg bg-green-900 text-white"
            onClick={handleSendMessage}
            disabled={!receiver || sendingMessage}
          >
            {sendingMessage ? "Sending..." : "Send"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendSMS;
