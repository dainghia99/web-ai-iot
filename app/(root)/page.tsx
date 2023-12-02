import { DataTable } from "@/components/data-table";
import prismadb from "@/lib/prismadb";
import { columns } from "./components/columns";
import HistoryItem from "@/components/history-item";

export default async function Home() {
  const datas = await prismadb.dataTraining.findMany();
  const dataformats = datas.map((data) => ({
    id: data.id,
    nhietDo: data.nhietDo,
    doAm: data.doAm,
    amThanh: data.amThanh,
    gas: data.gas,
    tinhTrang: data.tinhTrang,
  }));
  return (
    <div>
      <h1 className="text-3xl font-bold mb-10">
        WEB HIỂN THỊ DỮ LIỆU CỦA NHÓM 5!
      </h1>
      <HistoryItem />
      <DataTable columns={columns} data={dataformats} />
    </div>
  );
}
