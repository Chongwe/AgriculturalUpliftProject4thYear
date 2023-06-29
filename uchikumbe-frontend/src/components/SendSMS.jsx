import React, { useState, useEffect, useReducer } from "react";
import { Card, CardBody } from "@material-tailwind/react";
import { useParams, useRoutes, } from "react-router-dom";
import { fetchUser } from "../utils/fetchUser";
import { userQuery, messageListQuery } from "../utils/data";
import { client } from "../client";
import { useNavigate } from "react-router-dom";

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);
  const [receiver, setReceiver] = useState(null);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [receiverPhotoUrl, setReceiverPhotoUrl] = useState("");
  const [notificationCount, setNotificationCount] = useState(0);
  const { userId } = useParams();
  const userInfo = fetchUser();
  const [redirectToSignup, setRedirectToSignup] = useState(false);
  const navigate = useNavigate();

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

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
      setChatMessages((prevState) => [...prevState, newMessage]);
      setNotificationCount((prevCount) => prevCount + 1);

      client
        .create(newMessage)
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
    } else if (!userInfo) {
      // Redirect user to signup page
     alert("sing-in first")
      //setRedirectToSignup(true);
    }
  };

  useEffect(() => {
    if (redirectToSignup) {
      navigate("/sign-in"); // Replace "/signup" with the actual route to your signup page
    }
  }, [redirectToSignup, navigate]);


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
      const senderId = userInfo.sub;
      const receiverId = userId;

      const chatQuery = messageListQuery(senderId, receiverId);

      client
        .fetch(chatQuery)
        .then((messages) => {
          console.log(messages);
          
          setChatMessages(messages);
          setNotificationCount(messages.length);
        })
        .catch((error) => {
          console.error("Error fetching chat messages:", error);
        });
    }
  }, [userInfo, receiver]);

  useEffect(() => {
    // Disable scrolling on mount
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';

    // Enable scrolling on unmount
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col px-4 h-screen w-full items-center">
      <h2 className="text-2xl font-bold mb-4 mt-4 text-green-800">
        {receiver ? (
          <div className="flex items-center">
            {receiverPhotoUrl && (
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={receiverPhotoUrl}
                alt="Receiver Avatar"
              />
            )}
            <span className="font-bold ml-2">{receiver.userName}</span>
          </div>
        ) : (
          "Loading..." 
        )}
      </h2>
      {/* <p>Number of Messages Received:  {notificationCount }</p>  */}
      <Card className=" overflow-y-scroll max-h-96 h-full space-y-4 p-4 m-4 max-w-4xl w-full">
        {/* Sender Messages */} 
        {chatMessages.map((chatMessage, index) => {
          const isSender = chatMessage.sender.email === userInfo.email;
          console.log(chatMessage.sender)
          console.log(userInfo)
          if (isSender) {
            return (

              
              <Card
          
                key={index}
                className="p-4 w-1/5 right-0 ml-auto  "
              >
                {/* Sender content */}
                <div className="flex items-center overflow-clip text-lg"> 
                  <span>{chatMessage.content} </span>
                </div>
                <div className="flex">
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
            );
          } 
          if (!isSender) {
            return (  
              <Card
              
                key={index}
                className="p-4 bg-green-300 text-center text-white w-26 right-0 mr-auto border-t bourder-green-700 "
              >
                
                {/* Receiver content */}
                <div className="flex items-center text-lg">
                  <span>{chatMessage.content}</span>
                </div>
                <div className="flex">
                  <span className="text-md text-end text-white flex">
                    {new Date(chatMessage.sentTime).toLocaleString()}
                  </span>
                </div>
                {chatMessage.receivedTime && (
                  <div className="flex items-end text-green-800">
                    <span className="">
                      Received: {new Date(chatMessage.receivedTime).toLocaleString()}
                    </span>
                  </div>
                )}
              </Card>
            );
          }
          return null; // Skip rendering if not a sender message
        })}

        {/* Receiver Messages */}
        {chatMessages.map((chatMessage, index) => {
          const isSender = chatMessage.sender.email === userInfo.email;
          console.log(userInfo)
          
          return null; // Skip rendering if not a receiver message
        })}
      </Card>

      <div className="">
        <input
          className=" text-lg w-96 h-11 mt-4 border-2 p-2
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
            rounded-r-full w-24 outline-none"
        >
          {sendingMessage ? "Sending..." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default SendSMS;
