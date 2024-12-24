/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'random-move-1': 'randomMove1 20s infinite ease-in-out',
        'random-move-2': 'randomMove2 20s infinite ease-in-out',
        'random-move-3': 'randomMove3 20s infinite ease-in-out',
        'random-move-4': 'randomMove4 20s infinite ease-in-out',
      },
      keyframes: {
        randomMove1: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '25%': {
            transform: 'translateX(-15%) translateY(25%)',
          },
          '50%': {
            transform: 'translateX(30%) translateY(-20%)',
          },
          '75%': {
            transform: 'translateX(-20%) translateY(35%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
        randomMove2: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '25%': {
            transform: 'translateX(20%) translateY(-15%)',
          },
          '50%': {
            transform: 'translateX(-30%) translateY(20%)',
          },
          '75%': {
            transform: 'translateX(25%) translateY(-10%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
        randomMove3: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '20%': {
            transform: 'translateX(25%) translateY(30%)',
          },
          '40%': {
            transform: 'translateX(-20%) translateY(40%)',
          },
          '60%': {
            transform: 'translateX(30%) translateY(-20%)',
          },
          '80%': {
            transform: 'translateX(-25%) translateY(20%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
        randomMove4: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '15%': {
            transform: 'translateX(30%) translateY(-25%)',
          },
          '30%': {
            transform: 'translateX(-20%) translateY(35%)',
          },
          '45%': {
            transform: 'translateX(40%) translateY(15%)',
          },
          '60%': {
            transform: 'translateX(-30%) translateY(-20%)',
          },
          '75%': {
            transform: 'translateX(20%) translateY(25%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
      },
      colors: {
        background: {
          light: '#F0F5F5',
          darken: '#E6E9E9',
        },
        text: {
          primary: '#092326',
          secondary: '#676767',
          tertiary: '#959596',
          disabled: '#949697',
        },
        accent1: {
          primary: '#08D899',
          secondary: '#7747FF',
          tertiary: '#9AB2F7',
          quaternary: '#B2F1DE',
          hover: '#B2F1DE',
          click: '#00B780',
        },
        accent2: {
          primary: '#08D899',
          secondary: '#FC9D68',
          tertiary: '#FFD5BE',
          quaternary: '#FFECE1',
        },
        system: {
          'successful-hover': '#28B411',
          successful: '#3AC922',
          'successful-secondary': '#B2FFA6',
          'successful-tertiary': '#E6FFE2',
          'attention-hover': '#F6D523',
          attention: '#F6D523',
          'attention-secondary': '#FFEF98',
          'attention-tertiary': '#FFFAE1',
          'error-hover': '#ED2121',
          error: '#FF3030',
          'error-secondary': '#FFC0C0',
          'error-tertiary': '#FFF2F2',
        },
        icons: '#ABB6B7',
        stroke: '#CDD2DD',
        dividers: '#E8E8F3',
        'disabled-bg': '#E7EBF1',
        white: '#FFFFFF',
      },
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
      },
      fontSize: {
        'desktop-h1': ['56px', '62px'],
        'desktop-h2': ['48px', '56px'],
        'desktop-h3': ['40px', '48px'],
        'desktop-subtitle1': ['32px', '40px'],
        'desktop-subtitle2': ['24px', '30px'],
        'desktop-text-l': ['18px', '24px'],
        'desktop-text-m': ['16px', '20px'],
        'desktop-text-s': ['14px', '18px'],
        'desktop-text-xs': ['12px', '16px'],
        'tablet-h1': ['48px', '56px'],
        'tablet-h2': ['40px', '48px'],
        'tablet-h3': ['32px', '40px'],
        'tablet-subtitle1': ['24px', '32px'],
        'tablet-subtitle2': ['20px', '28px'],
        'mobile-h1': ['40px', '48px'],
        'mobile-h2': ['34px', '42px'],
        'mobile-h3': ['26px', '34px'],
        'mobile-subtitle1': ['22px', '30px'],
        'mobile-subtitle2': ['20px', '28px'],
      },
      spacing: {
        4: '4px',
        8: '8px',
        12: '12px',
        16: '16px',
        20: '20px',
        24: '24px',
        32: '32px',
        40: '40px',
        48: '48px',
        56: '56px',
      },
      borderRadius: {
        checkbox: '4px',
        button: '8px',
        large: '16px',
      },
      boxShadow: {
        z100: '0px 10px 15px -3px rgba(132, 132, 132, 0.15)',
        z200: '0px 20px 25px -5px rgba(132, 132, 132, 0.20)',
        z300: '0px 30px 35px -7px rgba(132, 132, 132, 0.25)',
        focus: '0 0 0 2px #643296',
        'focus-btn': '0 0 0 2px #FF37BB',
      },
      letterSpacing: {
        btn: '0.02em',
      },
      fontWeight: {
        regular: 400,
        bold: 700,
        extrabold: 800,
      },
    },
    screens: {
      mobile: '320px',
      tablet: '768px',
      'desktop-sm': '1440px',
      desktop: '1920px',
    },
  },
  plugins: [],
};
