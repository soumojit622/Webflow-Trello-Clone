import type { PropsWithChildren } from "react";
import { Navbar } from "./components/Navbar";


const DashboardLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="h-full">
            <Navbar />
            {children}
        </div>
    );
};

export default DashboardLayout;