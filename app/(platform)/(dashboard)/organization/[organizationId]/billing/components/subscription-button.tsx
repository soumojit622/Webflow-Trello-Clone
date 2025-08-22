"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { stripeRedirect } from "@/actions/stripe-redirect";
import { Loader2, CreditCard } from "lucide-react";

type SubscriptionButtonProps = {
    isPro: boolean;
};

export const SubscriptionButton = ({ isPro }: SubscriptionButtonProps) => {
    const proModal = useProModal();

    const { execute, isLoading } = useAction(stripeRedirect, {
        onSuccess: (data) => {
            toast.dismiss();
            window.location.href = data;
        },
        onError: (error) => toast.error(error),
    });

    const onClick = () => {
        if (isPro) {
            execute({});
            toast.loading("Redirecting...");
        } else {
            proModal.onOpen();
        }
    };

    return (
        <Button
            onClick={onClick}
            disabled={isLoading}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition
        ${isPro ? "bg-gray-800 hover:bg-gray-900 text-white" : "bg-blue-600 hover:bg-blue-700 text-white"}
      `}
        >
            {isLoading && <Loader2 className="animate-spin h-4 w-4 text-white" />}
            {isPro ? (
                <>
                    <CreditCard className="h-4 w-4" />
                    Manage subscription
                </>
            ) : (
                <>
                    <CreditCard className="h-4 w-4" />
                    Upgrade to Pro
                </>
            )}
        </Button>
    );
};
