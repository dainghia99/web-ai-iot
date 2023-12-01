import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { nhietDo, doAm, amThanh, gas, historyId, tinhTrang } = body;

    if (!nhietDo || !doAm || !amThanh || !gas || !historyId || !tinhTrang) {
      return new NextResponse("Data not valid", { status: 400 });
    }

    // Tìm lịch sử hiện tại hoặc tạo mới nếu không tồn tại
    let history = await prisma.history.findUnique({
      where: { id: historyId },
    });

    if (!history) {
      history = await prisma.history.create({
        data: { id: historyId },
      });
    }

    // Lưu dữ liệu mới vào bảng DataTraining
    const newDataTraining = await prisma.dataTraining.create({
      data: {
        nhietDo,
        doAm,
        amThanh,
        gas,
        tinhTrang,
        historyId,
      },
    });

    // Liên kết lịch sử với dữ liệu mới
    await prisma.history.update({
      where: { id: historyId },
      data: {
        dataTraining: { connect: { id: newDataTraining.id } },
      },
    });

    return NextResponse.json(newDataTraining);
  } catch (err) {
    console.error("STORES_POST", err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
