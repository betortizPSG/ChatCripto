import { useState } from "react";
import Logout from "./Logout";
import Message from "./Message";
import MessageSend from "./MessageSend";
import ListMessages from "./ListMessages";
import { Form, FormGroup, Label, Input } from "reactstrap";
import Header from "./Header";
//import { useIdleTimer } from 'react-idle-timer'




const RightSide = (props) => {



     const [show, setShow] = useState(true);


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



     return (
          <div className="col-9">
               <div className="right-side">
                    <input type="checkbox" id="dot" />
                    <div className="row">
                         <div className="col-8">
                              <div className="message-send-show">
                                   <div>
                                        <Logout />
                                   </div>
                                   <Header
                                        currentfriend={currentfriend}
                                   />
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
                         {/* <div className="col-4">
                              <div>
                                   <Logout show={show} changeShow={onChangeShow} />
                              </div>

                              <div id="box-criptografar" style={{ textAlign: 'center', marginTop: '10px' }} >
                                   <div className="">
                                        <h3 className="title-dark-mode">Criptografar</h3>
                                   </div >
                                   <Form>
                                        <FormGroup switch>
                                             <Input
                                                  className="tema-dark-switch"
                                                  type="switch"
                                                  checked={show}
                                                  onClick={() => {
                                                       setTimeout(() => {
                                                            setShow(!show);

                                                            scrollRef.current?.scrollIntoView({ behavior: "auto" });

                                                       }, "100")
                                                  }}
                                             />
                                             <Label check>Ligar</Label>
                                        </FormGroup>
                                   </Form>
                              </div>
                         </div> */}
                    </div>
               </div>
          </div>
     );
};

export default RightSide;
