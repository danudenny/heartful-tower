import { HiOutlineHandThumbUp, HiOutlineHomeModern } from "react-icons/hi2";
import { BsPinMap } from "react-icons/bs";

export const Statistic = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-success-alt sm:w-12 sm:h-12">
            <HiOutlineHomeModern />
          </div>
          <h6 className="text-4xl font-bold text-white">Provides</h6>
          <h6 className="mb-2 text-5xl font-black text-[#73B153] italic drop-shadow-lg">
            46.000
          </h6>
          <p className="text-gray-700 font-semibold">Houses / Year</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-success-alt sm:w-12 sm:h-12">
            <BsPinMap />
          </div>
          <h6 className="text-4xl font-bold text-white">Over</h6>
          <h6 className="mb-2 text-5xl font-black text-[#73B153] italic drop-shadow-lg">
            400
          </h6>
          <p className="text-gray-700 font-semibold">Location In Japan</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-success-alt sm:w-12 sm:h-12">
            <HiOutlineHandThumbUp />
          </div>
          <h6 className="text-4xl font-bold text-white">Japan</h6>
          <h6 className="mb-2 text-5xl font-black text-[#73B153] italic drop-shadow-lg">
            Good
          </h6>
          <p className="text-gray-700 font-semibold">Quality</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-success-alt sm:w-12 sm:h-12">
            <HiOutlineHandThumbUp />
          </div>
          <h6 className="text-4xl font-bold text-white">The</h6>
          <h6 className="mb-2 text-5xl font-black text-[#73B153] italic drop-shadow-lg">
            Good
          </h6>
          <p className="text-gray-700 font-semibold">Price</p>
        </div>
      </div>
    </div>
  );
};
