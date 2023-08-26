/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/images/**',
      },
    ],
  },
  redirects: async () => [
    // General
    {
      source: '/terms',
      destination: '/terms-and-conditions',
      permanent: true,
    },

    // Website V2 Constitution
    {
      source: '/info/constitution',
      destination: '/constitution',
      permanent: true,
    },
    {
      source: '/info/execroles',
      destination: '/constitution/exec-roles',
      permanent: true,
    },
    {
      source: '/info/committees',
      destination: '/constitution/committees',
      permanent: true,
    },
    {
      source: '/info/keyagreement',
      destination: '/constitution/key-agreement',
      permanent: true,
    },

    // Website V2 Terms
    {
      source: '/info/tickettc',
      destination: '/terms-and-conditions',
      permanent: true,
    },
    {
      source: '/info/loyaltytc',
      destination: '/terms-and-conditions#loyalty',
      permanent: true,
    },

    {
      source: '/tech/technical',
      destination: '/technical-specifications',
      permanent: true,
    },
  ],
  // output: 'standalone', # For some reason this breaks stuff. Idk why
};

module.exports = nextConfig;
