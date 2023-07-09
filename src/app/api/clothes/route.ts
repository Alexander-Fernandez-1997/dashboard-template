import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { clothes } from "@/lib/db/schema";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const clothes_query = await db
      .select()
      .from(clothes)
      .where(eq(clothes.storeId, parseInt(key)))
      .orderBy(desc(clothes.id));

    return NextResponse.json(clothes_query);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
