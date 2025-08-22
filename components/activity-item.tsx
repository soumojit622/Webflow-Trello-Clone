import { format } from "date-fns";
import { AuditLog } from "@prisma/client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { generateLogMessage } from "@/lib/generate-log-messages";

type ActivityItemProps = {
    data: AuditLog;
};

export const ActivityItem = ({ data }: ActivityItemProps) => {
    return (
        <li className="flex items-start gap-x-3 py-2 hover:bg-gray-50 rounded-md transition">
            <Avatar className="h-10 w-10 shrink-0 ring-1 ring-gray-200">
                <AvatarImage src={data.userImage} alt={data.userName} />
            </Avatar>

            <div className="flex flex-col">
                <p className="text-sm leading-snug text-gray-800">
                    <span className="font-semibold">{data.userName}</span>{" "}
                    <span className="text-gray-600">{generateLogMessage(data)}</span>
                </p>

                <p className="text-xs text-gray-400 mt-0.5">
                    {format(new Date(data.createdAt), "MMM d, yyyy 'at' h:mm a")}
                </p>
            </div>
        </li>
    );
};
