import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider/AuthProvider";

// used react tanstack query

const useCourse = () => {
  // const {user, loading} = useContext(AuthContext)
  // const { user } = useContext(AuthContext);
  // console.log(user)
  const {
    data: courses = [], // initializing empty array
    refetch,
    // isPending,
    isLoading,
    isError,
  } = useQuery({
    // queryKey: ["course", user?.email],
    queryKey: ["course"],
    queryFn: async () => {
      // const res = await fetch("./courses.json");
      const res = await fetch(
        // `http://localhost:5000/courses?email=${user.email}`
        `http://localhost:5000/courses`
      );
      return res.json();
    },
  });
  return [courses, refetch, isLoading, isError];
};

export default useCourse;
