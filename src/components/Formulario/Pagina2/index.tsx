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
import Datepicker from "@/components/ui/datepicker";

import { Pagina2FormData, pagina2Schema } from "./pagina2.schema";
import { Button } from "@/components/ui/button";
import SelectDropdown from "@/components/Select";
import { tipoCuentasBancarias } from "@/system_data/tipo_cuenta_bancaria";
import { paises } from "@/system_data/paises";

interface Pagina2Props {
  anterior: () => void;
  siguiente: (data: Pagina2FormData) => void;
}

export default function Pagina2({ anterior, siguiente }: Pagina2Props) {
  const form = useForm<Pagina2FormData>({
    resolver: zodResolver(pagina2Schema),
  });

  const onSubmit = (data: Pagina2FormData) => {
    console.log("Form data submitted:", data);
    siguiente(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-8"
      >
        <h1 className="text-primary font-bold text-[24px] text-center">
          IDENTIFICACION BANCARIA PARA GESTION DE PAGOS
        </h1>
        <FormRow>
          <FormField
            name="titularCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del titular de la cuenta</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="bancoCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre del Banco</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <FormRow className="grid-cols-3">
          <FormField
            name="sucursalCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Sucursal</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="numeroCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numero de la cuenta</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="tipoCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo de cuenta</FormLabel>
                <FormControl>
                  <SelectDropdown
                    value={field.value}
                    onChange={field.onChange}
                    options={tipoCuentasBancarias.map((option) => ({
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

        <FormRow className="grid-cols-3">
          <FormField
            name="cbu"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>CBU</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="alias"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alias</FormLabel>
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
            name="iban"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Tiene cuentas bancarias fuera de la Argentina
                </FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="tipoCuentaBancaria"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  País donde tiene la cuenta para operar con AFA
                </FormLabel>
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

        <FormRow className="grid-cols-3">
          <FormField
            name="iban"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>IBAN</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />

          <FormField
            name="swift"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>SWIFT</FormLabel>
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
            name="bancoCorresponsal"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormLabel>Banco corresponsal</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage className="text-xs font-semibold" />
              </FormItem>
            )}
          />
        </FormRow>

        <div className="flex justify-between">
          <Button type="button" variant={"outline"} onClick={anterior}>
            Atras
          </Button>
          <Button type="submit">Siguiente</Button>
        </div>
      </form>
    </Form>
  );
}
