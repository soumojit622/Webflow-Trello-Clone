import { auth } from "@clerk/nextjs";
import Link from "next/link";
import { redirect } from "next/navigation";
import { HelpCircle, User2 } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";
import { FormPopover } from "@/components/form/form-popover";
import { db } from "@/lib/db";
import { MAX_FREE_BOARDS } from "@/constants/boards";
import { getAvailableCount } from "@/lib/org-limit";
import { checkSubscription } from "@/lib/subscription";
import { Hint } from "@/components/hint";

export const BoardList = async () => {
  const { orgId } = auth();

  if (!orgId) return redirect("/select-org");

  const boards = await db.board.findMany({
    where: { orgId },
    orderBy: { createdAt: "desc" },
  });

  const availableCount = await getAvailableCount();
  const isPro = await checkSubscription();

  const remainingBoards = MAX_FREE_BOARDS - availableCount;

  return (
    <div className="space-y-4">
      {/* Title with blue icon */}
      <div className="flex items-center font-semibold text-lg text-neutral-700">
        <User2 className="h-6 w-6 mr-2 text-blue-500" />
        Your boards
      </div>

      {/* Boards grid */}
      <div className="grid grid-cols-2 cursor-pointer sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {boards.map((board) => (
          <Link
            key={board.id}
            href={`/board/${board.id}`}
            style={{ backgroundImage: `url(${board.imageThumbUrl})` }}
            className="group relative aspect-video bg-no-repeat bg-center bg-cover bg-sky-700 rounded-md h-full w-full p-2 overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"
            />
            <p className="relative font-semibold text-white">{board.title}</p>
          </Link>
        ))}

        {/* Create new board card */}
        <FormPopover sideOffset={10} side="right">
          <div
            role="button"
            className="relative aspect-video h-full w-full bg-muted rounded-md flex flex-col gap-y-1 items-center justify-center hover:opacity-80 transition shadow-sm hover:shadow-md"
          >
            <p className="text-sm font-medium text-neutral-700">
              Create new board
            </p>
            <span className="text-xs text-neutral-500">
              {isPro ? "Unlimited" : `${remainingBoards} remaining`}
            </span>
            <Hint
              align="start"
              sideOffset={1}
              description="Free workspaces can have up to 5 boards. Upgrade for unlimited boards."
            >
              <HelpCircle className="absolute bottom-2 right-2 h-[14px] w-[14px] text-blue-500" />
            </Hint>
          </div>
        </FormPopover>
      </div>
    </div>
  );
};

BoardList.Skeleton = function SkeletonBoardList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4">
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
      <Skeleton className="aspect-video h-full w-full p-2" />
    </div>
  );
};
