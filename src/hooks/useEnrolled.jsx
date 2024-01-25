import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useEnrolled = () => {
  const { user } = useContext(AuthContext);
  const { data: enrolledCourses = [], refetch: refetchEnrolledCourse } = useQuery({
    queryKey: ["enrolledCourses", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `http://localhost:5000/enrolledCourses?email=${user.email}`
      );
      return response.json();
    },
  });

  return [enrolledCourses, refetchEnrolledCourse];
};

export default useEnrolled;
