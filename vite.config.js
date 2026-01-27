import { defineConfig } from 'vite'

export default defineConfig({
    // Base public path when served in production
    base: './',

    // Build configuration
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        // Generate sourcemaps for debugging
        sourcemap: false,
        // Ensure all assets are properly bundled
        rollupOptions: {
            input: {
                main: './index.html',
                about: './about.html',
                collections: './collections.html',
                bespoke: './bespoke.html',
                contact: './contact.html'
            }
        }
    },

    // Public directory for static assets
    publicDir: 'public',

    // Server configuration for development
    server: {
        port: 5173,
        open: true
    }
})
