const Eq = ({ title, subTitle, firstContent, secondContent }) => {
  return (
    <section className="my-container">
      <div className="px-10 lg:px-16 flex gap-5">
        <h1 className="text-lg md:text-2xl lg:text-3xl tracking-wide font-semibold lg:font-bold mr-36 whitespace-nowrap">
          {title} <br /> {subTitle}
        </h1>
        <p className="leading-7 font-medium">{firstContent}</p>
        <p className="leading-7 font-medium">{secondContent}</p>
      </div>
    </section>
  );
};

export default Eq;
