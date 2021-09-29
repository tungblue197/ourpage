import { MobileLayout } from "components/layout";
import { NextPage } from "next";
import React from "react";

const Costs = () => {
  return <div>Costs</div>;
};

Costs.getLayout = (page: any) => {
  return <MobileLayout>{page}</MobileLayout>;
};

export default Costs;
