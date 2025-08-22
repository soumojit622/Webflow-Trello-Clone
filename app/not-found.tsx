import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12 text-center">
            <h1 className="text-9xl font-extrabold text-gray-200 select-none">404</h1>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
                Oops! Page not found.
            </h2>

            <p className="mt-2 text-gray-500 max-w-md">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <p className="mt-2 text-gray-500 max-w-md">
                Try searching for what you need below, or head back to the homepage.
            </p>

            <div className="mt-8 flex max-w-md w-full mx-auto">
                <div className="relative flex-grow">
                    <input
                        type="text"
                        placeholder="Search for topics, pages, or help..."
                        className="w-full rounded-l-md border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                    <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                </div>

                <Link
                    href="/"
                    className="ml-3 inline-flex items-center rounded-r-md bg-primary px-5 py-3 text-white font-semibold shadow-md hover:bg-primary-dark transition"
                >
                    Go Home
                </Link>
            </div>

            <div className="mt-10 max-w-md text-left text-gray-600">
                <h3 className="text-lg font-semibold mb-2">Helpful Links:</h3>
                <ul className="list-disc list-inside space-y-1">
                    <li>
                        <Link href="/" className="text-primary hover:underline">
                            Homepage
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="text-primary hover:underline">
                            Contact Support
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className="text-primary hover:underline">
                            FAQ
                        </Link>
                    </li>
                    <li>
                        <Link href="/blog" className="text-primary hover:underline">
                            Blog & Resources
                        </Link>
                    </li>
                </ul>
            </div>

            <p className="mt-12 text-sm text-gray-400 select-none">
                &copy; {new Date().getFullYear()} Webflow. All rights reserved.
            </p>
        </div>
    );
};

export default NotFound;
