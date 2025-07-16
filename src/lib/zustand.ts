import { create } from "zustand";

import { Pagina1FormData } from "@/components/Formulario/Pagina1/pagina1.schema";
import { Pagina2FormData } from "@/components/Formulario/Pagina2/pagina2.schema";

type FormData = Pagina1FormData & Pagina2FormData;

interface FormStore {
  reset: () => void;
  formData: FormData;
  setFormData: (data: Partial<FormData>) => void;
}

export const useFormStore = create<FormStore>((set) => ({
  formData: {} as FormData,
  reset: () => set({ formData: {} as FormData }),
  setFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
}));
