"use client";

import {
  MailsIcon,
  SettingsIcon,
  BriefcaseIcon,
  CircleUserIcon,
  MenuSquareIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useOrganization, useUser } from "@clerk/nextjs";

export default function SubNavbar() {
  const organization = useOrganization();

  const pathname = usePathname();

  const isAdmin = organization?.membership?.role === "org:admin";

  return (
    <div className="bg-white h-[52px] px-6 flex items-center border-b border-[#DEDEDE] gap-4">
      <Button
        asChild
        variant={pathname === "/" ? "navbarLinkSelected" : "navbarLink"}
      >
        <Link href="/" className="flex flex-row items-center gap-2">
          <LayoutDashboardIcon size={24} strokeWidth={1.5} />
          <span>Dashboard</span>
        </Link>
      </Button>

      <Button
        asChild
        variant={
          pathname === "/solicitudes" ? "navbarLinkSelected" : "navbarLink"
        }
      >
        <Link href="/solicitudes" className="flex flex-row items-center gap-2">
          <MailsIcon size={24} strokeWidth={1.5} />
          <span>Solicitudes</span>
        </Link>
      </Button>

      <Button
        asChild
        variant={
          pathname === "/formularios" ? "navbarLinkSelected" : "navbarLink"
        }
      >
        <Link href="/formularios" className="flex flex-row items-center gap-2">
          <MenuSquareIcon size={24} strokeWidth={1.5} />
          <span>Formularios</span>
        </Link>
      </Button>
      <Button
        asChild
        variant={
          pathname.includes("/entidades") ? "navbarLinkSelected" : "navbarLink"
        }
      >
        <Link href="/entidades" className="flex flex-row items-center gap-2">
          <BriefcaseIcon size={24} strokeWidth={1.5} />
          <span>Entidades</span>
        </Link>
      </Button>

      {isAdmin && (
        <Button
          asChild
          variant={
            pathname === "/settings" ? "navbarLinkSelected" : "navbarLink"
          }
        >
          <Link href="/settings" className="flex flex-row items-center gap-2">
            <SettingsIcon size={24} strokeWidth={1.5} />
            <span>Tablas</span>
          </Link>
        </Button>
      )}

      {isAdmin && (
        <Button
          asChild
          variant={
            pathname.includes("/users") ? "navbarLinkSelected" : "navbarLink"
          }
        >
          <Link href="/users" className="flex flex-row items-center gap-2">
            <CircleUserIcon size={24} strokeWidth={1.5} />
            <span>Administración de Usuarios</span>
          </Link>
        </Button>
      )}
    </div>
  );
}
