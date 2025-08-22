import { cn } from "@/lib/utils";
import { DM_Sans } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const headingFont = DM_Sans({
    subsets: ["latin"],
    weight: ["600", "700"],
});

type LogoProps = {
    isMobile?: boolean;
};

export const Logo = ({ isMobile }: LogoProps) => {
    return (
        <Link href="/" className="group">
            <div
                className={cn(
                    !isMobile && "hidden",
                    "flex items-center gap-x-3 transition-all duration-300"
                )}
            >
                {/* Logo Icon */}
                <div className="relative transition-transform duration-300 group-hover:scale-110">
                    <Image
                        src="/logo.svg"
                        alt="Webflow logo"
                        height={36}
                        width={36}
                        aria-hidden
                    />
                    {/* Decorative subtle background glow */}
                    <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-100 to-transparent opacity-0 group-hover:opacity-70 blur-md transition-opacity duration-500" />
                </div>

                {/* Brand Name + Tagline */}
                <div className="flex flex-col leading-none">
                    <p
                        className={cn(
                            "text-xl font-bold tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-neutral-700",
                            headingFont.className
                        )}
                    >
                        Webflow
                    </p>
                    <span className="text-xs text-neutral-500 group-hover:text-neutral-600 transition-colors duration-300">
                        Design • Build • Launch
                    </span>
                </div>
            </div>
        </Link>
    );
};
