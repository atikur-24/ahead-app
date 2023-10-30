import "@/styles/style.css";

const Wondered = () => {
  return (
    <section className="my-container">
      <div className="bg-[#EDF8FE] rounded-xl lg:rounded-3xl p-5 lg:p-10 text-center">
        <p className="font-medium pb-1 lg:pb-2">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
        <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold pb-6 lg:pb-10">Ever wondered what others think of you?</h2>
        <div className="bg-white lg:mx-40 py-20 drop-shadow-lg rounded-lg relative text-sm">
          <ul className="steps steps-vertical lg:steps-horizontal">
            <li data-content="" className="step step-primary">
              <span className="bg-primary text-white rounded px-2 py-1 absolute top-16 left-40 lg:top-12 lg:left-32">You</span>
            </li>
            <li data-content="" className="step step-info">
              <span className="bg-info text-white rounded px-2 py-1 absolute bottom-64 left-[220px] lg:bottom-20 lg:left-[360px]">Anonymous 1</span>
            </li>
            <li data-content="" className="step step-warning">
              <span className="bg-warning text-white rounded px-2 py-1 absolute top-48 left-20 lg:top-12 lg:left-[520px]">Anonymous 2</span>
            </li>
            <li data-content="" className="step step-success">
              <span className="bg-success text-white rounded px-2 py-1 absolute bottom-32 left-[220px] lg:bottom-20 lg:left-[680px]">Anonymous 3</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Wondered;
