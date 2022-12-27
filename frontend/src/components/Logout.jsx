import React, { useState, useRef, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { userIdle, userLogout } from "../store/actions/authAction";
import { themeSet } from "../store/actions/messengerAction";
import { Form, FormGroup, Label, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { io } from "socket.io-client";
import { useIdleTimer } from 'react-idle-timer';
import { useAlert } from 'react-alert'



const Logout = () => {
  const socket = useRef();
  const alert = useAlert()

  const onIdle = () => {
    disconnectIdleUser()
    alert.error('Você foi desconectado por inatividade', { timeout: 120 * 1000 })

  }



  const onPrompt = () => {

    alert.show('Você será desconectado em breve caso permaneça inativo', { timeout: 60 * 1000 })

  }

  const onAction = () => {
    reset()
    resume()
  }

  const {
    start,
    reset,
    activate,
    pause,
    resume,
    isIdle,
    isPrompted,
    isLeader,
    getTabId,
    getElapsedTime,
    getRemainingTime,
    getLastIdleTime,
    getLastActiveTime,
    getTotalIdleTime,
    getTotalActiveTime
  } = useIdleTimer({
    onIdle,
    onPrompt,
    onAction,
    timeout: 5 * 1000,
    promptTimeout: 5 * 1000,
    events: [
      'mousemove',
      'keydown',
      'wheel',
      'DOMMouseScroll',
      'mousewheel',
      'mousedown',
      'touchstart',
      'touchmove',
      'MSPointerDown',
      'MSPointerMove',
      'visibilitychange'
    ],
    immediateEvents: [],
    debounce: 0,
    throttle: 0,
    eventsThrottle: 200,
    element: document,
    startOnMount: true,
    startManually: false,
    stopOnIdle: false,
    crossTab: false,
    name: 'idle-timer',
    syncTimers: 0,
    leaderElection: false
  })

  const [hide, setHide] = useState(true);
  const [state, setState] = useState(true);
  const { myInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
  }, []);


  // Effect altera o State para mudar o tema 
  useEffect(() => {
    if (state) {
      dispatch(themeSet("dark"))
    }
    if (!state) {
      dispatch(themeSet("white"))

    }

  }, [state])

  const logout = () => {
    dispatch(userLogout());
    socket.current.emit("logout", myInfo.id);
  };
  const disconnectIdleUser = () => {
    dispatch(userIdle());
    socket.current.emit("logout", myInfo.id);
  }

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
                  }}
                />
                <Label >Ligar</Label>
              </FormGroup>
            </Form>

          </div>
        </div>
      </div>
    </>
  );
};

export default Logout;
