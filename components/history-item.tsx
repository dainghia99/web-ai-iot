import Link from "next/link";
import { Button } from "./ui/button";

const HistoryItem = () => {
  return (
    <div>
      <Button variant="outline" className="mb-10">
        <Link href="/history">Xem lịch sử thay đổi dữ liệu</Link>
      </Button>
    </div>
  );
};

export default HistoryItem;
