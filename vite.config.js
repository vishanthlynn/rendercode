import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Vite plugin to mock API endpoints in development
function mockApiPlugin() {
  return {
    name: 'mock-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', (req, res, next) => {
        if (req.method === 'POST') {
          // Read the request body
          let body = ''
          req.on('data', (chunk) => {
            body += chunk.toString()
          })
          req.on('end', () => {
            try {
              const data = JSON.parse(body)
              console.log('📧 Contact form submission (mock):', data)
              
              // Return success response
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(
                JSON.stringify({
                  message: 'Form submitted successfully (mocked in development)',
                  success: true,
                })
              )
            } catch (error) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ message: 'Invalid request', success: false }))
            }
          })
        } else {
          res.writeHead(405, { 'Content-Type': 'application/json' })
          res.end(JSON.stringify({ message: 'Method not allowed' }))
        }
      })
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mockApiPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
})
