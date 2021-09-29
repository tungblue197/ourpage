import { MobileLayout } from "components/layout";
import { NextPage } from "next";
import React from "react";

const Group = () => {
  return <div>Group</div>;
};

export default Group;

export const getServerSideProps = async () => {
  const v = await fakeValue();
  return {
    props: {
      v,
    },
  };
};

Group.getLayout = (page: any) => {
  return <MobileLayout>{page}</MobileLayout>;
};

function fakeValue() {
  return new Promise((res, rej) => {
    setTimeout(() => res(10), 1000);
  });
}
