import React, { useState } from "react";
import "../../styles/pharmacie/notification_PHA.css"
const NotificationCard = () => {
  const [notifications, setNotifications] = useState([
    { text: "Nouvelle ordonnance reçue de Jean Dupont", read: false },
    { text: "Ordonnance de Marie Curie prête à être récupérée", read: false },
    { text: "Ordonnance de Albert Einstein en préparation", read: false },
  ]);

  const markAsRead = (index) => {
    const updatedNotifications = notifications.map((notif, i) =>
      i === index ? { ...notif, read: true } : notif
    );
    setNotifications(updatedNotifications);
  };

  return (
    <div id="Notification" className="main-content">
      <div className="notification-card">
        <h2 className="notification-title">Historique des Notifications</h2>
        <ul className="notification-list">
          {notifications.map((notification, index) => (
            <li
              className={`notification-item ${notification.read ? "read" : ""}`}
              key={index}
            >
              <div className="notification-content">
                <p className="notification-text">{notification.text}</p>
                {!notification.read && (
                  <button
                    className="mark-as-read"
                    onClick={() => markAsRead(index)}
                  >
                    Marquer comme lu
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationCard;
