export default function FormRow({ children }: { children: React.ReactNode }) {
  return <div className="w-full grid grid-cols-2 gap-4">{children}</div>;
}
