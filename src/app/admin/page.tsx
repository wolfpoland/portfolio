import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "patryk/app/api/auth/[...nextauth]/route";

export default async function Admin() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth");
  }

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
}
