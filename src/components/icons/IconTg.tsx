import React from "react";

interface IconProps {
  className?: string;
}

const IconWU = ({ className = "" }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${className}`}
  >
    <path
      d="M21.0077 2.69142C20.3783 2.94749 2.51522 10.7045 2.51522 10.7045C2.51522 10.7045 1.6501 11.0092 1.71872 11.5719C1.78734 12.1347 2.49316 12.3922 2.49316 12.3922L7.09078 13.9862C7.09078 13.9862 8.47889 18.6748 8.7524 19.5646C9.0259 20.4559 9.24451 20.4767 9.24451 20.4767C9.49841 20.5909 9.73074 20.4087 9.73074 20.4087L12.7015 17.6188L17.3325 21.2757C18.5843 21.8384 19.0397 20.6663 19.0397 20.6663L22.2301 3.83082C22.5124 2.52815 21.6723 2.42196 21.0077 2.69142Z"
      stroke="#1D1D1B"
      strokeWidth="1.5"
      strokeMiterlimit="10"
    />
    <path
      d="M7 14L19 6L10.5 16"
      stroke="#1D1D1B"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.42969 19.7143L10.2868 16.2857L12.8583 17.5714"
      stroke="#1D1D1B"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default IconWU;
