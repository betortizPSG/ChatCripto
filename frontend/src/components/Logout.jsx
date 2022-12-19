import React, { useState, useRef, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../store/actions/authAction";
import { themeSet } from "../store/actions/messengerAction";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { io } from "socket.io-client";

const Logout = () => {
  const socket = useRef();
  const [hide, setHide] = useState(true);
  const [state, setState] = useState(false);
  const { myInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
  }, []);

  const logout = () => {
    dispatch(userLogout());
    socket.current.emit("logout", myInfo.id);
  };

  return (
    <>
      <div className="body">
        <div onClick={logout} className="logout">
          <button className="btn-logout">
            <FaSignOutAlt /> Sair
          </button>
        </div>

        <div className="darkmode">
          <div className={hide ? "theme_logout" : "theme_logout_show"}>
            <h3 className="title-dark-mode">Tema escuro</h3>
          </div>
        </div>

        <div className="tema">
          <div>
            <Form>
              <FormGroup switch>
                <Input
                  className="tema-dark-switch"
                  type="switch"
                  checked={state}
                  onClick={() => {
                    setState(!state);
                    if (state === false) {
                      dispatch(themeSet("dark"));
                    }
                    if (state === true) {
                      dispatch(themeSet("white"));
                    }
                  }}
                />
                <Label check>Ligar</Label>
              </FormGroup>

              <div className="darkmode">
                <div className={hide ? "theme_logout" : "theme_logout_show"}>
                  <h3 className="title-dark-mode">Decriptar</h3>
                </div>
              </div>
              <FormGroup switch>
                <Input className="tema-dark-switch" type="switch" />
                <Label check>Decriptar</Label>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
