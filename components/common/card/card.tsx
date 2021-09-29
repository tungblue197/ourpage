import React, { useMemo } from "react";

export type CardProps = {
  icon?: React.Component;
  title?: string;
  children?: React.ReactNode;
};
const Card = (props: CardProps) => {
  const { children, icon, title } = props;

  return (
    <div className="border cursor-pointer w-28 border-gray-200 rounded-sm p-4 rounded-2xl shadow-lg flex justify-center flex-col items-center">
      {children}
    </div>
  );
};

export default Card;
