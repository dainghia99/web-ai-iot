// dateUtils.ts
import { format } from "date-fns";

export const getUniqueFormattedDates = (
  data: { createdAt: Date; updatedAt: Date }[]
): string[] => {
  const uniqueDatesSet = new Set<string>();

  data.forEach((item) => {
    uniqueDatesSet.add(format(item.createdAt, "dd/MM/YYY"));
  });

  return Array.from(uniqueDatesSet);
};
