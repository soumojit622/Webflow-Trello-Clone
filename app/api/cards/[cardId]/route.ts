import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  context: { params: Promise<{ cardId: string }> } // params may be a promise
) {
  try {
    const { userId, orgId } = auth();

    if (!userId || !orgId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Await params to satisfy Next.js typing
    const { cardId } = await context.params;

    if (!cardId) {
      return new NextResponse("Card ID is required", { status: 400 });
    }

    const card = await db.card.findUnique({
      where: {
        id: cardId,
        list: {
          board: {
            orgId,
          },
        },
      },
      include: {
        list: {
          select: {
            title: true,
          },
        },
      },
    });

    return NextResponse.json(card);
  } catch (error) {
    console.error("Error fetching card:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
