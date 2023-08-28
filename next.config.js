/** @type {import('next').NextConfig} */
BigInt.prototype.toJSON = function () {
  const int = Number.parseInt(this.toString());
  return int ?? this.toString();
};

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
    {
      source: '/membership',
      destination: '/about#membership',
      permanent: true,
    },
    {
      source: '/advertise',
      destination: '/about#advertise',
      permanent: true,
    },
    {
      source: '/find',
      destination: '/about#find',
      permanent: true,
    },
    {
      source: '/contact',
      destination: '/about',
      permanent: true,
    },

    // Website V2 About
    {
      source: '/info',
      destination: '/about',
      permanent: true,
    },
    {
      source: '/info/tickets',
      destination: '/about#tickets',
      permanent: true,
    },
    {
      source: '/info/advertise',
      destination: '/about#advertise',
      permanent: true,
    },
    {
      source: '/info/executive',
      destination: '/executive',
      permanent: true,
    },
    {
      source: '/info/faqs',
      destination: '/faq',
      permanent: true,
    },
    {
      source: '/info/contactus',
      destination: '/about',
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
  output: 'standalone', // # For some reason this breaks stuff. Idk why
};

module.exports = nextConfig;
