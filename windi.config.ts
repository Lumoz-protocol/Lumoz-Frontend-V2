import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    },
    extend: {
      colors: {
        primary: {
          500: '#DBFF34',
          900: '#BEFE00'
        },
        text: {
          dark: '#AAAAAA'
        },
        border: {
          300: 'rgba(255, 255, 255, 0.2)'
        }
      }
    }
  }
})
