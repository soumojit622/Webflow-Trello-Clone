import {
    ClerkLoaded,
    ClerkLoading,
    OrganizationSwitcher,
    UserButton,
} from "@clerk/nextjs";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

import { Logo } from "@/components/Logo";
import { MobileSidebar } from "./MobileSidebar";

export const Navbar = () => {
    return (
        <nav className="fixed z-50 top-0 w-full px-4 h-14 border-b shadow-md bg-white backdrop-blur-sm flex items-center">
            <MobileSidebar />
            <div className="flex items-center gap-x-4">
                <div className="hidden md:flex">
                    <Logo />
                </div>

                {/* <FormPopover align="start" side="bottom" sideOffset={18}> */}
                <Button
                    className="rounded-md md:flex md:gap-x-1 h-auto py-1.5 px-3 bg-gradient-to-tr from-primary via-primary/80 to-primary/70 text-white shadow hover:brightness-105 transition-all duration-300"
                >
                    <Plus className="h-4 w-4" />
                    <span className="hidden md:block">Create</span>
                </Button>
                {/* </FormPopover> */}
            </div>

            <div className="ml-auto flex items-center gap-x-3">
                <ClerkLoading>
                    <Skeleton className="h-10 w-40 rounded-lg" />
                    <Skeleton className="h-10 w-10 rounded-full" />
                </ClerkLoading>
                <ClerkLoaded>
                    <OrganizationSwitcher
                        hidePersonal
                        afterCreateOrganizationUrl="/organization/:id"
                        afterLeaveOrganizationUrl="/select-org"
                        afterSelectOrganizationUrl="/organization/:id"
                        appearance={{
                            elements: {
                                rootBox: {
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    gap: "0.5rem",
                                    padding: "0.25rem 0.5rem",
                                    borderRadius: "0.5rem",
                                    backgroundColor: "rgba(243, 244, 246, 0.8)",
                                    backdropFilter: "blur(4px)",
                                },
                            },
                        }}
                    />
                    <UserButton
                        afterSignOutUrl="/"
                        appearance={{
                            elements: {
                                avatarBox: {
                                    height: 36,
                                    width: 36,
                                    borderRadius: "50%",
                                    border: "2px solid #E5E7EB",
                                },
                                loaderIcon: {
                                    display: "block",
                                },
                            },
                        }}
                    />
                </ClerkLoaded>
            </div>
        </nav>
    );
};
