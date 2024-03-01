const Error404 = () => {
  return (
    <>
      <div className="container">
        <h1 className="title">
          ERROR 404 <br /> PAGINA NO ENCONTRADA
        </h1>
        <h2>La URL a la que ingresaste es incorrecta. </h2>
      </div>
      <style jsx>{`
        .container {
          display: grid;
          align-text: center;
          text-align: center;
          padding: 2rem;
        }
        .title {
          padding: 4rem;
        }
      `}</style>
    </>
  );
};
export default Error404;
