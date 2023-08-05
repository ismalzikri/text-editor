import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/session";

export const metadata = {
  title: "Texts",
};

export default async function TextsPage() {
  const user = await getCurrentUser();
  const texts = await db.text.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      createdAt: true,
    },
    orderBy: { updatedAt: "desc" },
  });

  const handleSubmit = async (data: FormData) => {
    "use server";
    const post = await db.text.create({
      data: {
        title: data.get("title")?.toString() || "",
        content: data.get("content")?.toString() || "",
        // authorId: user.id,
      },
      select: {
        id: true,
      },
    });
    console.log(post);
  };

  return (
    <main>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(texts, null, 2)}</pre>
      <form id="submit-form" action={handleSubmit}>
        <input type="text" name="title" className="border" required />
        <textarea name="content" required></textarea>
        <button type="submit">save text</button>
      </form>
    </main>
  );
}
