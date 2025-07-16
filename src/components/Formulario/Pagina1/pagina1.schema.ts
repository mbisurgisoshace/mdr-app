import z from "zod";

import { paises } from "@/system_data/paises";
import { industrias } from "@/system_data/industrias";
import { tipoPersona } from "@/system_data/tipo_persona";
import { tipoRelacion } from "@/system_data/tipo_relacion";
import { condicionIva } from "@/system_data/condicion_iva";
import { tipoActividad } from "@/system_data/tipo_actividad";
import { actividadesAfip } from "@/system_data/actividades_afip";
import { tipoDocumentoAfip } from "@/system_data/tipo_documento_afip";

export const pagina1Schema = z.object({
  codigoEntidad: z.string({ required_error: "Código de entidad es requerido" }),
  fecha: z.date({ required_error: "Fecha es requerido" }),
  tipoRelacion: z.enum(tipoRelacion, {
    required_error: "Tipo de relación es requerido",
  }),
  tipoActividad: z.enum(tipoActividad, {
    required_error: "Tipo de actividad es requerido",
  }),
  tipoDocumentAfip: z.enum(tipoDocumentoAfip, {
    required_error: "Tipo de documento AFIP es requerido",
  }),
  cuit: z.string({ required_error: "CUIT/CUIL es requerido" }),
  condicionIva: z.enum(condicionIva, {
    required_error: "Tipo responsable frente AFIP es requerido",
  }),
  codigoActividadAfip: z.enum(actividadesAfip, {
    required_error: "Código de actividad AFIP es requerido",
  }),
  tipoIndustria: z.enum(industrias, {
    required_error: "Tipo de industria es requerido",
  }),
  ingresosEnPesos: z.coerce
    .number({ required_error: "Ingresos en pesos es requerido" })
    .positive("Ingresos en pesos deben ser un número positivo"),
  fechaCierrePesos: z.date({
    required_error: "Fecha de cierre en pesos es requerido",
  }),
  tipoDePersona: z.enum(tipoPersona, {
    required_error: "Tipo de persona es requerido",
  }),
  direccion: z.string({ required_error: "Dirección es requerido" }),
  ciudad: z.string({ required_error: "Ciudad es requerido" }),
  estado: z.string({ required_error: "Provincia es requerido" }),
  codigoPostal: z.string({ required_error: "Codigo postal es requerido" }),
  pais: z.enum(paises, { required_error: "País es requerido" }),
  telefono: z.string({ required_error: "Teléfono es requerido" }),
  email: z
    .string()
    .min(1, "Mail es requerido")
    .email("El mail debe ser válido"),
  contactoAfa: z.string({ required_error: "Contacto AFA es requerido" }),
});

export type Pagina1FormData = z.infer<typeof pagina1Schema>;
