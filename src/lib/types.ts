export type NavigationItemSubProps = {
  id: string;
  path: string;
  label: string;
  status: boolean;
};
export type NavigationItemProps = {
  id: string;
  path: string;
  label: string;
  hasLink: boolean;
  status: boolean;
  subs: NavigationItemSubProps[];
};

export type ImageProps = {
  data: {
    id: string;
    attributes: {
      width: number;
      height: number;
      url: string;
      name: string;
    };
  };
};

export type ProductProps = {
  id: string;
  attributes: {
    name: string;
    content: string;
    product_category: {
      data: {
        id: string;
        attributes: {
          name: string;
        };
      };
    };
    thumbnail: ImageProps;
  };
};

export type ProjectProps = {
  id: string;
  attributes: {
    name: string;
    content: string;
    thumbnail: ImageProps;
  };
};

export type CertificateProps = {
  image: ImageProps;
  id: string;
};
