const UserOffline = () => {
  return (
    <div className="w-[90%] h-[calc(100vh-250px)] flex flex-col items-center justify-center gap-[20px]">
      <h1 className="text-[#333] text-[3.5rem] font-bold text-center">
        🔴 Offline!
      </h1>
      <p className="text-[2.5rem] text-[#444444] font-semibold text-center">
        Sorry, it seems that you are currently offline. Please check your
        internet connection.
      </p>
    </div>
  );
};

export default UserOffline;
