const Familiar = () => {
  return (
    <section className="lg:pb-5 xl:lg:pb-10">
      <h1 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold px-10 lg:px-16 pb-6 lg:pb-16">Does this sound familiar...</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mx-6 lg:-mx-40">
        <div className="bg-[#D8F2FF] rounded-md lg:rounded-xl p-5 lg:p-7 space-y-2 lg:space-y-4">
          <h4 className="text-xl lg:text-2xl">😮</h4>
          <h3 className="text-lg lg:text-xl whitespace-nowrap font-medium lg:font-semibold">Yourself in a quarrel with your partner</h3>
          <p className="leading-6 lg:leading-7 text-xs lg:text-sm">You get angry and defensive, instead of staying open and working towards common ground.</p>
        </div>
        <div className="bg-[#EEEBFE] rounded-md lg:rounded-xl p-5 lg:p-7 space-y-2 lg:space-y-4">
          <h4 className="text-xl lg:text-2xl">😠</h4>
          <h3 className="text-lg lg:text-xl whitespace-nowrap font-medium lg:font-semibold">You argue with a colleague</h3>
          <p className="leading-6 lg:leading-7 text-xs lg:text-sm">You get angry and defensive, instead of staying open and working towards common ground.</p>
        </div>
        <div className="bg-[#6341EF] text-white rounded-md lg:rounded-xl p-5 lg:p-7 space-y-2 lg:space-y-4 lg:-rotate-6">
          <h4 className="text-xl lg:text-2xl">😲</h4>
          <h3 className="text-lg lg:text-xl whitespace-nowrap font-medium lg:font-semibold">You get a promotion at work</h3>
          <p className="leading-6 lg:leading-7 text-xs lg:text-sm">You question yourself and wonder when they&apos;ll realize you&apos;re an unqualified imposter, instead of trusting yourself & your abilities.</p>
        </div>
        <div className="bg-[#FFEFD5] rounded-md lg:rounded-xl p-5 lg:p-7 space-y-2 lg:space-y-4">
          <h4 className="text-xl lg:text-2xl">🤨</h4>
          <h3 className="text-lg lg:text-xl whitespace-nowrap font-medium lg:font-semibold">You attend a class reunion</h3>
          <p className="leading-6 lg:leading-7 text-xs lg:text-sm"> When you attend a class reunion, it&apos;s natural to find yourself reflecting on your own achievements in comparison to your fellow classmates.</p>
        </div>
      </div>
    </section>
  );
};

export default Familiar;
