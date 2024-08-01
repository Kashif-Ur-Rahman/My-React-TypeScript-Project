/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Open Sans']
    },
    extend: {
      colors: {
        customBackground: '#edf5f8', 
        customBackgroundDark: '#571F9C',
        customBackgroundCircle: '#e0e0e0',
        customBackgroundButton: '#571F9C',
        customBackgroundColor: '#edf5f8',
        customBackgroundBlack: '#111111',
        customBackgroundRGB: '#82b440',
        customBackgroundHeader: '#262626',
        customBackgroundCenter: '#571F9C',
        customBackgroundPurple: '#7e22ce',
        customBackgroundAnimation: '#6F27C7',
      },
    },
  },
  plugins: [],
}
