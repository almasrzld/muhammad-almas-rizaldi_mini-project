import React from "react";
import DashboardFieldEditFeature from "@/features/Dashboard/FieldEdit";

const DashboardFieldEdit = ({ params }: { params: { slug: string } }) => {
  return <DashboardFieldEditFeature params={params} />;
};

export default DashboardFieldEdit;
