import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev
export default defineConfig({
    plugins: [react()],
    base: '/HackRU_Website/', // CRITICAL: Tells Vite your app is hosted at github.io/DermaML
    build: {
        outDir: 'build', // Keeps your Create React App build directory naming convention
    }
})
