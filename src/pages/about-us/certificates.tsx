import React, { FC } from "react";
import Head from "next/head";
import { useQuery } from "@apollo/client";
import GET_PROJECTS, {
  GetProjectsResponse,
} from "@/lib/gql/queries/projects.query";
import Config from "@/lib/config";
import Link from "next/link";
import slugify from "slugify";
import Image from "next/image";
import GET_CERTIFICATES, {
  GetCertificatesResponse,
} from "@/lib/gql/queries/certificates.query";
import { imageLoader } from "@/lib/utils/image-loader";

export interface CertificatesPageProps {}

const CertificatesPage: FC<CertificatesPageProps> = () => {
  const { data, loading } = useQuery<GetCertificatesResponse>(
    GET_CERTIFICATES,
    {
      variables: {
        locale: Config.defaultLocale,
      },
    },
  );

  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Sertifikatlar</title>
      </Head>
      <main className={"box"}>
        <h1
          className={
            "font-bold text-24 sm:text-40 text-primary-foreground sm:mt-20 mt-12 sm:mb-12 mb-8"
          }
        >
          Sertifikatlar
        </h1>
        <div className={"sm:grid-cols-2 grid gap-8"}>
          {data?.certificate.data.attributes.certificates.map((certificate) => (
            <div key={certificate.id}>
              <Image
                loader={imageLoader}
                src={certificate.image.data.attributes.url}
                alt={certificate.image.data.attributes.name}
                width={500}
                height={800}
                className={"w-full trans hover:scale-105"}
              />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default CertificatesPage;
