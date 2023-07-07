module.exports = {
  important: true,
  mode: "jit", // update this line

  // Active dark mode on class basis
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.tsx",
      "./components/**/*.tsx",
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    // These options are passed through directly to PurgeCSS
  },
  theme: {
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
    },
    extend: {
      fontSize: {
        "2xs": [
          "0.9rem",
          {
            lineHeight: "1.2rem",
          },
        ],
        xs: [
          "1.2rem",
          {
            lineHeight: "1.6rem",
          },
        ],
        sm: [
          "1.4rem",
          {
            lineHeight: "2rem",
          },
        ],
        md: [
          "1.6rem",
          {
            lineHeight: "2.2rem",
          },
        ],
        lg: [
          "1.8rem",
          {
            lineHeight: "2.4rem",
          },
        ],
        xl: [
          "2.4rem",
          {
            lineHeight: "3.2rem",
          },
        ],
        "2xl": [
          "3.2rem",
          {
            lineHeight: "4rem",
          },
        ],
        "3xl": [
          "4rem",
          {
            lineHeight: "4.8rem",
          },
        ],
        "4xl": [
          "4.8rem",
          {
            lineHeight: "6.2rem",
          },
        ],
        "5xl": [
          "5.6rem",
          {
            lineHeight: "6.8rem",
          },
        ],
        "6xl": [
          "6.4rem",
          {
            lineHeight: "7.6rem",
          },
        ],
        "7xl": [
          "8rem",
          {
            lineHeight: "9.2rem",
          },
        ],
        "8xl": [
          "12rem",
          {
            lineHeight: "12rem",
          },
        ],
        "9xl": [
          "15rem",
          {
            lineHeight: "15rem",
          },
        ],
      },
      colors: {
        primary: {
          vert1: "#20D8D2",
          vert2: "#8CECC7",
        },
        black: {
          light: "#545454",
          DEFAULT: "#333333",
          dark: "#2C2C2C",
        },
        grey: {
          lighter: "#FAFAFA",
          light: "#FDFDFD",
          DEFAULT: "#E7E7E7",
          dark: "#939393",
          darker: "#0D2339",
        },
        green: {
          lighter: "#47fd5930",
          light: "#47fd5980",
          DEFAULT: "#47FD59",
        },
        red: {
          lighter: "#ff4b4b30",
          light: "#ff4b4b80",
          DEFAULT: "#FF4B4B",
        },
        yellow: {
          lighter: "#FBF7D830",
          light: "#FBF7D880",
          DEFAULT: "#FFE455",
        },
        pink: {
          light: "#D3A2EA",
          DEFAULT: "#A820D8",
        },
        teal: {
          lighter: "#F0FDFD",
          light: "#BDF8F4",
          DEFAULT: "#17C2BB",
          dark: "#069792",
          darker: "#034441",
        },
        white: "#ffffff",
        transparent: "transparent",
      },
      backgroundImage: ["hover", "focus"],
      spacing: {
        sm: "8px",
        md: "20px",
        lg: "24px",
        xl: "60px",
        "2xl": "100px",
      },
      container: {
        center: true,
        padding: "1.5rem",
        maxWidth: {
          md: "700px",
          lg: "1280px",
        },
      },
      width: {
        icon: "24px",
        large: "1080px",
        xlarge: "1240px",
      },
      borderRadius: {
        none: "0",
        sm: "3px",
        DEFAULT: "6px",
        md: "8px",
      },
      height: {
        fit: "fit-content",
      },
      maxWidth: {
        "icon-small": "16px",
        icon: "24px",
        illu: "440px",
        "illu-xl": "800px",
        "container-xl": "1440px",
        "container-2xl": "1536px",
        "container-3xl": "1780px",
      },
      minWidth: {},
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1080px",
        "2xl": "1120px",
        // => @media (min-width: 1024px) { ... }

        "3xl": "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
    boxShadow: {
      blueSmall: "0px 2px 4px rgba(5, 150, 222, 0.2)",
      blueMedium: "0px 4px 8px rgba(5, 150, 222, 0.2)",
      greyDarkerMedium: "0px 0px 16px rgba(34, 67, 88, 0.1)",
      greyDarkerLight: "0px 1px 7px rgba(0, 0, 0, 0.08)",
      none: "none",
    },
    animation: {
      text: "text 10s ease infinite",
    },
    keyframes: {
      text: {
        "0%, 100%": {
          "background-size": "300% 300%",
          "background-position": "top center",
        },
        "50%": {
          "background-size": "300% 300%",
          "background-position": "bottom center",
        },
      },
    },
    transitionProperty: {
      height: "height",
      variants: {
        height: ["responsive", "hover", "focus"],
      },
    },
    linearGradientDirections: {
      // defaults to these values
      t: "to top",
      tr: "to top right",
      r: "to right",
      br: "to bottom right",
      b: "to bottom",
      bl: "to bottom left",
      l: "to left",
      tl: "to top left",
    },
    linearGradientColors: {
      // defaults to {}
      vroom: ["#20D8D2", "#8CECC7"],
      "blue-to-turquoise": ["#03BDDF", "#0596DE"],
      "blue-light-hover": ["#019dba", "#11689e"],
      "gradient-primary": ["#60EDE5", "#107ACA"],
      "gradient-pink": ["#A820D8", "#D3A2EA"],
      "gradient-green2pink": ["#25DAD2", "#B21DCB"],
      // 'black-white-with-stops': ['#000', '#000 45%', '#fff 55%', '#fff'],
    },
    repeatingLinearGradientDirections: (theme) =>
      theme("linearGradientDirections"), // defaults to this value
    repeatingLinearGradientColors: (theme) => theme("linearGradientColors"), // defaults to {}
    repeatingLinearGradientLengths: {
      // defaults to {}
      sm: "25px",
      md: "50px",
      lg: "100px",
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      75: 75,
      90: 90,
      100: 100,
      auto: "auto",
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-gradients")],
  future: {
    purgeLayersByDefault: true,
  },
};
