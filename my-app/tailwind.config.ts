import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem'

    },
    extend: {
      fontFamily: {
        sans: ['Jost', 'sans-serif'],
      },
      fontSize: {
        '35': '35px',
        '64': '64px',
      },
      fontWeight: {
      },
      backgroundImage: {
      },
      colors: {
        white: '#fff',
        black: '#000',
      },


    },
  },
  plugins: [],
} satisfies Config;
