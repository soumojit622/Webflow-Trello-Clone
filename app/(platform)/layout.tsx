import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/components/providers/query-provider";
import { ModalProvider } from "@/components/providers/modal-provider";


const PlatformLayout = ({ children }: PropsWithChildren) => {
    return (
        <ClerkProvider
            appearance={{
                variables: {
                    colorPrimary: "#3b82f6",
                    colorText: "#000",
                },
                elements: {
                    card: "border-blue-500",
                    headerTitle: "text-blue-600",
                    buttonPrimary: "bg-blue-500 hover:bg-blue-600 text-white",
                    input: "focus:ring-blue-500 border-blue-300",
                },
            }}
        >
            <QueryProvider>
            <Toaster richColors />
            <ModalProvider />
            {children}
            </QueryProvider>
        </ClerkProvider>
    );
};

export default PlatformLayout;