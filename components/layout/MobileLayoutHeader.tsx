import { BackIcon } from "components/common/icons";
import React from "react";
import { useRouter } from "next/router";

function MobileLayoutHeader(props: { title?: string }) {
  const { title = "" } = props;
  const router = useRouter();
  function onBack() {
    router.back();
  }
  return (
    <header className="flex justify-between h-14 items-center px-4 shadow-xl">
      <div className="icon" onClick={onBack}>
        <BackIcon color="#6aaafa" />
      </div>
      <div className="title flex-1 text-right text-md font-semibold text-blue-400">
        {title}
      </div>
    </header>
  );
}

export default MobileLayoutHeader;
