import React, { useState, useEffect } from "react";
import { Card } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import { fetchUser } from "../utils/fetchUser";
import { userQuery, messageListQuery } from "../utils/data";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

const SendSMS = () => {
  const [message, setMessage] = useState(""); // State to store the message
  const [chatMessages, setChatMessages] = useState([]); // State to store the chat messages
  const [receiver, setReceiver] = useState(null); // State to store the receiver
  const [sendingMessage, setSendingMessage] = useState(false); // State to track if a message is being sent
  const [receiverPhotoUrl, setReceiverPhotoUrl] = useState(""); // State to store the receiver's photo URL
  const [notificationCount, setNotificationCount] = useState(0); // State to store the notification count
  const { userId } = useParams(); // Accessing the userId parameter from the URL
  const userInfo = fetchUser(); // Fetching user information
  const [redirectToSignup, setRedirectToSignup] = useState(false); // State to track if user should be redirected to signup
  const navigate = useNavigate(); // React Router hook for navigation

  // Function to handle changes in the message input
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (message && receiver && userInfo) {
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

      // Add the new message to the chat messages list and update the notification count
      setChatMessages((prevState) => [...prevState, newMessage]);
      setNotificationCount((prevCount) => prevCount + 1);

      // Send the new message to the server
      client
        .create(newMessage)
        .then((response) => {
          setSendingMessage(false);
        })
        .catch((error) => {
          // If there's an error, remove the new message from the chat messages list and update the sending state
          setChatMessages((prevState) =>
            prevState.filter((msg) => msg !== newMessage)
          );
          setMessage(message);
          setSendingMessage(false);
        });
    } else if (!userInfo) {
      // If the user is not logged in, display an alert and prompt them to sign in
      alert("Please sign in first");
      //setRedirectToSignup(true);
    }
  };

  // Effect to redirect the user to the sign-in page if redirectToSignup state changes
  useEffect(() => {
    if (redirectToSignup) {
      navigate("/sign-in");
    }
  }, [redirectToSignup, navigate]);

  // Effect to fetch the receiver's information based on the userId parameter
  useEffect(() => {
    const query = userQuery(userId);

    client.fetch(query).then((data) => {
      setReceiver(data[0]);
    });
  }, [userId]);

  // Effect to fetch the receiver's photo URL
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

  // Effect to fetch the chat messages between the sender and receiver
  useEffect(() => {
    if (receiver && userInfo && chatMessages.length === 0) {
      const senderId = userInfo.sub;
      const receiverId = userId;

      const chatQuery = messageListQuery(senderId, receiverId);

      client
        .fetch(chatQuery)
        .then((messages) => {
          setChatMessages(messages);
          setNotificationCount(messages.length);
        })
        .catch((error) => {
          console.error("Error fetching chat messages:", error);
        });
    }
  }, [userInfo, receiver]);

  return (
    <div className="flex flex-col px-4 h-screen min-w-screen-sm items-center bg-green-100">
      <h2 className="text-2xl font-bold mb-4 mt-4 text-white">
        {receiver ? (
          <div className="flex items-center">
            {receiverPhotoUrl && (
              <img
                alt="receiver"
                src={receiverPhotoUrl}
                className="mb-1 rounded-full h-10 w-10"
              />
            )}
            <span className="font-semibold font-san ml-2 text-green-700">
              {receiver.userName}
            </span>
          </div>
        ) : (
          "Loading..."
        )}
      </h2>
      <Card className="overflow-y-scroll max-h-96 h-full space-y-4 p-4 m-4 max-w-4xl w-full">
        {/* Sender Messages */}
        {chatMessages.map((chatMessage, index) => {
          const isSender = chatMessage.sender.email === userInfo.email;

          if (isSender) {
            return (
              <div
                key={index}
                className="p-4 bg-green-200 rounded-md min-w-[100px] right-0 ml-auto"
              >
                {/* Sender content */}
                <div className="flex items-center overflow-clip text-lg">
                  <span>{chatMessage.content}</span>
                </div>
                <div className="flex">
                  <span className="text-sm text-black ml-auto">
                    {new Date(chatMessage.sentTime).toLocaleString()}
                  </span>
                </div>
              </div>
            );
          }
          if (!isSender) {
            return (
              <div
                key={index}
                className="p-4 bg-green-400 text-center rounded-md text-white w-26 right-0 mr-auto border-t border-green-700"
              >
                {/* Receiver content */}
                <div className="flex items-center text-lg">
                  <span>{chatMessage.content}</span>
                </div>
                <div className="flex">
                  <span className="text-sm text-end text-white flex pb-1">
                    {new Date(chatMessage.sentTime).toLocaleString()}
                  </span>
                </div>
                {chatMessage.receivedTime && (
                  <div className="flex items-end text-green-800 ml-auto">
                    <span className="">
                      Received:{" "}
                      {new Date(chatMessage.receivedTime).toLocaleString()}
                    </span>
                  </div>
                )}
              </div>
            );
          }
          return null; // Skip rendering if not a sender message
        })}

        {/* Receiver Messages */}
        {chatMessages.map((chatMessage, index) => {
          const isSender = chatMessage.sender.email === userInfo.email;

          return null; // Skip rendering if not a receiver message
        })}
      </Card>

      <div className="">
        <input
          className="text-lg w-[200px] h-11 mt-4 border-2 p-2
            focus:border-green-300 rounded-l-full
            border-green-100 outline-none
            transition-all duration-500 hover:scale-95"
          type="text"
          placeholder="Type your message here"
          value={message}
          onChange={handleMessageChange}
          disabled={!receiver}
        />

        <button
          type="button"
          onClick={handleSendMessage}
          disabled={!receiver || sendingMessage}
          className="mt-4 bg-green-900 hover:bg-goldenrod
            text-lg transition-all duration-500 
            hover:scale-95 text-white p-2 rounded-l-none
            rounded-r-full w-auto outline-none"
        >
          {sendingMessage ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default SendSMS;
