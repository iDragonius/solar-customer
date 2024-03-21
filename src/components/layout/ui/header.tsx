import React, { Dispatch, FC, SetStateAction } from "react";
import { NavigationItemProps } from "@/lib/types";
import Image from "next/image";
import Navigation from "@/components/layout/ui/navigation";
import Link from "next/link";
import { Icons } from "@/components/icons";

export interface HeaderProps {
  navigations: NavigationItemProps[];
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Header: FC<HeaderProps> = ({ navigations, open, setOpen }) => {
  return (
    <div
      className={
        "    h-[72px] bg-white border-b border-b-[#1E1D1D1F] flex items-center sticky w-full top-0 z-[100]"
      }
    >
      <div className={"flex justify-between items-center box"}>
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={180}
            height={70}
            className={"max-h-[70px] object-contain -ml-8"}
          />
        </Link>

        <div className={"min-[900px]:hidden"}>
          {open ? (
            <div onClick={() => setOpen(false)}>
              <Icons.Close />
            </div>
          ) : (
            <div onClick={() => setOpen(true)}>
              <Icons.Burger />
            </div>
          )}
        </div>
        <Navigation data={navigations} />
      </div>
    </div>
  );
};

export default Header;
