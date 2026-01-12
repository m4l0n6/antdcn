"use client";

import * as React from "react";
import { HugeiconsIcon, HugeiconsIconProps } from "@hugeicons/react";
import { SearchForm } from "@/components/sidebar/search-form";
import { NavMain } from "@/components/sidebar/nav-main" ;
import { NavProjects } from "@/components/sidebar/nav-projects";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,    
  SidebarHeader,
  SidebarRail,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  DashboardSquare02Icon,
  BookOpenIcon,
  Settings05Icon,
  PieChartIcon,
  FramerIcon,
  MapsIcon,
  MaterialAndTextureIcon
} from "@hugeicons/core-free-icons";
import { usePathname } from "next/navigation";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  const pathname = usePathname();

  const addActiveState = (items: { title: string; url: string; icon?: HugeiconsIconProps["icon"]; items?: { title: string; url: string }[] }[]) => {
    return items.map((item) => ({
      ...item,
      isActive:
        item.url === "/"
          ? pathname === "/dashboard"
          : pathname.startsWith(item.url),  
      items: item.items
        ? item.items.map((subItem: { title: string; url: string }) => ({
            ...subItem,
            isActive: pathname === subItem.url,
          }))
        : undefined,
    }));
  };


  const navData = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    navMain: addActiveState([
      {
        title: "Dashboard",
        url: "/",
        icon: DashboardSquare02Icon,
      },
      {
        title: "Documentation",
        url: "/documentation",
        icon: BookOpenIcon,
        items: [
          {
            title: "Introduction",
            url: "/documentation/introduction",
          },
          {
            title: "Get Started",
            url: "#",
          },
          {
            title: "Tutorials",
            url: "#",
          },
          {
            title: "Changelog",
            url: "#",
          },
        ],
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings05Icon,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ]),
    projects: [
      {
        name: "Design Engineering",
        url: "#",
        icon: FramerIcon,
      },
      {
        name: "Sales & Marketing",
        url: "#",
        icon: PieChartIcon,
      },
      {
        name: "Travel",
        url: "#",
        icon: MapsIcon,
      },
    ],
  };
  
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex justify-center items-center bg-sidebar-primary rounded-lg size-8 aspect-square text-sidebar-primary-foreground">
            <HugeiconsIcon
              icon={MaterialAndTextureIcon}
              strokeWidth={2}
              className="size-4"
            />
          </div>
          <div className="flex-1 grid text-sm text-left leading-tight">
            <span className="font-medium text-lg">Antdcn</span>
          </div>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        {state === "expanded" && <SearchForm />}
        <NavMain items={navData.navMain} />
        <NavProjects projects={navData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={navData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
