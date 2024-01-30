import { useQuery } from "@tanstack/react-query";

const useUsers = () => {
  const { data: allUsers = [], refetch: refetchAllUsers } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/users`);
      return response.json();
    },
  });

  return [allUsers, refetchAllUsers];
};

export default useUsers;
