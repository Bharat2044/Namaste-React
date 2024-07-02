import "../styles/UserOffline.css";

const UserOffline = () => {
  return (
    <div className="user-offline-container">
      <h1 className="user-offline-heading">🔴 Offline!</h1>
      <p className="user-offline-message">
        Sorry, it seems that you are currently offline. Please check your
        internet connection.
      </p>
    </div>
  );
};

export default UserOffline;
