"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

interface HistoryPageProps {
  data: string[];
}

const HistoryPage = ({ data }: HistoryPageProps) => {
  const router = useRouter();

  const onClick = (data: string) => {
    const datanew = data.split("/");
    router.push(`history/${datanew.join("-")}`);
  };

  return (
    <div className="space-x-4">
      {data.map((data) => (
        <Button
          size="sm"
          onClick={() => onClick(data)}
          key={data}
          type="button"
        >
          Ngày {data}
        </Button>
      ))}
    </div>
  );
};

export default HistoryPage;
