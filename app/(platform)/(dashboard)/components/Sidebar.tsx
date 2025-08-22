"use client";

import {
    ClerkLoaded,
    ClerkLoading,
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs";
import { Layers, Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";

import { Accordion } from "@/components/ui/accordion";
import { buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";
import { NavItem, Organization } from "./NavItem";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

type SidebarProps = {
    storageKey?: string;
};

export const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {
    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
        storageKey,
        {}
    );

    const { organization: activeOrganization, isLoaded: isLoadedOrg } =
        useOrganization();
    const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });

    const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
        (acc: string[], key) => {
            if (expanded[key]) acc.push(key);
            return acc;
        },
        []
    );

    const onExpand = (id: string) => {
        setExpanded((curr) => ({
            ...curr,
            [id]: !expanded[id],
        }));
    };

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <ClerkLoading>
                <div className="flex items-center justify-between mb-3">
                    <Skeleton className="h-10 w-[60%] rounded-md" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                </div>
                <div className="space-y-3">
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                    <NavItem.Skeleton />
                </div>
            </ClerkLoading>
        );
    }

    return (
        <>
            <div className="flex items-center justify-between mb-4 px-3">
                <div className="flex items-center gap-1 font-semibold text-xs text-black uppercase tracking-wider">
                    <Layers className="h-4 w-4 text-black" />
                    <span>Workspaces</span>
                </div>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Link
                                href="/select-org"
                                className={cn(
                                    buttonVariants({
                                        size: "icon",
                                        variant: "ghost",
                                    }),
                                    "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full p-2 transition-all duration-200 ease-out hover:bg-blue-200 dark:hover:bg-blue-800 hover:scale-105 hover:shadow-md"
                                )}
                            >
                                <Plus className="h-4 w-4" />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                            <span>Create a new workspace</span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </div>

            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >
                <ClerkLoaded>
                    {userMemberships.data.map(({ organization }) => (
                        <NavItem
                            key={organization.id}
                            isActive={activeOrganization?.id === organization.id}
                            isExpanded={expanded[organization.id]}
                            organization={organization as Organization}
                            onExpand={onExpand}
                        />
                    ))}
                </ClerkLoaded>
            </Accordion>
        </>
    );
};
