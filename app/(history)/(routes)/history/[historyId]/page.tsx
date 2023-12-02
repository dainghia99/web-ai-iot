import { DataTable } from "@/components/data-table";
import prismadb from "@/lib/prismadb";
import { format } from "date-fns";
import { columns } from "../components/columns";

interface DetailProps {
  params: { historyId: string };
}

const Detail = async ({ params }: DetailProps) => {
  const datatrainings = await prismadb.dataTraining.findMany();
  const dataformat = datatrainings.map((data) => ({
    id: data.id,
    nhietDo: data.nhietDo,
    doAm: data.doAm,
    amThanh: data.amThanh,
    gas: data.gas,
    tinhTrang: data.tinhTrang,
    createdAt: format(data.createdAt, "dd/MM/YYY").split("/").join("-"),
    time: data.createdAt.getTime(),
  }));

  const datas = dataformat.filter(
    (data) => data.createdAt === params.historyId
  );

  const formatdate = datas[0].createdAt.split("-").join("/");

  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold">Dữ liệu của ngày: {formatdate}</h2>
        <DataTable columns={columns} data={datas} />
      </div>
    </div>
  );
};

export default Detail;
