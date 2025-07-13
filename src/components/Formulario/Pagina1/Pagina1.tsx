"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormItem,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import FormRow from "../FormRow";
import { Input } from "@/components/ui/input";

import { pagina1Schema, Pagina1FormData } from "./pagina1.schema";
import Datepicker from "@/components/ui/datepicker";
import SelectDropdown from "@/components/Select";
import { tipoRelacion } from "@/system_data/tipo_relacion";
import { tipoActividad } from "@/system_data/tipo_actividad";
import { tipoDocumentoAfip } from "@/system_data/tipo_documento_afip";
import { condicionIva } from "@/system_data/condicion_iva";

export default function Pagina1() {
  const form = useForm<Pagina1FormData>({
    resolver: zodResolver(pagina1Schema),
  });

  const onSubmit = (data: Pagina1FormData) => {
    console.log("Form data submitted:", data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormRow>
          <FormField
            name="codigoEntidad"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Codigo de Entidad</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="fecha"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Fecha</FormLabel>
                <FormControl>
                  <Datepicker
                    align={"end"}
                    value={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="tipoRelacion"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tipo de Relación</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={tipoRelacion.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="tipoActividad"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tipo de Actividad</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={tipoActividad.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="tipoDocumentAfip"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>C.U.I.T. / C.U.I.L.</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={tipoDocumentoAfip.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="cuit"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Número de C.U.I.T. - C.U.I.L.</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="condicionIva"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Tipo Responsable frente AFIP</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={condicionIva.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="condicionIva"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Código y descripción de Actividad AFIP</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={condicionIva.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="condicionIva"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Código y descripción de Actividad AFIP</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={condicionIva.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="ingresosEnPesos"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Ingresos en $ (sin centavos)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="fechaCierrePesos"
            control={form.control}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Fecha de cierre</FormLabel>
                <FormControl>
                  <Datepicker
                    align={"end"}
                    value={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </FormRow>
      </form>
    </Form>
  );
}
