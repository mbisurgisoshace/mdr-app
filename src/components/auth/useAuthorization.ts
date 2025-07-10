import { useOrganization } from "@clerk/nextjs";

export default function useAuthorization() {
  const organization = useOrganization();

  const isAdmin = organization?.membership?.role === "org:admin";

  return {
    isAdmin,
  };
}
