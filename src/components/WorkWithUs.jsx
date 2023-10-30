import animal from "@/assets/images/icons/animal-2.png";
import Image from "next/image";

const WorkWithUs = () => {
  return (
    <section className="my-container">
      <div className="bg-[#F3F1FF] rounded-xl lg:rounded-3xl p-5 lg:p-10">
        <div className="lg:flex justify-between gap-10 space-y-2 lg:space-y-0">
          <div className="lg:mr-20">
            <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold pb-6 lg:pb-10 text-center lg:text-right">Work with us</h2>
            <div className="bg-white p-5 lg:p-8 card space-y-2 lg:space-y-3">
              <Image src={animal} alt="icon" />
              <h5 className="text-lg lg:text-xl font-semibold lg:font-bold tracking-wide">About</h5>
              <p className="text-sm lg:text-base lg:font-medium text-gray-600 leading-6 lg:leading-7">
                At ahead our goal is to make self- improvement fun and lasting. We know there&apos;s a way how to make it work. And that&apos;s what aHead is all about!
              </p>
            </div>
            <div className="bg-[#FEF7F1] p-5 lg:p-8 card space-y-2 lg:space-y-3 -top-3 lg:-top-6">
              <h5 className="text-lg lg:text-xl font-semibold lg:font-bold tracking-wide">Product</h5>
              <p className="text-sm lg:text-base lg:font-medium text-gray-600 leading-6 lg:leading-7">Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg md:text-3xl lg:text-4xl tracking-wide font-semibold lg:font-bold primary-color pb-3 lg:pb-10 text-center lg:text-end">ahead</h2>
            <div className="bg-white p-5 lg:p-8 card space-y-2 lg:space-y-3">
              <h5 className="lg:text-lg font-semibold lg:font-bold tracking-wide">Power through, even when the going gets tough</h5>
              <p className="font-medium leading-6 text-gray-600 text-sm">We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
            </div>
            <div className="bg-white p-5 lg:p-8 card space-y-2 lg:space-y-3 my-5 lg:my-8">
              <h5 className="lg:text-lg font-semibold lg:font-bold tracking-wide">Learn more about who you are and where you want to go</h5>
              <p className="font-medium leading-6 text-gray-600 text-sm">We ask the right questions to help you better understand why you do things the way you do.</p>
            </div>
            <div className="bg-white p-5 lg:p-8 card space-y-2 lg:space-y-3">
              <h5 className="lg:text-lg font-semibold lg:font-bold tracking-wide">Play and grow together with others on the same journey</h5>
              <p className="font-medium leading-6 text-gray-600 text-sm">Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!</p>
            </div>
          </div>
          <div className="bg-white w-2 relative mt-8 lg:mt-20 hidden lg:block">
            <div className="bg-[#B19FFB] absolute h-44 top-0 w-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
