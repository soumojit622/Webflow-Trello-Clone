import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { Github, LogIn, Sparkles } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full h-14 px-4 border-b bg-white/80 backdrop-blur-sm shadow-sm z-50">
            <div className="md:max-w-screen-2xl mx-auto flex items-center justify-between h-full">
                {/* Logo */}
                <Logo />

                {/* Actions */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/sign-in"
                        className={`${buttonVariants({ size: "sm", variant: "outline" })} hover:shadow-md transition-all flex items-center gap-1`}
                    >
                        <LogIn className="h-4 w-4" />
                        Login
                    </Link>

                    <Link
                        href="/sign-up"
                        className={`${buttonVariants({ size: "sm" })} hover:shadow-md transition-all flex items-center gap-1`}
                    >
                        <Sparkles className="h-4 w-4" />
                        Get Webflow for free
                    </Link>

                    <Link
                        href="https://github.com/sanidhyy/trello-clone"
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 hover:shadow transition-all"
                    >
                        <Github className="h-4 w-4 text-gray-700" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};
