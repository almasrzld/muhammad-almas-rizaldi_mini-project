import React from "react";
import Link from "next/link";

import { IFieldSchema } from "@/features/Dashboard/Field/hook";
import { formatIDR } from "@/lib/utils";
import BlurImage from "./image-blur";
import { Button } from "../ui/button";

interface FieldCardProps {
  item: IFieldSchema;
  details?: boolean;
}

const FieldCard: React.FC<FieldCardProps> = ({ item, details = false }) => {
  return (
    <div className="relative group border bg-white rounded-lg transition-all p-2">
      <div className="relative h-40 sm:h-60 md:h-80">
        <BlurImage src={item.image} alt={item.name} />
        <div className="absolute top-0 left-0 rounded-lg bg-orange-400/30 w-full h-full group-hover:bg-transparent transition-colors" />
      </div>
      <div className="space-y-0 md:space-y-1 mt-2">
        <h3 className="text-base md:text-lg font-semibold">{item.name}</h3>
        <p className="text-sm md:text-base">{item.location?.name}</p>
        <p className="line-clamp-1 text-xs md:text-sm">{item.description}</p>
        <p className="text-sm md:text-base">
          {formatIDR(parseInt(item.price))}/ hours
        </p>
      </div>
      {details && (
        <Button className="mt-1 md:mt-2" asChild>
          <Link href={`/field/${item.slug}`}>See Details</Link>
        </Button>
      )}
    </div>
  );
};

export default FieldCard;
