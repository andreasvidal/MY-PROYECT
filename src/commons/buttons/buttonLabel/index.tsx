import React from "react";

interface ButtonLabelProps {
  event?: () => void;
  label: string;
}

export default function ButtonLabel(props: ButtonLabelProps) {
  return (
    <>
      <button
        className="containerButtonLabel"
        onClick={() => {
          props.event();
        }}
      >
        <p className="hoverLabel">{props.label}</p>
      </button>
      <style jsx>{`
        .containerButtonLabel {
          display: grid;
          background: var(--bg-buttons-color);
          width: 100%;
          max-width: max-content;
          height: 100%;
          align-items: center;
          justify-content: center;
          border-radius: none;
          border: none;
          cursor: pointer;
          padding: 10px;
        }
        .containerButtonLabel:hover {
          height: 100%;
          color: #ffef;
          opacity: 0.6;
          background: var(--bg-navBar-color);
        }
      `}</style>
    </>
  );
}
