const Started = () => {
  return (
    <section className="my-container">
      <div className="text-center space-y-2 lg:space-y-4">
        <p className="font-semibold">We take privacy seriously</p>
        <h5 className="text-lg md:text-2xl lg:text-3xl tracking-wide font-semibold lg:font-bold">Before you get started</h5>
        <p className="text-gray-500 font-medium lg:font-semibold lg:text-lg tracking-wide">
          &quot;We won&apos;t share your answers with anyone (and won&apos;t ever tell <br /> you which friends said what about you)&quot;
        </p>
        <p>
          <span className="text-gray-600 lg:text-lg font-medium lg:font-semibold">with love,</span> <span className="italic lg:text-lg font-thin">Lean alued</span>
        </p>
        <div className="pt-3">
          <button className="primary-btn !text-xs tracking-wide">Start a test</button>
          <p className="text-xs text-gray-500 font-semibold pt-3">Take only 5 minutes</p>
        </div>
      </div>
    </section>
  );
};

export default Started;
