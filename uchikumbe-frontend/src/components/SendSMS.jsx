import React, { useState, useEffect } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../utils/fetchUser";
import { userQuery, messageListQuery } from "../utils/data";
import { client } from "../client";

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [receiver, setReceiver] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [receiverPhotoUrl, setReceiverPhotoUrl] = useState("");
  const { userId } = useParams();
  const userInfo = fetchUser(); // Replace with your implementation of fetchUser()

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
        sentTime: new Date().toISOString(),
        receivedTime: null,
      };
      setChatMessages((prevState) => [...prevState, newMessage]);

      client
        .create(newMessage) // Replace with your implementation of sending the message to the server
        .then((response) => {
          console.log("Message sent to Sanity:", response);
          setSendingMessage(false);
        })
        .catch((error) => {
          console.error("Error sending message to Sanity:", error);
          setChatMessages((prevState) =>
            prevState.filter((msg) => msg !== newMessage)
          );
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
    const fetchReceiverPhotoUrl = async () => {
      try {
        const res = await fetch(
          `https://people.googleapis.com/v1/people/${receiver.id}?personFields=photos`,
          {
            headers: {
              Authorization: `Bearer ${userInfo.accessToken}`,
            },
          }
        );
        const data = await res.json();
        if (data.photos && data.photos.length > 0) {
          setReceiverPhotoUrl(data.photos[0].url);
        }
      } catch (error) {
        console.error("Error fetching receiver photo:", error);
      }
    };

    if (userInfo && receiver) {
      fetchReceiverPhotoUrl();
    }
  }, [userInfo, receiver]);

  useEffect(() => {
    if (receiver && userInfo && chatMessages.length === 0) {
      const senderId = userInfo.sub; // Replace with the actual sender ID
      const receiverId = userId; // Replace with the actual receiver ID

      const chatQuery = messageListQuery(senderId, receiverId);

      client
        .fetch(chatQuery) // Replace with your implementation of fetching the chat messages from the server
        .then((messages) => {
          console.log(messages);
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
        {receiver ? (
          <div className="flex items-center">
            {receiverPhotoUrl && (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={receiverPhotoUrl}
                alt="Receiver Avatar"
                style={{ objectFit: "cover", width: "40px", height: "40px" }}
              />
            )}
            <span className="font-bold ml-2">{receiver.userName}</span>
          </div>
        ) : (
          "Loading..."
        )}
      </h2>
      <Card className="flex-grow overflow-y-scroll h-80">
        <CardBody className="space-y-4">
          {chatMessages.map((chatMessage, index) => (
            <Card
              key={index}
              className={`p-4 h-25 w-1/3 bg-light-green-100 ${
                chatMessage.sender === userInfo.sub ? "self-end" : "self-start"
              }`}
            >
              <div className="flex items-center">
                <span>{chatMessage.content}</span>
              </div>
              <div className="flex items-end">
                <span className="text-xs text-gray-500">
                  {new Date(chatMessage.sentTime).toLocaleString()}
                </span>
              </div>
              {chatMessage.receivedTime && (
                <div className="flex items-end">
                  <span className="text-xs text-gray-500">
                    Received: {new Date(chatMessage.receivedTime).toLocaleString()}
                  </span>
                </div>
              )}
            </Card>
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
