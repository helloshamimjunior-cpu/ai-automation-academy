import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { primary: '#5B8DEF', accent: '#00B894', fg: '#111827' } } },
  plugins: []
}
export default config
