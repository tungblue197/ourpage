import { BottomTab } from "components/mobile/bottomTab";
import React, { Children, useEffect, useState } from "react";
import Router from "next/router";
import { Loader } from "components/common/loader";
export type MobileLayoutProps = {
  children: any;
};
const MobileLayout = ({ children }: MobileLayoutProps) => {
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", function () {
      setLoading(true);
    });
    Router.events.on("routeChangeComplete", function () {
      setLoading(false);
    });
    Router.events.on("routeChangeError", function () {
      setLoading(false);
    });
  }, []);
  return (
    <div className="h-screen flex flex-col">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex-1 overflow-y-auto">{children}</div>
      )}

      <BottomTab />
    </div>
  );
};

export default MobileLayout;
