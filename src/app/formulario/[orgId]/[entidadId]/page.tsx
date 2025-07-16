import Formulario from "@/components/Formulario";

export default async function FormularioPage({
  params,
}: {
  params: Promise<{ orgId: string; entidadId: string }>;
}) {
  const { orgId, entidadId } = await params;

  return (
    <div className="bg-gray-300 w-full h-full p-10 overflow-y-scroll">
      <Formulario entidadId={entidadId} />
    </div>
  );
}
