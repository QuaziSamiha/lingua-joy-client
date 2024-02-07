import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";

const useCourse = () => {
  // const {user, loading} = useContext(AuthContext)
  const { user } = useContext(AuthContext);
  // console.log(user)
  const {
    data: courses = [],
    refetch,
    isPending,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course", user?.email],
    queryFn: async () => {
      // const res = await fetch("./courses.json");
      const res = await fetch(
        `http://localhost:5000/courses?email=${user.email}`
      );
      return res.json();
    },
  });
  return [courses, refetch, isPending, isLoading, isError];
};

export default useCourse;
