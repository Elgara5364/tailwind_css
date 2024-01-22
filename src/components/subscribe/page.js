const Subscribe = () => {
  return (
    <div className="bg-white ">
      <div className="flex flex-col gap-5 max-w-screen-lg m-auto text-center pb-35">
        <h1 className="text-primary text-xl font-medium uppercase leading-5">
          Subscribe
        </h1>
        <div className="flex flex-col gap-1 mb-5">
          <h1 className="w-5/12 m-auto text-black text-3xl font-semibold  ">
            Subscribe to get the latest news about us
          </h1>
          <p className="text-secondary font-medium text-base">
            Please drop your email below to get daily update about what we do
          </p>
        </div>
        <div className="w-563 m-auto border-black border-1 rounded-small ps-4 py-1 flex justify-between">
          <input
            placeholder="Enter your email address"
            className="w-96 focus:border-transparent outline-none focus:ring-0"
          />
          <button className="px-6 py-3 me-1 bg-bt_secondary rounded-small">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
