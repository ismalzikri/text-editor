import { redirect } from "next/navigation";

import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Texts",
};

export default async function TextsPage() {
  const texts = await db.text.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
    },
    orderBy: { updatedAt: "desc" },
  });

  return (
    <main>
      <pre>{JSON.stringify(texts, null, 2)}</pre>
    </main>
  );
}
