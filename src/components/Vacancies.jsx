const Vacancies = () => {
  return (
    <section className="my-container">
      <div className="px-10 lg:px-16">
        <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold pb-4 lg:pb-8 text-center lg:text-right">Open vacancies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          <div className="bg-[#FEFBEC] p-4 lg:p-5 space-x-1 lg:space-y-2 card rounded-lg">
            <h5 className="text-lg font-medium lg:font-semibold">Senior Full-Stack Engineer</h5>
            <ul className="list-disc pl-4 space-y-2 text-sm font-medium text-gray-700">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FEFBEC] p-4 lg:p-5 space-x-1 lg:space-y-2 card rounded-lg">
            <h5 className="text-lg font-medium lg:font-semibold">Senior Designer</h5>
            <ul className="list-disc pl-4 space-y-2 text-sm font-medium text-gray-700">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
          <div className="bg-[#FEFBEC] p-4 lg:p-5 space-x-1 lg:space-y-2 card rounded-lg">
            <h5 className="text-lg font-medium lg:font-semibold">Superstar Intern</h5>
            <ul className="list-disc pl-4 space-y-2 text-sm font-medium text-gray-700">
              <li>Full-time position</li>
              <li>Berlin or remote</li>
              <li>€65-85k, 0.5-1.50% equity share options</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancies;
