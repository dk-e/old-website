/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/zurlyy',
          permanent: true,
        },
        {
          source: '/x',
          destination: 'https://twitter.com/lootings',
          permanent: true,
        },
        {
          source: '/api',
          destination: 'https://api.zurly.me',
          permanent: true,
        },
        {
            source: '/steam',
            destination: 'https://steamcommunity.com/id/zurIy/',
            permanent: true,
          },
          {
            source: '/lf',
            destination: 'https://last.fm/user/zxqq',
            permanent: true,
          },
          {
            source: '/discord',
            destination: 'https://discord.com/users/745631824163766412',
            permanent: true,
        },
        {
          source: '/stats',
          destination: 'https://stats.fm/warn',
          permanent: true,
        },
      ]
    },
  }