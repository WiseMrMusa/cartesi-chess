import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'How to Play the Game',
      link: '/play-game'
    },
    {
      text: "How it's powered by Cartesi",
      link: '/cartesi'
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
   topNav: [ 
    { text: 'Play Game', link: 'https://cartesi-chess.vercel.app/', match: '/docs' }, 
    { text: 'Blog', link: '/blog' }, 
    { 
      text: 'version', 
      items: [ 
        { 
          text: 'Changelog', 
          link: 'https://github.com/wevm/vocs/blob/main/src/CHANGELOG.md', 
        }, 
        { 
          text: 'Contributing', 
          link: 'https://github.com/wevm/vocs/blob/main/.github/CONTRIBUTING.md', 
        }, 
      ], 
    }, ]
})
