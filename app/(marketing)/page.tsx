import { ArrowRight, Medal } from "lucide-react";
import { DM_Sans, Noto_Serif } from "next/font/google";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const headingFont = Noto_Serif({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
});

const textFont = DM_Sans({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
});

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div
                className={cn(
                    "flex items-center justify-center flex-col",
                    headingFont.className
                )}
            >
                <div className="mb-6 flex items-center gap-3 rounded-full bg-amber-200/80 px-5 py-2 shadow-md border border-amber-300 uppercase font-semibold tracking-wider text-amber-800 select-none">
                    <Medal className="h-6 w-6 text-amber-600" />
                    <span>#1 in Task Management</span>
                </div>

                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6">
                    Webflow keeps teams moving
                </h1>

                <div className="text-3xl md:text-6xl text-white px-6 py-3 rounded-md pb-4 w-fit animate-gradientShift">
                    toward their goals.
                </div>

            </div>

            <div
                className={cn(
                    "text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto",
                    textFont.className
                )}
            >
                Plan, collaborate, and deliver—anytime, anywhere.
            </div>

            <Link
                href="/sign-up"
                className={cn(buttonVariants({ size: "lg" }), "mt-6 flex items-center gap-2")}
            >
                Try Webflow Free
                <ArrowRight className="w-5 h-5" />
            </Link>
        </div>
    );
};

export default MarketingPage;
