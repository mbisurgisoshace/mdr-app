import { tipoCuentasBancarias } from "@/system_data/tipo_cuenta_bancaria";
import z from "zod";

export const pagina2Schema = z.object({
  titularCuentaBancaria: z.string({
    required_error: "Titular de la cuenta bancaria es requerido",
  }),
  bancoCuentaBancaria: z.string({
    required_error: "Banco de la cuenta bancaria es requerido",
  }),
  sucursalCuentaBancaria: z.string({
    required_error: "Sucursal de la cuenta bancaria es requerido",
  }),
  numeroCuentaBancaria: z.string({
    required_error: "Número de cuenta bancaria es requerido",
  }),
  tipoCuentaBancaria: z.enum(tipoCuentasBancarias, {
    required_error: "Tipo de cuenta bancaria es requerido",
  }),
  cbu: z.string({
    required_error: "CBU es requerido",
  }),
  alias: z.string().optional(),
  iban: z.string({ required_error: "IBAN es requerido" }),
  swift: z.string({
    required_error: "SWIFT es requerido",
  }),
  bancoCorresponsal: z.string({
    required_error: "Banco corresponsal es requerido",
  }),
});

export type Pagina2FormData = z.infer<typeof pagina2Schema>;
