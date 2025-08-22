import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { ListContainer } from "./components/list-container";

type BoardIdPageProps = {
    params: Promise<{ boardId: string }>; // 👈 make params a Promise
};

const BoardIdPage = async ({ params }: BoardIdPageProps) => {
    const { boardId } = await params; // 👈 await the params
    const { orgId } = auth();

    if (!orgId) redirect("/select-org");

    const lists = await db.list.findMany({
        where: {
            boardId,
            board: {
                orgId,
            },
        },
        include: {
            cards: {
                orderBy: {
                    order: "asc",
                },
            },
        },
        orderBy: {
            order: "asc",
        },
    });

    return (
        <div className="p-4 h-full overflow-x-auto">
            <ListContainer boardId={boardId} data={lists} />
        </div>
    );
};

export default BoardIdPage;
