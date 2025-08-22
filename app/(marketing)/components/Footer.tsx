import Link from "next/link";
import { Logo } from "@/components/Logo";
import { buttonVariants } from "@/components/ui/button";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 w-full backdrop-blur-md bg-white/70 border-t border-white/40 shadow-lg">
            <div className="md:max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 py-3 px-4">

                {/* Logo */}
                <Logo />

                {/* Links */}
                <div className="flex items-center gap-4">
                    <Link
                        href="#"
                        className={`${buttonVariants({ size: "sm", variant: "ghost" })} text-slate-700 hover:text-slate-900 transition-all`}
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="#"
                        className={`${buttonVariants({ size: "sm", variant: "ghost" })} text-slate-700 hover:text-slate-900 transition-all`}
                    >
                        Terms of Service
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex items-center gap-3 text-slate-600">
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-pink-500 hover:text-pink-500 transition-all duration-300"
                    >
                        <FaInstagram size={14} />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/soumojit-banerjee-4914b3228"
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-blue-700 hover:text-blue-700 transition-all duration-300"
                    >
                        <FaLinkedinIn size={14} />
                    </Link>
                    <Link
                        href="https://github.com/soumojit622"
                        target="_blank"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-300 hover:border-gray-900 hover:text-gray-900 transition-all duration-300"
                    >
                        <FaGithub size={14} />
                    </Link>
                </div>
            </div>

            {/* Copyright / Made with Love */}
            {/* <div className="text-center text-xs text-slate-500 py-2 border-t border-slate-200">
                Made with ❤️ by <span className="font-medium text-slate-700">Soumojit Banerjee</span>
            </div> */}
        </footer>
    );
};
