import { isAdmin, onlyAdminPage } from "@/components/auth/auth";

export default async function EntidadesPage() {
  return (
    <div className="h-full bg-[#F4F4FA] flex flex-col">
      <h1 className="text-2xl font-bold p-4">Entidades Page</h1>
      <p className="p-4">This is the entidades page content.</p>
    </div>
  );
}
