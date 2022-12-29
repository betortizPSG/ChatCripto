import { useState } from 'react'
import { Form, FormGroup, Label, Input } from "reactstrap";
import Logout from './Logout';

const Header = (props) => {
    const { show, setShow } = useState(true)
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
        <div className="header">

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

            <div className="col-4">
            </div>

        </div>
    )
}

export default Header