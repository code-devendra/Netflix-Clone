const Container = (props) => {
  return (
    <div className="hero min-h-[500px] my-6">
      <div
        className={`hero-content text-center lg:text-left max-w-5xl flex-col-reverse ${
          props.imagePosition === "right"
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        }`}
      >
        <img
          src={props.image}
          className=" w-[300px] lg:w-96 rounded-lg shadow-2xl"
          alt={props.title}
        />
        <div>
          <h1 className="text-white text-3xl lg:text-5xl font-bold">
            {props.title}
          </h1>
          <p className="text-white text-xl lg:text-2xl py-6">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Container;
