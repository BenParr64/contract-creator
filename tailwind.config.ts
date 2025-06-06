import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Using standard color formats (hex, rgb, hsl)
        primary: '#171717',
        secondary: '#ededed',
        background: {
          light: '#ffffff',
          dark: '#0a0a0a'
        }
      }
    },
  },
  plugins: [forms],
};

export default config; 