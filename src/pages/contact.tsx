import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_HOME, { GetHomeResponse } from "@/lib/gql/queries/home.query";
import Config from "@/lib/config";
import GET_CONTACT, {
  GetContactResponse,
} from "@/lib/gql/queries/contact.query";
import cn from "@/lib/utils/cn";

export interface ContactPageProps {}

const ContactPage: FC<ContactPageProps> = () => {
  const { data, loading } = useQuery<GetContactResponse>(GET_CONTACT, {
    variables: {
      locale: Config.defaultLocale,
    },
  });

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Əlaqə</title>
      </Head>
      <main>
        <div className={"w-full py-10 bg-primary"}>
          <div className={"box"}>
            <h1 className={"text-40 text-white font-bold text-center"}>
              Əlaqə
            </h1>
          </div>
        </div>
        <div className={"box"}>
          <div className={"flex justify-between mt-12 gap-10"}>
            <div className={"w-[500px]"}>
              <h2
                className={"text-28 text-primary-foreground font-semibold mb-5"}
              >
                Bizimlə əlaqə üçün:
              </h2>
              <div>
                <div
                  className={
                    "flex flex-col sm:flex-row  mt-10 sm:mt-0 sm:gap-[55px] "
                  }
                >
                  <h3
                    className={"w-[100px] sm:py-6 text-[#A1A1A1] font-semibold"}
                  >
                    Adres:
                  </h3>
                  <div
                    className={cn(
                      "border-b  border-main py-3 sm:w-[300px]  mt-1 sm:my-3 font-semibold ",
                    )}
                  >
                    {data?.contact.data.attributes.address}
                  </div>
                </div>
                <div
                  className={
                    "flex flex-col sm:flex-row  mt-5 sm:mt-0 sm:gap-[55px] "
                  }
                >
                  <h3
                    className={"w-[100px] sm:py-6 text-[#A1A1A1] font-semibold"}
                  >
                    Nömrə:
                  </h3>
                  <div
                    className={cn(
                      "border-b  border-main py-3 sm:w-[300px]  mt-1 sm:my-3 font-semibold ",
                    )}
                  >
                    {data?.contact.data.attributes.phoneNumber}
                  </div>
                </div>
                <div
                  className={
                    "flex flex-col sm:flex-row  mt-5 sm:mt-0 sm:gap-[55px] "
                  }
                >
                  <h3
                    className={"w-[100px] sm:py-6 text-[#A1A1A1] font-semibold"}
                  >
                    E-mail:
                  </h3>
                  <div
                    className={cn(
                      "border-b  border-main py-3 sm:w-[300px]   mt-1 sm:my-3 font-semibold",
                    )}
                  >
                    {data?.contact.data.attributes.email}
                  </div>
                </div>
              </div>
            </div>
            <div className={"w-full"}>
              <iframe
                src="https://www.google.com/maps/d/embed?mid=10kihFFcNMTC1r-34v20uBHAYiYbgPWI&ehbc=2E312F&noprof=1"
                className={"w-full h-[650px]"}
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
