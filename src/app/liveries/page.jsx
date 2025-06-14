import { db } from "@/db";
import LiveriesClientWrapper from "../components/LiveriesClientWrapper";

export default async function LiveriesPage() {
  const liveries = await db.liveries.findMany();

  return (
    <div>
      <LiveriesClientWrapper liveries={liveries} />
    </div>
  );
}
