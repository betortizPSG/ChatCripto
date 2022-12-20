import { useState, useEffect } from "react";
import Logout from "./Logout";
import Message from "./Message";
import MessageSend from "./MessageSend";
import ListMessages from "./ListMessages";

const RightSide = (props) => {
<<<<<<< HEAD
  const [show, setShow] = useState(false);
=======


  const [show, setShow] = useState(false)
>>>>>>> 1815da159741276f31f1de09bff2e9bdc5936882

  const Decrypt = () => {
    setShow(!show);
  };
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
  } = props;

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [Decrypt]);

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
              {show ? (
                <Message
                  message={message}
                  currentfriend={currentfriend}
                  scrollRef={scrollRef}
                  typingMessage={typingMessage}
                />
              ) : (
                <ListMessages
                  message={message}
                  currentfriend={currentfriend}
                  scrollRef={scrollRef}
                  typingMessage={typingMessage}
                />
              )}
              {/* <Message
                message={message}
                currentfriend={currentfriend}
                scrollRef={scrollRef}
                typingMessage={typingMessage}
              /> */}

              <MessageSend
                inputHendle={inputHendle}
                newMessage={newMessage}
                sendMessage={sendMessage}
                ImageSend={ImageSend}
              />
            </div>
          </div>
          <div className="col-4">
            <div>
              <Logout />
            </div>
            <div>
              <button onClick={Decrypt} className={"btn-decripto"}>
                Decriptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======

>>>>>>> 1815da159741276f31f1de09bff2e9bdc5936882
  );
};

export default RightSide;
