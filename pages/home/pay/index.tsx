import Button from "components/common/button/button";
import MobileLayoutHeader from "components/layout/MobileLayoutHeader";
import React from "react";
import { motion } from "framer-motion";
import PayList from "components/mobile/payList/PayList";

const pay_list = [
  {
    id: "01",
    title: "Mua ấm đun nước lạnh",
    date: new Date(),
  },
  {
    id: "02",
    title: "Vòi sen thông minh",
    date: new Date(),
  },
  {
    id: "03",
    title: "Bình nóng lạnh dung tích 30l tích hợp điều hoà quạt gió tổng",
    date: new Date(),
  },
];

const Pay = () => {
  return (
    <div className="p-2">
      <Button type="primary">Tạo hoá đơn</Button>
      <div className='pt-2'>
        <PayList items={pay_list} />
      </div>
    </div>
  );
};

Pay.getLayout = (page: any) => {
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
      <MobileLayoutHeader title="Pay bills" />
      {page}
    </motion.div>
  );
};

export default Pay;
