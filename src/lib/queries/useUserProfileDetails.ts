import { useQuery } from "@tanstack/react-query";

export function useUserProfileDetails(userId: string, companyId: string) {
  return useQuery({
    queryKey: ["userProfileDetails", userId],
    queryFn: async () => {
      const response = await fetch("/api/users/user-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, companyId }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to fetch user profile details");
      }
      
      return response.json();
    },
    enabled: !!userId,
  });
}
