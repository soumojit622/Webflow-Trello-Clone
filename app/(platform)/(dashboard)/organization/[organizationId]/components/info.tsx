"use client";

import { CreditCard } from "lucide-react";
import Image from "next/image";
import { ClerkLoaded, useOrganization } from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";

type InfoProps = {
    isPro: boolean;
};

export const Info = ({ isPro }: InfoProps) => {
    const { organization, isLoaded } = useOrganization();
    if (!isLoaded) return <Info.Skeleton />;

    return (
        <div className="flex items-center gap-x-5 p-5 rounded-2xl border bg-gradient-to-br from-white to-gray-50 shadow-md hover:shadow-lg transition-shadow">
            {/* Logo */}
            <div className="w-[70px] h-[70px] relative overflow-hidden rounded-xl ring-2 ring-blue-100">
                <ClerkLoaded>
                    <Image
                        src={organization?.imageUrl!}
                        alt={organization?.name!}
                        height={70}
                        width={70}
                        className="rounded-xl object-cover"
                    />
                </ClerkLoaded>
            </div>

            {/* Text Content */}
            <div className="space-y-2">
                <p className="font-semibold text-xl text-gray-900 tracking-tight">
                    {organization?.name}
                </p>

                <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4 text-blue-500" />
                    <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium transition ${isPro
                            ? "bg-blue-100 text-blue-700 shadow-sm"
                            : "bg-gray-100 text-gray-600"
                            }`}
                    >
                        {isPro ? "✨ Pro Plan" : "Free Plan"}
                    </span>
                </div>
            </div>
        </div>
    );
};

Info.Skeleton = function SkeletonInfo() {
    return (
        <div className="flex items-center gap-x-5 p-5 rounded-2xl border bg-gradient-to-br from-white to-gray-50 shadow-md">
            {/* Logo Placeholder */}
            <div className="w-[70px] h-[70px] relative rounded-xl overflow-hidden">
                <Skeleton className="w-full h-full" />
            </div>

            {/* Text Placeholder */}
            <div className="space-y-3 w-full">
                <Skeleton className="h-5 w-44 rounded-md" />
                <div className="flex items-center gap-x-3">
                    <Skeleton className="h-4 w-4 rounded-full" />
                    <Skeleton className="h-4 w-24 rounded-md" />
                </div>
            </div>
        </div>
    );
};
