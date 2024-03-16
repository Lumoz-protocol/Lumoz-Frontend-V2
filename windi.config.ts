import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
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
