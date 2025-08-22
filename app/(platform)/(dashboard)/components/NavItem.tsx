"use client";

import { Activity, CreditCard, Layout, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
};

type NavItemProps = {
    isExpanded: boolean;
    isActive: boolean;
    organization: Organization;
    onExpand: (id: string) => void;
};

export const NavItem = ({
    isExpanded,
    isActive,
    organization,
    onExpand,
}: NavItemProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const routes = [
        {
            label: "Boards",
            icon: <Layout className="h-5 w-5 mr-2 text-blue-500" />,
            href: `/organization/${organization.id}`,
        },
        {
            label: "Activity",
            icon: <Activity className="h-5 w-5 mr-2 text-blue-500" />,
            href: `/organization/${organization.id}/activity`,
        },
        {
            label: "Settings",
            icon: <Settings className="h-5 w-5 mr-2 text-blue-500" />,
            href: `/organization/${organization.id}/settings`,
        },
        {
            label: "Billing",
            icon: <CreditCard className="h-5 w-5 mr-2 text-blue-500" />,
            href: `/organization/${organization.id}/billing`,
        },
    ];

    const onClick = (href: string) => router.push(href);

    return (
        <AccordionItem
            value={organization.id}
            className="border-none rounded-md hover:bg-gray-100 transition"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn(
                    "flex items-center gap-x-3 p-2 text-neutral-700 rounded-md hover:bg-neutral-100 transition-colors duration-200 cursor-pointer",
                    isActive && !isExpanded && "bg-sky-100 text-sky-700 font-semibold"
                )}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-8 h-8 relative shrink-0">
                        <Image
                            src={organization.imageUrl}
                            height={32}
                            width={32}
                            alt={`organization ${organization.name} logo`}
                            className="rounded-md object-cover"
                        />
                    </div>
                    <span className="font-medium text-sm truncate">{organization.name}</span>
                </div>
            </AccordionTrigger>

            <AccordionContent className="pt-2 text-neutral-700">
                {routes.map((route) => (
                    <Button
                        key={route.label}
                        size="sm"
                        onClick={() => onClick(route.href)}
                        className={cn(
                            "w-full font-normal justify-start pl-12 mb-1 rounded-md hover:bg-gray-200 hover:text-blue-600 transition-colors duration-200",
                            pathname === route.href && "bg-primary/10 text-primary font-semibold"
                        )}
                        variant="ghost"
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                ))}
            </AccordionContent>
        </AccordionItem>
    );
};

NavItem.Skeleton = function SkeletonNavItem() {
    return (
        <div className="flex items-center gap-x-3 p-2 animate-pulse">
            <div className="w-10 h-10 relative shrink-0 rounded-md bg-gray-200" />
            <div className="h-6 flex-1 rounded-md bg-gray-200" />
        </div>
    );
};
