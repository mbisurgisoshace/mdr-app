interface FormRowProps {
  className?: string;
  children: React.ReactNode;
}

export default function FormRow({ className, children }: FormRowProps) {
  return (
    <div className={`w-full grid grid-cols-2 gap-4 ${className}`}>
      {children}
    </div>
  );
}
