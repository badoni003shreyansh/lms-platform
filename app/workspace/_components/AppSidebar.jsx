"use client";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu,
} from "@/components/ui/sidebar";
import {
  Book,
  LayoutDashboard,
  LibraryBig,
  PencilRulerIcon,
  Search,
  UserCircle2Icon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddNewCourseDialog from "./AddNewCourseDialog";

const SideBarOptions = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/workspace",
  },
  {
    title: "My Learning",
    icon: Book,
    path: "/workspace/my-courses",
  },
  {
    title: "Explore Courses",
    icon: Search,
    path: "/workspace/explore",
  },
  {
    title: "AI Tools",
    icon: PencilRulerIcon,
    path: "/workspace/ai-tools",
  },
  {
    title: "Profile",
    icon: UserCircle2Icon,
    path: "/workspace/profile",
  },
];
export function AppSidebar() {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className={`p-4`}>
        <LibraryBig />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button>Create New Course</Button>
          </AddNewCourseDialog>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SideBarOptions.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={"p-4"}>
                    <Link
                      href={item.path}
                      className={`text-[17px] ${
                        path.includes(item.path) && "text-primary bg-gray-300"
                      }`}
                    >
                      <item.icon className="mr-2 h-7 w-7" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
