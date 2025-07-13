import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "./ui/select";

interface SelectDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export default function SelectDropdown({
  value,
  options,
  onChange,
}: SelectDropdownProps) {
  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Seleccionar" />
      </SelectTrigger>
      <SelectContent className="w-full">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
