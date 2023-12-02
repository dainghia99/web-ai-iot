"use client";

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type DataTrainingColumn = {
  id: string;
  nhietDo: string;
  doAm: string;
  amThanh: string;
  gas: string;
  tinhTrang: string;
};

export const columns: ColumnDef<DataTrainingColumn>[] = [
  {
    accessorKey: "nhietDo",
    header: "Nhiệt độ",
  },
  {
    accessorKey: "doAm",
    header: "Độ ẩm",
  },
  {
    accessorKey: "amThanh",
    header: "Âm thanh",
  },
  {
    accessorKey: "gas",
    header: "Khí gas",
  },
  {
    accessorKey: "tinhTrang",
    header: "Tình trạng",
  },
];
