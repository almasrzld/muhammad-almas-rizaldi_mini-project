import React from "react";
import FieldDetailsFeature from "@/features/Base/FieldDetail";

const FieldDetails = ({ params }: { params: { slug: string } }) => {
  return <FieldDetailsFeature params={params} />;
};

export default FieldDetails;
