import React, { Children, useMemo } from "react";

export type ButtonProps = {
  type: "primary" | "warning" | "success" | "error" | "white"
  children: any
};
const Button = (props: ButtonProps) => {
  const { type, children } = props;
  const getBgClass = useMemo(() => {
    switch (type) {
      case "primary":
        return "bg-blue-500 text-blue-50";
      case "warning":
        return "bg-yellow-600 text-yellow-50";
      case "success":
        return "bg-green-500 text-green-50";
      case "error":
        return "bg-red-500 text-red-50";
    }
  }, [type]);
  return <div className={`w-full rounded-sm ${getBgClass} flex justify-center items-center font-semibold h-10 text-sm`}>{children}</div>;
};

export default Button;
