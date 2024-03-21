import React, { ChangeEvent, FC, useState } from "react";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/client";
import GET_HOME, { GetHomeResponse } from "@/lib/gql/queries/home.query";
import Config from "@/lib/config";
import GET_CONTACT, {
  GetContactResponse,
} from "@/lib/gql/queries/contact.query";
import cn from "@/lib/utils/cn";
import CREATE_CONTACT_FORM from "@/lib/gql/mutations/contact-form.mutation";
import toast from "react-hot-toast";

export interface ContactPageProps {}

export type ContactDto = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  note: string;
};
const ContactPage: FC<ContactPageProps> = () => {
  const { data, loading } = useQuery<GetContactResponse>(GET_CONTACT, {
    variables: {
      locale: Config.defaultLocale,
    },
  });
  const [createContactForm] = useMutation(CREATE_CONTACT_FORM);
  const [contactData, setContactData] = useState<ContactDto>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    note: "",
  });
  function changeData(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setContactData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function onSubmit() {
    if (contactData.firstName.trim().length === 0) {
      toast.error("Adı daxil edin");
      return;
    }
    if (contactData.lastName.trim().length === 0) {
      toast.error("Soyadı daxil edin");
      return;
    }
    if (contactData.email.trim().length === 0) {
      toast.error("Elektron poçtu daxil edin");
      return;
    }
    if (contactData.phoneNumber.trim().length === 0) {
      toast.error("Telefon nömrəsini daxil edin");
      return;
    }
    createContactForm({
      variables: {
        ...contactData,
      },
    }).then((res) => {
      setContactData({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        note: "",
      });
      toast.success(
        "Sorğu uğurla göndərildi! Yaxın zamanda sizlə əlaqə saxlanılacaq",
      );
    });
  }
  if (loading) {
    return <></>;
  }
  return (
    <>
      <Head>
        <title>Əlaqə</title>
      </Head>
      <main className={"mb-20"}>
        <div className={"w-full py-10 bg-primary"}>
          <div className={"box"}>
            <h1 className={"text-40 text-white font-bold text-center"}>
              Əlaqə
            </h1>
          </div>
        </div>
        <div className={"box"}>
          <div
            className={"flex max-[900px]:flex-col justify-between mt-12 gap-10"}
          >
            <div className={"sm:w-[500px]"}>
              <h2
                className={
                  "text-20 sm:text-28 text-primary-foreground font-semibold mb-5"
                }
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
                className={"w-full h-[450px]"}
              ></iframe>
            </div>
          </div>
          <div className={"mt-8"}>
            <h2
              className={
                "text-32 text-center font-semibold text-primary-foreground"
              }
            >
              Sualınız var?
            </h2>

            <div className={"mt-6 min-[900px]:w-[800px] mx-auto"}>
              <div className={"flex max-sm:flex-col justify-between gap-6"}>
                <div className={"flex  flex-col gap-1.5 w-full"}>
                  <label htmlFor="firstName">Adınız</label>
                  <input
                    type="text"
                    id={"firstName"}
                    name={"firstName"}
                    value={contactData.firstName}
                    onChange={changeData}
                    placeholder={"Adı daxil edin"}
                    className={
                      "w-full border px-3 py-2 rounded-[6px] outline-none"
                    }
                  />
                </div>
                <div className={"flex flex-col gap-1.5 w-full"}>
                  <label htmlFor="lastName">Soyadınız</label>
                  <input
                    type="text"
                    id={"lastName"}
                    name={"lastName"}
                    value={contactData.lastName}
                    onChange={changeData}
                    placeholder={"Soyadı daxil edin"}
                    className={
                      "w-full border px-3 py-2 rounded-[6px] outline-none"
                    }
                  />
                </div>
              </div>
              <div className={"flex flex-col gap-1.5 w-full mt-5"}>
                <label htmlFor="email">Elektron poçt</label>
                <input
                  type="email"
                  id={"email"}
                  name={"email"}
                  value={contactData.email}
                  onChange={changeData}
                  placeholder={"Elektron poçtu daxil edin"}
                  className={
                    "w-full border px-3 py-2 rounded-[6px] outline-none"
                  }
                />
              </div>
              <div className={"flex flex-col gap-1.5 w-full mt-5"}>
                <label htmlFor="phoneNumber">Telefon nömrəsi</label>
                <input
                  type="text"
                  id={"phoneNumber"}
                  name={"phoneNumber"}
                  value={contactData.phoneNumber}
                  onChange={changeData}
                  placeholder={"Telefon nömrəsini daxil edin"}
                  className={
                    "w-full border px-3 py-2 rounded-[6px] outline-none"
                  }
                />
              </div>
              <div className={"flex flex-col gap-1.5 w-full mt-5"}>
                <label htmlFor="note">Qeyd</label>
                <textarea
                  id={"note"}
                  name={"note"}
                  value={contactData.note}
                  onChange={changeData}
                  className={
                    "w-full border px-3 py-2 rounded-[6px] outline-none"
                  }
                />
              </div>
              <button
                onClick={onSubmit}
                className={
                  "bg-primary text-white w-full py-3 rounded-[6px] trans mt-7 hover:ring-4 hover:ring-opacity-50 hover:ring-primary"
                }
              >
                Göndər
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
