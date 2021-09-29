import Card from "components/common/card/card";
import BankCard from "components/common/icons/bankCard";
import { NextPage } from "next";
import React from "react";
import { HOME_FUNC } from "utils/constants";
import Link from "next/link";
import { MobileLayout } from "components/layout";

const Home = () => {
  return (
    <div className="flex justify-start flex-wrap p-2 space-x-2">
      {HOME_FUNC.map((item) => {
        return (
          <Link key={item.path} href={`/home/${item.path}`}>
            <a>
              <Card>
                <BankCard color={"#4c5664"} />
                <span className="text-sm text-gray-600 font-semibold">
                  {item.title}
                </span>
              </Card>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

Home.getLayout = (page: any) => {
  return <MobileLayout>{page}</MobileLayout>;
};

export default Home;
