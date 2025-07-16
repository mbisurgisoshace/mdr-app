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
import { Button } from "@/components/ui/button";
import SelectDropdown from "@/components/Select";
import Datepicker from "@/components/ui/datepicker";

import { paises } from "@/system_data/paises";
import { industrias } from "@/system_data/industrias";
import { tipoPersona } from "@/system_data/tipo_persona";
import { condicionIva } from "@/system_data/condicion_iva";
import { tipoRelacion } from "@/system_data/tipo_relacion";
import { tipoActividad } from "@/system_data/tipo_actividad";
import { actividadesAfip } from "@/system_data/actividades_afip";
import { tipoDocumentoAfip } from "@/system_data/tipo_documento_afip";

import { useFormStore } from "@/lib/zustand";
import { pagina1Schema, Pagina1FormData } from "./pagina1.schema";

interface Pagina1Props {
  codigoEntidad: string;
  siguiente: (data: Pagina1FormData) => void;
}

export default function Pagina1({ siguiente, codigoEntidad }: Pagina1Props) {
  const { formData } = useFormStore();

  const form = useForm<Pagina1FormData>({
    resolver: zodResolver(pagina1Schema),
    defaultValues: {
      ...formData,
      codigoEntidad,
    },
  });

  const onSubmit = (data: Pagina1FormData) => {
    console.log("Form data submitted:", data);
    siguiente(data);
  };

  console.log("formData:", formData);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <h1 className="text-center mb-1 font-bold text-[20px]">
          Información General
        </h1>
        <h3 className="text-center text-bold text-[14px]">
          A completar por Proveedores, Sponsors y Agentes Comerciales
        </h3>
        <FormRow>
          <FormField
            name="codigoEntidad"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo de Entidad</FormLabel>
                <FormControl>
                  <Input {...field} disabled />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="fecha"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha</FormLabel>
                <FormControl>
                  <Datepicker
                    align={"end"}
                    value={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <h1 className="text-primary font-bold text-[24px] text-center">
          DATOS GENERALES DE LAS PERSONAS (HUMANAS Y JURIDICAS)
        </h1>

        <FormRow>
          <FormField
            name="tipoRelacion"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="tipoActividad"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="tipoDocumentAfip"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="cuit"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de C.U.I.T. - C.U.I.L.</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="condicionIva"
            control={form.control}
            render={({ field }) => (
              <FormItem>
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
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="codigoActividadAfip"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Código y descripción de Actividad AFIP</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={actividadesAfip.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="tipoIndustria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Indique la industria a que corresponde su actividad
                </FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={industrias.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="tipoDePersona"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de Persona</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={tipoPersona.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="ingresosEnPesos"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ingresos en $ (sin centavos)</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="fechaCierrePesos"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de cierre</FormLabel>
                <FormControl>
                  <Datepicker
                    align={"end"}
                    value={field.value}
                    onSelect={field.onChange}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="direccion"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Direccion</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="ciudad"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ciudad</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="estado"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado / Provincia</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="codigoPostal"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Codigo Postal</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="pais"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pais</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={paises.map((option) => ({
                      value: option,
                      label: option,
                    }))}
                  />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="telefono"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número de teléfono</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email de contacto</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow>
          <FormField
            name="contactoAfa"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Persona de contacto en AFA</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>
        <Button type="submit" className="ml-auto">
          Siguiente
        </Button>
      </form>
    </Form>
  );
}
