import React, { useState } from "react";
import { Card, CardBody } from "@material-tailwind/react";

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([]);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message) {
      setChatMessages((prevState) => [...prevState, message]);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col pl-40 pr-40 h-96">
      <Card className="flex-grow overflow-y-scroll">
        <CardBody className="space-y-2">
          {chatMessages.map((chatMessage, index) => (
            <div key={index} className="flex flex-col space-y-1">
              <span className="font-bold">John:</span>
              <span>{chatMessage}</span>
            </div>
          ))}
        </CardBody>
      </Card>
      <div className="flex justify-center">
  <div className="flex items-center space-x-2">
    <input
      type="text"
      placeholder="Type your message here"
      
      fullWidth={true}
        size="lg"
        outline={true}
        rounded={true}
        boxShadow={true}
        border={true}
        className="px-20 py-3 w-full"
      value={message}
      onChange={handleMessageChange}
    />
    <button
      className="p-2 rounded-r-lg bg-green-900 text-white"
      onClick={handleSendMessage}
    >
      Send
    </button>
  </div>
</div>

    </div>
  );
};

export default SendSMS;
