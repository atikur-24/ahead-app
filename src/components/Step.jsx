import number1 from "@/assets/images/icons/number-1.png";
import number2 from "@/assets/images/icons/number-2.jpg";
import number3 from "@/assets/images/icons/number-3.png";
import Image from "next/image";

const Step = () => {
  return (
    <div className="bg-red-500">
      <div className="bg-green-500">
        <div className="bg-slate-300 flex items-center">
          <div>
            <Image width={35} src={number1} alt="number" />
            <div className="border-t-4 border-indigo-500 border-dashed w-96 pb-4"></div>
          </div>
          <div>
            <Image width={35} src={number2} alt="number" />
            <div className="border-t-4 border-indigo-500 border-dashed w-96"></div>
          </div>
          <div>
            <Image width={35} src={number3} alt="number" />
            <div className="border-t-4 border-indigo-500 border-dashed w-96"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
