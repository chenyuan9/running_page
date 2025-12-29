interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const getBasePath = () => {
  const baseUrl = import.meta.env.BASE_URL;
  return baseUrl === '/' ? '' : baseUrl;
};

const data: ISiteMetadataResult = {
  siteTitle: "Magisk's Running note",
  siteUrl: 'https://run.magiskzy.org',
  logo: 'https://magiskxzy.org/images/profilezzz.jpg',
  description: '记录跑步数据',
  navLinks: [
    {
      name: 'Summary',
      url: `${getBasePath()}/summary`,
    },
    {
      name: 'Blog',
      url: 'https://magiskxzy.org',
    },
    {
      name: 'About',
      url: 'https://magiskxzy.org',
    },
  ],
};

export default data;
