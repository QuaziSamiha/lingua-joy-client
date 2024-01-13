import Banner from "../../../components/Banner/Banner";
import useCourse from "../../../hooks/useCourse";

function Courses() {
  const [courses, refetch, isPending, isLoading, isError] = useCourse();
  console.log(courses);
  return (
    <>
      <Banner />
      <section className="border border-red-600 w-[1180px] mx-auto my-24">
        <div className="flex justify-center my-8">
          <div className="">
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
                <span className="indicator-item badge badge-secondary">
                  new
                </span>
                <button className="btn join-item bg-[#ba68c8] text-white w-[100px] text-lg">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Courses;
