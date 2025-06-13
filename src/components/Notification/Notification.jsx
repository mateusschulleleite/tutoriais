import React, { useEffect, useState } from "react";
import "./Notification.scss";
import { FaRegBell } from "react-icons/fa";

export default function Notification({ userActivities, userActive }) {
  const [notificationsNotRead, setNotificationsNotRead] = useState([]);
  const handleClickNotification = () => {
    document.querySelector(".notification__list").classList.toggle("open");
  };

  useEffect(() => {
    const notificationsNotRead = userActivities.filter((item) => {
      return !item.readBy.includes(userActive.uid);
    });

    setNotificationsNotRead(notificationsNotRead);
  }, [userActivities, userActive]);
  return (
    <div className="notification">
      <div
        onClick={() => handleClickNotification()}
        title="Notificações"
        className="notification__icon"
      >
        <FaRegBell />
        <span>{notificationsNotRead.length}</span>
      </div>
      <div className="notification__list">
        <p>Notificações</p>
        <ul>
          {notificationsNotRead.map((item, index) => {
            return (
              <li key={index}>
                <span>{item.user}</span> publicou um tutorial de {item.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
