import { useQuery } from "@tanstack/react-query";

const useCourse = () => {
  const {
    data: courses = [],
    refetch,
    isPending,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch("./courses.json");
      return res.json();
    },
  });
  return [courses, refetch, isPending, isLoading, isError];
};

export default useCourse;
