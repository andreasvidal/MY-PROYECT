import React from "react";
import { RiHome3Line } from "react-icons/ri";

interface ButtonIconProps {
  event?: () => void;
}

const ButtonIcon = (props: ButtonIconProps) => {
  return (
    <>
      <button
        className="containerButtonLabel"
        onClick={() => {
          props.event();
        }}
      >
        <span className="icono">
          <RiHome3Line size={24} color="#ffef"></RiHome3Line>
        </span>
      </button>
      <style jsx>{`
        .containerButtonIcon {
          display: grid;
          background: var(--bg-buttons-color);
          width: 100%;
          max-width: max-content;
          height: 100%;
          align-items: center;
          justify-content: center;
          padding: 10px;
          border-radius: none;
          border: none;
        }
        .containerButtonLabel:hover {
          height: 100%;
          color: #ffef;
          opacity: 0.6;
          background: var(--bg-navBar-color);
        }
        .icon {
          height: 24px;
          color: red;
          background: red;
        }
      `}</style>
    </>
  );
};

export default ButtonIcon;
