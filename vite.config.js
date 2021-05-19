import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],

	// for serving at evo2000.github.io/EOYS/*
	base: process.env.NODE_ENV === 'production' ? '/EOYS/' : '/',
})
