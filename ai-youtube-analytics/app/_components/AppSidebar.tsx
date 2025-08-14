import React from 'react'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BookType, Calendar, ChartNoAxesColumn, Gauge, Home, ImageIcon, Inbox, Lightbulb, Search, Settings, User2 } from "lucide-react"
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const items = [
    {
        title: "Home",
        url: "#",
        icon: Home,
    },
    {
        title: "Thunmbnail Generator",
        url: "#",
        icon: ImageIcon,
    },
    {
        title: "Keywords",
        url: "#",
        icon: BookType,
    },
    {
        title: "Potimize",
        url: "#",
        icon: ChartNoAxesColumn,
    },
    {
        title: "Outlier",
        url: "#",
        icon: Gauge,
    },
    {
        title: "AI Content Generator",
        url: "#",
        icon: Lightbulb,
    },
    {
        title: "Billing",
        url: "#",
        icon: Settings,
    },
    {
        title: "Profile",
        url: "#",
        icon: User2,
    },
]

export function AppSidebar() {
    const path = usePathname();
    return (
        <Sidebar>
               <SidebarHeader className="flex flex-col items-center py-4">
                <div className="flex items-center mr-14 -mt-4">
                    <Image
                        src="/logo.png" // your cropped logo image
                        alt="RankTube Logo"
                        width={80}
                        height={80}
                        className="object-contain"
                        priority
                    />
                    <h1 className="text-xl font-bold">
                        <span className="text-red-500">Rank</span>
                        <span className="text-black">Tube</span>
                    </h1>
                </div>
                {/* <p className="text-gray-500 text-xs">Build Awesome</p> */}
            </SidebarHeader>


            <SidebarContent>
                <SidebarGroup>

                    <SidebarGroupContent>
                        <SidebarMenu >
                            {items.map((item, index) => (
                                // <SidebarMenuItem key={item.title} className='p-2'>
                                //     <SidebarMenuButton asChild className=''>
                                <a href={item.url} key={index} className={`p-2 text-lg flex gap-2 items-center
                                 hover:bg-gray-100 rounded-lg ${path.includes(item.url) && 'bg-gray-200ß'}`}>
                                    <item.icon className='h-5 w-5' />
                                    <span>{item.title}</span>
                                </a>
                                //     </SidebarMenuButton>
                                // </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                {/* <h2 className='p-2 text-gray-400 text-sm'>Copyright @Tubeguruji</h2> */}
            </SidebarFooter>
        </Sidebar>
    )
}