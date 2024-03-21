import React, { FC, useState } from "react";
import { NavigationItemProps } from "@/lib/types";
import Link from "next/link";
import { Icons } from "@/components/icons";
import cn from "@/lib/utils/cn";

export interface MobileNavigationProps {
  navigations: NavigationItemProps[];
  close(): void;
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  navigations,
  close,
}) => {
  return (
    <div
      className={
        "fixed h-[calc(100vh-72px)] w-full top-[72px] bg-white z-[200] flex flex-col justify-center "
      }
    >
      <div className={"box flex flex-col gap-5"}>
        {navigations.map((navigation) => (
          <MobileNavigationItem
            data={navigation}
            key={navigation.id}
            close={close}
          />
        ))}
      </div>
    </div>
  );
};
const MobileNavigationItem = ({
  data,
  close,
}: {
  data: NavigationItemProps;
  close(): void;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  if (data.hasLink) {
    return (
      <Link
        href={data.path}
        className={"text-24 font-medium text-primary-foreground"}
      >
        {data.label}
      </Link>
    );
  } else {
    return (
      <div className={"relative"}>
        <div
          className={"flex justify-between items-center"}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <p className={"text-24 font-medium text-primary-foreground "}>
            {data.label}
          </p>
          <Icons.Dropdown className={cn("trans ", open && "rotate-180")} />
        </div>
        {open && (
          <div className={"ml-5 flex flex-col gap-1 py-2"}>
            {data.subs.map((sub) => (
              <Link
                href={data.path + sub.path}
                key={sub.id}
                className={"text-primary-foreground text-18"}
              >
                {sub.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
};
export default MobileNavigation;
