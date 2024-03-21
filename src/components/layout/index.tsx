import React, { FC, ReactNode, useState } from "react";
import Header from "@/components/layout/ui/header";
import Footer from "@/components/layout/ui/footer";
import cn from "@/lib/utils/cn";
import { DmSans } from "@/components/fonts/dm-sans";
import { useQuery } from "@apollo/client";
import GET_LAYOUT, {
  type GetLayoutResponse,
} from "@/lib/gql/queries/layout.query";
import Config from "@/lib/config";
import MobileNavigation from "@/components/layout/ui/mobile-navigation";

export interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const { data, loading } = useQuery<GetLayoutResponse>(GET_LAYOUT, {
    variables: {
      locale: Config.defaultLocale,
    },
  });
  const [open, setOpen] = useState<boolean>(false);
  if (loading) {
    return <></>;
  }

  return (
    <main className={cn(DmSans.className)}>
      {open && (
        <MobileNavigation
          close={() => setOpen(false)}
          navigations={data?.navigation.data.attributes.navigations || []}
        />
      )}
      <div className={"min-h-[calc(100vh-80px)]"}>
        <Header
          open={open}
          setOpen={setOpen}
          navigations={data?.navigation.data.attributes.navigations || []}
        />
        {children}
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
