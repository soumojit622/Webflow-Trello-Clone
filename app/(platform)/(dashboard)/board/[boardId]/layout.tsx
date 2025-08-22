import { notFound, redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { BoardNavbar } from "./components/board-navbar";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ boardId: string }>; // 👈 params is a Promise
};

// ✅ Generate metadata with async params
export async function generateMetadata({ params }: LayoutProps) {
  const { boardId } = await params; // 👈 await here
  const { orgId } = auth();

  if (!orgId) return { title: "Board" };

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  return {
    title: board?.title || "Board",
  };
}

const BoardIdLayout = async ({ children, params }: LayoutProps) => {
  const { boardId } = await params; // 👈 await here
  const { orgId } = auth();

  if (!orgId) redirect("/select-org");

  const board = await db.board.findUnique({
    where: {
      id: boardId,
      orgId,
    },
  });

  if (!board) notFound();

  return (
    <div
      style={{ backgroundImage: `url(${board.imageFullUrl})` }}
      className="relative h-full bg-no-repeat bg-cover bg-center"
    >
      <BoardNavbar data={board} />
      <div
        aria-hidden
        className="absolute inset-0 bg-black/10"
      />
      <main className="relative pt-28 h-full">{children}</main>
    </div>
  );
};

export default BoardIdLayout;
