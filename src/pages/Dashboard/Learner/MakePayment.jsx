const MakePayment = () => {
  return (
    <>
      <section className=" w-full ">
        <div className="lg:mx-16">
          <h1 className="uppercase py-4 text-center text-3xl text-[#703e78] font-bold leading-3">
            payment
          </h1>
          <div className="mt-8">
            <div className="flex justify-evenly">
              <div className="w-1/2 mx-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="w-1/2 mx-4">
                <input
                  type="text"
                  placeholder="MM/YY/CVC"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button className="text-white bg-[#ba68c8] hover:bg-[#703e78] my-4 px-10 py-3 rounded text-lg font-semibold">
                Make Payment
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MakePayment;
