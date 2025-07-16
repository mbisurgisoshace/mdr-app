"use client";

import { useEffect, useState } from "react";

import Pagina1 from "./Pagina1";
import Pagina2 from "./Pagina2";
import Pagina3 from "./Pagina3";

import { useFormStore } from "@/lib/zustand";
import { Pagina1FormData } from "./Pagina1/pagina1.schema";
import { Pagina2FormData } from "./Pagina2/pagina2.schema";

interface FormularioProps {
  entidadId: string;
}

export default function Formulario({ entidadId }: FormularioProps) {
  const [pagina, setPagina] = useState(0);
  const { formData, setFormData } = useFormStore();

  const handlePaginaAnterior = () => {
    setPagina((prev) => prev - 1);
  };
  const handlePaginaSiguiente = (data: Pagina1FormData | Pagina2FormData) => {
    const updatedData = { ...formData, ...data };
    setFormData(updatedData);
    setPagina((prev) => prev + 1);
  };

  const paginas = [
    <Pagina1
      key="pagina1"
      codigoEntidad={entidadId}
      siguiente={handlePaginaSiguiente}
    />,
    <Pagina2
      key="pagina2"
      anterior={handlePaginaAnterior}
      siguiente={handlePaginaSiguiente}
    />,
    <Pagina3 key="pagina3" />,
  ];

  return (
    <div className="max-w-[950px] mx-auto p-10 bg-white shadow-md rounded-md">
      {paginas[pagina]}
    </div>
  );
}
