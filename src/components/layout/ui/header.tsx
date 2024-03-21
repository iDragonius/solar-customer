import React, { FC } from "react";
import { NavigationItemProps } from "@/lib/types";
import Image from "next/image";
import Navigation from "@/components/layout/ui/navigation";
import Link from "next/link";

export interface HeaderProps {
  navigations: NavigationItemProps[];
}

const Header: FC<HeaderProps> = ({ navigations }) => {
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
            className={"max-h-[70px] object-contain"}
          />
        </Link>

        <Navigation data={navigations} />
      </div>
    </div>
  );
};

export default Header;
