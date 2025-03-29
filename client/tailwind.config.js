/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px'
        },
        extend: {
          spacing: {
            '6': '1.5rem',
            '8': '2rem',
            '36': '9rem'
          }
        }
      },
      plugins: [],
      corePlugins: {
        preflight: true
      }
    }