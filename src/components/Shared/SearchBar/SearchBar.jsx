const SearchBar = () => {
  return (
    <>
      {" "}
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item text-sm lg:text-lg lg:w-[500px]"
              placeholder="Search by Language..........."
            />
          </div>
        </div>
        <div className="indicator">
          <button className="btn join-item bg-[#ba68c8] text-white lg:w-[100px] text-sm lg:text-lg">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
