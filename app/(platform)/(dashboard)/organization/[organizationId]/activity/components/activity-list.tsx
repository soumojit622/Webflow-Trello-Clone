import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { Skeleton } from "@/components/ui/skeleton";
import { ActivityItem } from "@/components/activity-item";
import { db } from "@/lib/db";

export const ActivityList = async () => {
    const { orgId } = auth();

    if (!orgId) return redirect("/select-org");

    const auditLogs = await db.auditLog.findMany({
        where: { orgId },
        orderBy: { createdAt: "desc" },
    });

    return (
        <ol className="space-y-4 mt-6">
            {auditLogs.length === 0 && (
                <li className="flex flex-col items-center justify-center py-16 text-center space-y-3">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-200">
                        <svg
                            className="w-7 h-7 text-red-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 2h6a2 2 0 012 2v2h2a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2h2V4a2 2 0 012-2zM9 2v2h6V2M9 12h6M9 16h6"
                            />
                        </svg>
                    </div>
                    <p className="text-base font-semibold text-gray-800">
                        No activity yet
                    </p>
                    <p className="text-sm text-gray-500 max-w-xs">
                        Actions performed within this organization will appear here. Start by creating a board, list, or card.
                    </p>
                </li>

            )}

            {auditLogs.map((log) => (
                <ActivityItem key={log.id} data={log} />
            ))}
        </ol>
    );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
    return (
        <ol className="space-y-4 mt-6">
            {[...Array(5)].map((_, i) => (
                <li key={i} className="flex items-center gap-x-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                        <Skeleton className="w-[60%] h-4 rounded-md" />
                        <Skeleton className="w-[40%] h-3 rounded-md" />
                    </div>
                </li>
            ))}
        </ol>
    );
};
