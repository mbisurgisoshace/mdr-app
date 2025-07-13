import z from "zod";

import { tipoRelacion } from "@/system_data/tipo_relacion";
import { condicionIva } from "@/system_data/condicion_iva";
import { tipoActividad } from "@/system_data/tipo_actividad";
import { tipoDocumentoAfip } from "@/system_data/tipo_documento_afip";

export const pagina1Schema = z.object({
  fecha: z.date(),
  fechaCierrePesos: z.date(),
  condicionIva: z.enum(condicionIva),
  tipoRelacion: z.enum(tipoRelacion),
  email: z
    .string()
    .min(1, "El email es requerido")
    .email("El email debe ser válido"),
  tipoActividad: z.enum(tipoActividad),
  tipoDocumentAfip: z.enum(tipoDocumentoAfip),
  pais: z.string().min(1, "El país es requerido"),
  ciudad: z.string().min(1, "La ciudad es requerida"),
  cuit: z.string().min(1, "El CUIT/CUIL es requerido"),
  codigoActividadAfip: z
    .string()
    .min(1, "El código de actividad AFIP es requerido"),
  estado: z.string().min(1, "La provincia es requerida"),
  telefono: z.string().min(1, "El teléfono es requerido"),
  direccion: z.string().min(1, "La dirección es requerida"),
  ingresosEnPesos: z.coerce
    .number()
    .min(0, "Los ingresos en pesos deben ser un número positivo"),
  codigoPostal: z.string().min(1, "El código postal es requerido"),
  contactoAfa: z.string().min(1, "El contacto de AFA es requerido"),
  tipoDePersona: z.string().min(1, "El tipo de persona es requerido"),
  codigoEntidad: z.string().min(1, "El código de entidad es requerido"),
  tipoIndustria: z.string().min(1, "El tipo de industria es requerido"),
});

export type Pagina1FormData = z.infer<typeof pagina1Schema>;
