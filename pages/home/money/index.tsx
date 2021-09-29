import MobileLayoutHeader from "components/layout/MobileLayoutHeader";
import { motion } from "framer-motion";
import React from "react";

const Money = () => {
  return <div>Money</div>;
};
Money.getLayout = (page: any) => {
  return (
    <motion.div
      initial={{
        y: "-100%",
        opacity: 0.3,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
    >
      <MobileLayoutHeader title="Money" />
      {page}
    </motion.div>
  );
};
export default Money;
