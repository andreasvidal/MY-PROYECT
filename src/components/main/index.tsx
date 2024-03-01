import Menu from "../../commons/menu/index";
const Home = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <div className="aboutMe">
          <h1>hola no se ve</h1>
          <p>descripción</p>
          <div>
            <picture>
              <source>
                <img src={"Prueba1"} alt="img prueba" />
              </source>
            </picture>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          background: red;
          height: 100vh;
        }
      `}</style>
    </>
  );
};
export default Home;
