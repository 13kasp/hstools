import { db } from "@/db";
import LiveriesClientWrapper from "../components/LiveriesClientWrapper";

export const dynamic = "force-dynamic";

export default async function LiveriesPage() {
  const liveries = await db.liveries.findMany();

  return (
    <div>
      <LiveriesClientWrapper liveries={liveries} />
    </div>
  );
}
