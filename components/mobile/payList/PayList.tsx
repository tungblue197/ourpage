import React from "react";
import PayItem, { Item } from "./PayItem";

export type PayListProps = {
  items?: Item[];
  onItemRemove?: (item: Item) => void;
};
function PayList(props: PayListProps) {
  const { items = [] } = props;
  console.log(items)
  return (
    <ul className='flex flex-col space-y-2'>
      {items.map((item, index) => (
        <PayItem item={item} key={item.id || index} />
      ))}
    </ul>
  );
}

export default PayList;
