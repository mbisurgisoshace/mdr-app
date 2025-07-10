import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function isAdmin() {
  const { orgRole } = await auth();

  return orgRole === "org:admin";
}

export async function onlyAdminPage() {
  const isAdminUser = await isAdmin();

  if (!isAdminUser) {
    return redirect("/");
  }
}
