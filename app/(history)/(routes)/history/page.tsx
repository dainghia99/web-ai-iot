import HistoryPage from "@/components/history";
import { getUniqueFormattedDates } from "@/lib/dateUtils";
import prismadb from "@/lib/prismadb";

const History = async () => {
  const dataHistory = await prismadb.history.findMany();
  const uniqueFormattedDates = getUniqueFormattedDates(dataHistory);

  return (
    <div>
      <HistoryPage data={uniqueFormattedDates} />
    </div>
  );
};

export default History;
