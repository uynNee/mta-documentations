document.addEventListener("DOMContentLoaded", () => {
    // Tạo div cho thanh tìm kiếm
    const inkeepDiv = document.createElement("div");
    inkeepDiv.id = "inkeepSearchBar";
    
    // Thêm vào header
    const headerElement = document.querySelector(".md-header__center");
    if (headerElement) {
        headerElement.appendChild(inkeepDiv);
    }

    // Load script Inkeep
    const inkeepScript = document.createElement("script");
    inkeepScript.src = "https://unpkg.com/@inkeep/uikit-js@0.3.19/dist/embed.js";
    inkeepScript.type = "module";
    inkeepScript.defer = true;
    document.head.appendChild(inkeepScript);

    // Cấu hình widget (CHỈ GIỮ LẠI SEARCH)
    const addInkeepSearch = () => {
        Inkeep().embed({
            componentType: "SearchBar", // CHỈ GIỮ SEARCH BAR
            targetElement: "#inkeepSearchBar",
            colorModeSync: {
                observedElement: document.documentElement,
                isDarkModeCallback: (el) => {
                    const currentTheme = el.getAttribute("data-color-mode");
                    return currentTheme === "dracula" || currentTheme === "dark";
                },
                colorModeAttribute: "data-color-mode-scheme",
            },
            properties: {
                baseSettings: {
                    apiKey: "46e4d017653867248d0a5a09a88a1a9918a1263cb20b162a",
                    integrationId: "cm50g97g400h24fwtgmzknvyy",
                    organizationId: "org_1q6zxS9muPsX9V4a",
                    primaryBrandColor: "#000000",
                    theme: {
                        stylesheetUrls: ["../../stylesheets/inkeep.css"],
                        tokens: {
                            fonts: {
                                heading: "'Inter'",
                                body: "'Roboto'",
                                mono: "'Roboto, Space Mono', monospace",
                            },
                            fontSizes: {
                                '3xs': '0.45rem',
                                '2xs': '0.5rem',
                                xs: '0.5rem',
                                sm: '0.7rem',
                                md: '0.8rem',
                                lg: '0.9rem',
                                xl: '1rem',
                                '2xl': '1.2rem',
                                '3xl': '1.5rem',
                                '4xl': '1.8rem',
                                '5xl': '2.4rem',
                                '6xl': '3rem',
                                '7xl': '3.6rem',
                                '8xl': '4.8rem',
                                '9xl': '6.4rem',
                            },
                        },
                    },
                },
                searchSettings: {
                    placeholder: "Tìm kiếm...",
                    // TẮT MODAL CHAT AI KHI NHẤN ENTER
                    modalSettings: {
                        isModeSwitchingEnabled: false, // Tắt chuyển đổi sang chat
                        defaultView: "SEARCH" // Luôn giữ ở chế độ tìm kiếm
                    }
                }
            }
        });
    };

    inkeepScript.addEventListener("load", addInkeepSearch);
});