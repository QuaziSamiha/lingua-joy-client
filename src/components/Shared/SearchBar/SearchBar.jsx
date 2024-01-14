const SearchBar = () => {
  return (
    <>
      {" "}
      <div className="join">
        <div>
          <div>
            <input
              className="input input-bordered join-item w-[500px]"
              placeholder="Search by Language..........."
            />
          </div>
        </div>
        <div className="indicator">
          <span className="indicator-item badge badge-secondary">new</span>
          <button className="btn join-item bg-[#ba68c8] text-white w-[100px] text-lg">
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
