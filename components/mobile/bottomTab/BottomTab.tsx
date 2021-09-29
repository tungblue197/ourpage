import React, { useEffect } from "react";
import { BOTTOM_TAB } from "utils/constants";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "store/store";
import { changePage } from "store/layout/slice";
import { useRouter } from "next/router";
const { ITEMS = [] } = BOTTOM_TAB;
const BottomTab = () => {
  const router = useRouter();
  const { page } = useSelector((state: RootState) => state.layout);
  const dispatch = useAppDispatch();
  function onPageChange(page: string, e: any) {
    dispatch(changePage(page));
  }

  useEffect(() => {
    router.push(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="bottom_tap w-full">
      <ul className="flex justify-around border-t border-gray-200">
        {ITEMS.map((item) => (
          <li key={item.title} className="flex flex-col py-1 cursor-pointer">
            <a
              onClick={(e) => onPageChange(item.path, e)}
              className="flex flex-col items-center"
            >
              {
                <item.icon
                  color={`${
                    item.path === page ? BOTTOM_TAB.ACTIVE_COLOR : "#6b7280"
                  }`}
                />
              }
              <span
                className="text-gray-500 text-sm"
                style={{
                  color:
                    item.path === page ? BOTTOM_TAB.ACTIVE_COLOR : "#6b7280",
                }}
              >
                {item.title}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BottomTab;
