import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { orders } from "@/lib/db/schema";

export async function GET(request: Request) {
  try {
    const key = request.headers.get("store-id") || "1";

    const orders_query = await db
      .select()
      .from(orders)
      .where(eq(orders.storeId, parseInt(key)))
      .orderBy(desc(orders.id));

    return NextResponse.json(orders_query);
  } catch (error) {
    console.log(error);
    return NextResponse.json([]);
  }
}
