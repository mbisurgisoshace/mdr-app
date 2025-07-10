import { UserButton } from "@clerk/nextjs";

import OrgSwitcher from "@/components/OrgSwitcher";

export default function Navbar() {
  return (
    <div className="bg-white h-[64px] px-6 flex items-center justify-between border-b border-[#DEDEDE]">
      <div className="flex items-center justify-center gap-2">
        <OrgSwitcher />
        <div className="w-[1px] h-[30px] bg-[#DEDEDE]" />
        <h3 className="text-xl font-semibold">Modelo de Riesgo</h3>
      </div>
      <UserButton />
    </div>
  );
}
