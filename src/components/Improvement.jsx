import "@/styles/style.css";

const Improvement = () => {
  return (
    <section className="my-container">
      <div className="px-10 lg:px-16 pb-6 lg:pb-16 space-y-2 lg:space-y-3">
        <p className="font-medium">Wrong with self-improvement & how we&apos;re fixing it.</p>
        <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold">Self-improvement. Ugh.</h2>
      </div>
      <div className="mx-40">
        <ul className="steps steps-vertical">
          <li className="step step-primary">Register</li>
          <li className="step step-primary">Choose plan</li>
          <li className="step step-primary">Purchase</li>
          <li className="step step-primary">Receive Product</li>
        </ul>
      </div>
    </section>
  );
};

export default Improvement;
