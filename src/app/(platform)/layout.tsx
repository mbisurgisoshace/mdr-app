import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";
import Navbar from "./_components/Navbar";
import SubNavbar from "./_components/SubNavbar";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId, orgId } = await auth();
  const user = await currentUser();
  console.log("user", user);
  console.log("userId", userId);
  console.log("orgId", orgId);

  return (
    <div className="h-full bg-[#F4F4FA] flex flex-col">
      <Navbar />
      <SubNavbar />
      <div className="py-2 px-10 flex-1 h-[calc(100%-128px)] overflow-auto">
        {children}
      </div>
    </div>
  );
}
