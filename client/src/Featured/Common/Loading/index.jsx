import React from "react";

const Loading = () => {
  return (
    <div className=" z-[99999] fixed top-0 left-0 w-full h-full bg-white ">
      <div className="w-full  h-full flex items-center justify-center">
        <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          class="spinner"
          viewBox="0 0 66 66"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            class="path"
            fill="none"
            stroke-width="6"
            cx="33"
            cy="33"
            r="30"
          ></circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;


/* HTML: <div class="loader"></div> */
.loader {
    width: 90px;
    height: 14px;
    --c: 50%,#000 90deg,#0000 0;
    background: 
      conic-gradient(from   45deg at calc(100% - 7px) var(--c)),
      conic-gradient(from -135deg at             7px  var(--c));
    background-position: calc(100%/3) 0;
    background-size: calc(100%/4) 100%;
    animation: l6 0.5s infinite linear;
  }
  @keyframes l6 {
      100% {background-position: 0 0}
  }
