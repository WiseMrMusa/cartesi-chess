import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Docs',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Example',
      link: '/example',
    },
  ],
   topNav: [ 
    { text: 'Guide & API', link: '/docs/getting-started', match: '/docs' }, 
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
