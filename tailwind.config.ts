import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components_/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primary: "#75ACD8",
        success: "#ACD875",
        "success-alt": "#97A934",
        accent: "A5805B",
        warning: "#f4854a",
        danger: "#EB728A",
        "danger-dark": "#D12D1E",
        dark: "#000040",
      },
      borderColor: {
        primary: "#75ACD8",
        success: "#73B153",
        "success-alt": "#97A934",
        accent: "A5805B",
        warning: "#EBBE63",
        danger: "#EB728A",
        "danger-dark": "#D12D1E",
        dark: "#000040",
      },
      fontSize: {
        "10xl": "300px",
      },
      textColor: {
        primary: "#75ACD8",
        success: "#ACD875",
        "success-alt": "#97A934",
        accent: "A5805B",
        warning: "#f4854a",
        danger: "#EB728A",
        "danger-dark": "#D12D1E",
        dark: "#000040",
      },
    },
  },
  plugins: [],
};
export default config;
