import { checkSubscription } from "@/lib/subscription";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Info } from "../components/info";
import { SubscriptionButton } from "./components/subscription-button";

const BillingPage = async () => {
    const isPro = await checkSubscription();

    return (
        <div className="w-full">
            {/* Info section */}
            <Info isPro={isPro} />

            <Separator className="my-6" />

            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
                <Image
                    src="/subscribe.png"
                    alt="Subscribe"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Subscription Button */}
            <div className="mt-6 w-full flex flex-col items-center sm:w-auto">
                <SubscriptionButton isPro={isPro} />

                {/* Optional footer text */}
                {!isPro && (
                    <p className="mt-4 text-center text-sm text-muted-foreground max-w-xs">
                        Upgrade to Pro to unlock all features, including unlimited boards,
                        advanced checklists, and enhanced admin controls.
                    </p>
                )}
            </div>

        </div>
    );
};

export default BillingPage;
