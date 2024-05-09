import React from "react";
import DashboardFieldDetailsFeature from "@/features/Dashboard/FieldDetail";

const DashboardFieldDetails = ({ params }: { params: { slug: string } }) => {
  return <DashboardFieldDetailsFeature params={params} />;
};

export default DashboardFieldDetails;
