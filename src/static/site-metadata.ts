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
  siteTitle: "Magisk's runblog",
  siteUrl: 'https://runblog.magiskxzy.org',
  logo: 'https://magiskxzy.org/images/profilezzz.jpg',
  description: 'Personal site and blog',
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
      url: 'https://magiskxzy.org/painters/runblog_preface/',
    },
  ],
};

export default data;
