import React, { useEffect, useState } from "react";
import "./Notification.scss";
import { FaRegBell } from "react-icons/fa";
import { atualizarAtividades } from "../../firebase/dbService";

export default function Notification({ userActivities, userActive }) {
  const [notificationsNotRead, setNotificationsNotRead] = useState([]);

  const handleClickNotification = async () => {
    document.querySelector(".notification__list").classList.toggle("open");
    try {
      notificationsNotRead.map((item) => {
        item.readBy.push(userActive.uid);
        atualizarAtividades(item.id, item);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const notificationsNotRead = userActivities.filter((item) => {
      return !item.readBy.includes(userActive.uid);
    });

    console.log(notificationsNotRead);

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
        {notificationsNotRead.length >= 1 && (
          <span>{notificationsNotRead.length}</span>
        )}
      </div>
      <div className="notification__list">
        <p>Notificações</p>
        {notificationsNotRead.length === 0 ? (
          <span>Sem notificações</span>
        ) : (
          <ul>
            {notificationsNotRead.map((item, index) => {
              return (
                <li key={index}>
                  <span>{item.user}</span> publicou um tutorial de {item.name}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
