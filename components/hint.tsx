import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

type HintProps = {
    children: React.ReactNode;
    description: string;
    align?: "center" | "start" | "end" | undefined;
    side?: "left" | "right" | "top" | "bottom";
    sideOffset?: number;
};

export const Hint = ({
    children,
    description,
    align,
    side = "bottom",
    sideOffset = 6,
}: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent
                    align={align}
                    sideOffset={sideOffset}
                    side={side}
                    className="text-xs max-w-[220px] break-words px-3 py-2 rounded-md shadow-md bg-white text-gray-700 border border-gray-200 animate-in fade-in-0 zoom-in-95"
                >
                    <span className="text-blue-500 font-medium"> Hint:</span>{" "}
                    {description}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};
