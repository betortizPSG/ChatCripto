import React from "react";
import Logout from "./Logout";
import Message from "./Message";
import MessageSend from "./MessageSend";
import Decrypt from "./Decrypt";



const RightSide = (props) => {
  const {
    currentfriend,
    inputHendle,
    newMessage,
    sendMessage,
    message,
    scrollRef,
    ImageSend,
    activeUser,
    typingMessage,
    decrypt
  } = props;

  return (
    <div className="col-9">
      <div className="right-side">
        <input type="checkbox" id="dot" />
        <div className="row">
          <div className="col-8">
            <div className="message-send-show">
              <div className="header">
                <div className="image-name">
                  <div className="image">
                    <img src={`./image/${currentfriend.image}`} alt="" />

                    {activeUser &&
                      activeUser.length > 0 &&
                      activeUser.some((u) => u.userId === currentfriend._id) ? (
                      <div className="active-icon"></div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="name">
                    <h3>{currentfriend.userName} </h3>
                  </div>
                </div>
              </div>

              <Message
                message={message}
                currentfriend={currentfriend}
                scrollRef={scrollRef}
                typingMessage={typingMessage}
              />

              <MessageSend
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                ImageSend={ImageSend}
              />
            </div>
          </div>
          <div className='col-4'>
            <Logout
            />
            <Decrypt
              message={message}
              currentfriend={currentfriend}
              scrollRef={scrollRef}
              typingMessage={typingMessage}
              decrypt={decrypt}
            />
          </div>
        </div>
      </div>

    </div>

  );
};

export default RightSide;
