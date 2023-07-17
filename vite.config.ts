import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
		open: false,
		proxy: {
			"/api": {
				target: "http://localhost:8888/.netlify/functions",
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ""),
			},
		},
	},
})
