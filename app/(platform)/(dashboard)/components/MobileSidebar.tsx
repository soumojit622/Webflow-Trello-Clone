"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";
import { Logo } from "@/components/Logo";
import { Sidebar } from "./Sidebar";

export const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMounted) return null;

    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
                variant="secondary"
                size="sm"
            >
                <Menu className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </Button>

            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent
                    side="left"
                    className="p-4 pt-10 w-72 bg-white dark:bg-gray-900 shadow-lg border-r border-gray-200 dark:border-gray-800 transition-transform duration-300"
                >
                    <SheetHeader className="mb-6">
                        <SheetTitle>
                            <div className="flex items-center justify-between">
                                <Logo isMobile />
                            </div>
                        </SheetTitle>
                    </SheetHeader>

                    <Sidebar storageKey="t-sidebar-mobile-state" />
                </SheetContent>
            </Sheet>
        </>
    );
};
