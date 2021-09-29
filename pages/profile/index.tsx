import { MobileLayout } from "components/layout";
import { NextPage } from "next";
import React from "react";

const Profile = () => {
  return <div>Profile</div>;
};

Profile.getLayout = (page: any) => {
  return <MobileLayout>{page}</MobileLayout>;
};

export default Profile;
