export const LandingInfo = ({ title, desc, imgUrl }) => {
  return (
    <div className="w-full flex max-sm:flex-col items-center justify-between">
      <div className="w-6/12 max-sm:w-11/12">
        <img src={imgUrl} alt="" />
      </div>

      <div className="w-6/12 flex max-sm:w-full flex-col gap-5">
        <h5 className="lg:text-3xl  sm:text-xl max-sm:2xl  font-black tracking-tight  bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-400  dark:text-white">
          {title}
        </h5>
        <p className="font-normal  text-zinc-400 dark:text-gray-400">{desc}</p>
      </div>
    </div>
  );
};
