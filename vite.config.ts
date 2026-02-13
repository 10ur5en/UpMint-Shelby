import { defineConfig } from 'vite'

// Vite dev sunucusu için Shelby indexer isteğini proxy'leyerek
// tarayıcı tarafındaki CORS engelini aşarız. Tarayıcı sadece
// localhost:5173 ile konuşur, Vite de isteği Shelby indexer'a iletir.

export default defineConfig({
  server: {
    proxy: {
      '/shelby-indexer': {
        target:
          'https://api.shelbynet.aptoslabs.com/nocode/v1/public/cmforrguw0042s601fn71f9l2/v1/graphql',
        changeOrigin: true,
        secure: true,
        rewrite: () => '',
      },
      '/shelby-rpc': {
        target: 'https://api.shelbynet.shelby.xyz',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/shelby-rpc/, '/shelby'),
      },
      '/shelby-aptos': {
        target: 'https://api.shelbynet.shelby.xyz',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/shelby-aptos/, '/v1'),
      },
    },
  },
})

