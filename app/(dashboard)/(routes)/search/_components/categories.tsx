"use client";

import { Category } from "@prisma/client";
import {
  FcBarChart,
  FcEngineering,
  FcFilmReel,
  FcLike,
  FcMultipleDevices,
  FcMusic,
  FcOldTimeCamera,
  FcOrgUnit,
  FcRating,
  FcSalesPerformance,
  FcSportsMode
} from "react-icons/fc";
import { IconType } from "react-icons";
import { HiComputerDesktop } from "react-icons/hi2";
import { CategoryItem } from "./category-item";
import { Palette } from "lucide-react";

interface CategoriesProps {
  items: Category[];
}

const iconMap: Record<Category["name"], IconType> = {
  "Music": FcMusic,
  "Art":FcLike,
  "Photography": FcOldTimeCamera,
  "Fitness": FcSportsMode,
  "Accounting": FcBarChart,
  "Designing":FcOrgUnit,
  "Cooking":FcRating,
  // "Computer Science": HiComputerDesktop,
  "Computer Science": FcMultipleDevices,

  "Filming": FcFilmReel,
  "Engineering": FcEngineering,
};

export const Categories = ({
  items,
}: CategoriesProps) => {
  return (
    <div className="flex items-center gap-x-2 overflow-x-auto pb-2">
      {items.map((item) => (
        <CategoryItem
          key={item.id}
          label={item.name}
          icon={iconMap[item.name]}
          value={item.id}
        />
      ))}
    </div>
  )
}