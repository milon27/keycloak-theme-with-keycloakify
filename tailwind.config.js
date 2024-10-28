/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                redHatDisplay: ["Red Hat Display", "sans-serif"]
            },
            colors: {
                primary: {
                    900: "#2B4324",
                    800: "#304E26",
                    700: "#37612A",
                    600: "#477E32",
                    500: "#5D9E43",
                    400: "#87C270",
                    300: "#A5D194",
                    200: "#C3E1B7",
                    100: "#E1F0DB",
                    50: "#F0F7ED"
                },
                gray: {
                    50: "#FFFFFF",
                    100: "#F8F9FA",
                    200: "#E9ECEF",
                    300: "#DEE2E6",
                    400: "#CED4DA",
                    500: "#ADB5BD",
                    600: "#6C757D",
                    650: "#6A707C",
                    700: "#495057",
                    800: "#343A40",
                    900: "#212529"
                },
                white: "#FFFFFF",
                black: "#000000",
                success: "#00A612",
                error: "#FB431A",
                pending: "#FF942E",
                transparent: "transparent"
            },
            fontSize: {
                h1: ["36px", { lineHeight: "44px", fontWeight: 700 }],
                h2: ["24px", { lineHeight: "32px", fontWeight: 700 }],
                h3: ["20px", { lineHeight: "28px", fontWeight: 600 }],
                h4: ["16px", { lineHeight: "24px", fontWeight: 500 }],
                body: ["14px", { lineHeight: "20px" }],
                "body-paragraph": ["14px", { lineHeight: "24px" }],
                small: ["12px", { lineHeight: "16px" }],
                "small-paragraph": ["12px", { lineHeight: "20px" }],
                "tiny-regular": ["10px", { lineHeight: "14px" }]
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)"
            }
        }
    },
    plugins: [require("tailwindcss-animate")]
};
