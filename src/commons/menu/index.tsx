import ButtonLabel from "../buttons/buttonLabel";
import ButtonIcon from "../buttons/buttonIcon/ButtonIcon";

const Menu = () => {
  return (
    <>
      <div className="containerMenu">
        <ButtonIcon />
        <div className="containerButtonsMenu">
          <ButtonLabel label={"About Me"} event={() => "About Me"} />
          <ButtonLabel label={"Skills"} />
          <ButtonLabel label={"Projects"} />
        </div>
      </div>
      <style jsx>{`
        .containerMenu {
          display: grid;
          width: 100%;
          height: max-content;
          grid-template-columns: auto max-content;
          justify-content: space-between;
          padding: 20px 16px;
          background: var(--bg-buttons-color);
          margin: 0 auto;
        }
        .containerButtonsMenu {
          display: flex;
          flex-direction: row;
          width: 100%;
        }
      `}</style>
    </>
  );
};
export default Menu;
