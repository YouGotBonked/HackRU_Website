import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/HackRU_Website/',
    build: {
        outDir: 'build',
    }
})
