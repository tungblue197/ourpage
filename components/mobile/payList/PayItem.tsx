import { TrashIcon } from "components/common/icons";
import React from "react";
import { format } from "date-fns";

export type Item = {
  id?: string;
  date?: Date | string;
  title?: string | JSX.Element | React.ReactNode;
};
export type PayItemProps = {
  item?: Item;
  onRemove?: (item: Item) => void;
};
function PayItem(props: PayItemProps) {
  const { item = {}, onRemove } = props;
  return (
    <div className="flex items-center border-b py-1 px-2">
      <span className="flex-1 text-sm text-blue-500 overflow-ellipsis overflow-hidden whitespace-normal">{item.title}</span>
      <span className="text-xs text-gray-500">
        {format(new Date(), "dd/MM/yyyy")}
      </span>
      <div className="ml-1">
        <TrashIcon
          color="#ec744d"
          onClick={() => {
            if (onRemove && item) onRemove(item);
          }}
        />
      </div>
    </div>
  );
}

export default PayItem;
