import React, { FC, useRef, useState } from "react";
import { NavigationItemProps } from "@/lib/types";
import Link from "next/link";
import { divide } from "lodash";
import { Icons } from "@/components/icons";
import cn from "@/lib/utils/cn";
import { useOnClickOutside } from "usehooks-ts";

export interface NavigationProps {
  data: NavigationItemProps[];
}

const Navigation: FC<NavigationProps> = ({ data }) => {
  return (
    <div className={"flex gap-8 items-center"}>
      {data.map((navigation) => (
        <NavigationItem data={navigation} key={navigation.id} />
      ))}
    </div>
  );
};

const NavigationItem = ({ data }: { data: NavigationItemProps }) => {
  const [open, setOpen] = useState<boolean>(false);
  const navigationRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(navigationRef, () => setOpen(false));
  if (data.hasLink) {
    return (
      <Link
        className={
          "text-navigation-foreground font-medium hover:text-primary trans"
        }
        href={data.path}
      >
        {data.label}{" "}
      </Link>
    );
  } else {
    return (
      <div className={"relative"}>
        <div
          className={"group flex gap-1 items-center trans cursor-pointer"}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <p
            className={
              "text-navigation-foreground font-medium  group-hover:text-primary trans"
            }
          >
            {data.label}
          </p>
          <Icons.Dropdown
            className={cn(
              "group-hover:[&>path]:stroke-primary  w-5 h-5 trans",
              open && "rotate-180",
            )}
          />
        </div>

        {open && (
          <div
            className={
              "absolute flex flex-col mt-6 bg-white drop-shadow-lg min-w-full py-1 "
            }
            ref={navigationRef}
          >
            {data.subs.map((sub) => (
              <Link
                key={sub.id}
                href={data.path + sub.path}
                className={
                  "trans text-navigation-foreground hover:text-primary px-4 py-1.5 min-w-max"
                }
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
export default Navigation;
