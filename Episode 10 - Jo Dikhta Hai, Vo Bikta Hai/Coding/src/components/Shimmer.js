export const RestaurantShimmer = () => {
  return (
    <div className="w-[90%] flex flex-col items-center transition-all">
      <div className="w-[50%] h-[50px] bg-[#cecccc] rounded-lg mb-[30px]">
        <div></div>
      </div>
      {/* flex justify-between items-center mb-[30px] */}
      <div className="flex flex-wrap justify-center items-center gap-x-[1.5%] gap-y-[25px]">
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
        <div className="shimmer-card"></div>
      </div>
    </div>
  );
};

export const RestaurantMenuShimmer = () => {
  return (
    <div className="shimmer-menu">
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
    </div>
  );
};
