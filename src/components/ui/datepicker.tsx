import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Calendar } from "./calendar";

interface DatepickerProps {
  value: Date | undefined;
  onSelect: (date?: Date) => void;
  align?: "start" | "center" | "end";
}

export default function Datepicker({
  value,
  align = "start",
  onSelect,
}: DatepickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full pl-3 text-left font-normal",
            !value && "text-muted-foreground"
          )}
        >
          {value ? format(value, "PPP") : <span>Seleccionar fecha</span>}
          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align={align}>
        <Calendar
          mode="single"
          selected={value}
          onSelect={onSelect}
          captionLayout="dropdown"
        />
      </PopoverContent>
    </Popover>
  );
}
