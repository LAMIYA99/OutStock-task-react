import React from "react";

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[99999]">
      <span className="loader"></span>
    </div>
  );
};

export default Loading;
