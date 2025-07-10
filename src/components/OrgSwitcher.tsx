"use client";

import Image from "next/image";
import { ChevronsUpDown } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

export default function OrgSwitcher() {
  const { organization, isLoaded } = useOrganization();
  const { userMemberships, setActive } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const setActiveOrg = (organization: any) => {
    if (setActive) {
      setActive({
        organization,
        redirectUrl: "/",
      });
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="lg"
          variant={"outline"}
          disabled={!isLoaded}
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
            {isLoaded ? (
              organization && organization.imageUrl ? (
                <Image
                  width={32}
                  height={32}
                  src={organization.imageUrl}
                  alt="Organization Image"
                />
              ) : (
                <Skeleton className="h-8 w-8 rounded-lg" />
              )
            ) : (
              <Skeleton className="h-8 w-8 rounded-lg" />
            )}
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            {isLoaded ? (
              <span className="truncate font-medium w-36">
                {organization?.name}
              </span>
            ) : (
              <Skeleton className="h-[17.5px] w-36" />
            )}
            <span className="truncate text-xs">Club</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
        align="start"
        //side={isMobile ? "bottom" : "right"}
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-muted-foreground text-xs">
          Clubes
        </DropdownMenuLabel>
        {userMemberships.data?.map((membership) => (
          <DropdownMenuItem
            key={membership.organization.id}
            onClick={() => setActiveOrg(membership.organization)}
            className="gap-2 p-2"
          >
            <div className="flex size-6 items-center justify-center rounded-md border">
              <Image
                width={32}
                height={32}
                src={membership.organization.imageUrl}
                alt="Organization Image"
              />
            </div>
            {membership.organization.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
