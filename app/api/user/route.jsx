import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, name } = await req.json();

  const users = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (users.length == 0) {
    const result = await db
      .insert(usersTable)
      .values({
        email: email,
        name: name,
      })
      .returning(usersTable);

    return NextResponse.json(result);
  }
  return NextResponse.json();
}
