document.addEventListener("DOMContentLoaded", () => {
    // Create a new div for the Inkeep search bar
    const inkeepDiv = document.createElement("div");
    inkeepDiv.id = "inkeepSearchBar";

    // Get the header element where you want to place the Inkeep search bar
    const headerElement = document.querySelector(".md-header__center");
    if (headerElement) {
        headerElement.appendChild(inkeepDiv);
    }

    // Load the Inkeep script
    const inkeepScript = document.createElement("script");
    inkeepScript.src = "https://unpkg.com/@inkeep/uikit-js@0.3.19/dist/embed.js";
    inkeepScript.type = "module";
    inkeepScript.defer = true;
    document.head.appendChild(inkeepScript);

    // Initialize the Inkeep widget after the script loads
    inkeepScript.addEventListener("load", () => {
        Inkeep().embed({
            componentType: "SearchBar",
            targetElement: "#inkeepSearchBar",
            colorModeSync: {
                observedElement: document.documentElement,
                isDarkModeCallback: (el) => {
                    const currentTheme = el.getAttribute("data-color-mode");
                    return currentTheme === "dracula" || currentTheme === "dark";
                },
                colorModeAttribute: "data-md-color-scheme",
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
                modalSettings: {
                    defaultView: "SEARCH",
                    isModeSwitchingEnabled: true,
                    openShortcutKey: "k",
                    isShortcutKeyEnabled: true,
                    onShortcutKeyPressed: undefined,
                    isAlignedToTop: true,
                    isAlignedToRight: false,
                    closeOnBlur: true,
                    askAILabel: "Hỏi AI",
                    switchToSearchMessage: "Tìm kiếm"
                },
                searchSettings: {
                    placeholder: "Tìm kiếm..."
                },
                aiChatSettings: {
                    chatSubjectName: "Paykit",
                    botAvatarSrcUrl: "https://docs.paykit.vn/assets/images/logo/primary-logo-colored-paykit.png",
                    getHelpCallToActions: [
                        {
                            name: "Liên hệ CSKH",
                            url: "https://docs.paykit.vn/lien-he-cskh",
                            icon: {
                                builtIn: "IoChatbubblesOutline"
                            }
                        },
                        {
                            name: "Gửi email",
                            url: "mailto:support@paykit.vn",
                            icon: {
                                builtIn: "IoMail"
                            }
                        }
                    ],
                    actionButtonLabels: {
                        getHelpButtonLabel: 'Cần hỗ trợ?',
                        shareButtonLabel: "Chia sẻ",
                        clearButtonLabel: "Xóa hội thoại",
                        stopButtonLabel: 'Ngừng',
                        copyChatButtonLabel: 'Sao chép'
                    },
                    placeholder: 'Bắt đầu với Paykit thế nào?',
                    introMessage: `Chào bạn,\n\nTôi là một trợ lý AI được đào tạo từ tài liệu, bài viết hướng dẫn và các nội dung liên quan khác của Paykit.\n\nHãy hỏi tôi bất kỳ điều gì về <code>Paykit</code>.`,
                    // introMessage: `Hi, I'm {{botName}} \n\n I'm an AI assistant trained on documentation, help articles, and other content. \n\n Ask me anything about {{chatSubjectName}}.`,
                    quickQuestionsLabel: 'Các câu hỏi ví dụ',
                    quickQuestions: [
                        'Thời gian đăng ký tài khoản Paykit mất bao lâu?',
                        'Paykit có những tính năng gì nổi bật so với các cổng thanh toán khác?',
                        'Làm thế nào để tạo Link thanh toán trên Paykit?',
                        'Tôi có thể gửi Link thanh toán qua email hoặc tin nhắn không?',
                        'Ứng dụng Paykit không hoạt động, tôi cần làm gì?',
                    ],
                    shouldHighlightFirstQuickQuestion: true,
                    disclaimerSettings: {
                        isDisclaimerEnabled: true,
                        disclaimerLabel: 'Lưu ý',
                        disclaimerTooltip:
                            `Trợ lý AI của Paykit được hỗ trợ thực hiện bởi <a href="https://inkeep.com">Inkeep</a> và chỉ dành cho mục đích tham khảo, bạn vui lòng không cung cấp thông tin nhạy cảm hoặc cá nhân. Câu trả lời của AI không được đảm bảo chính xác trong mọi trường hợp.`,
                    }
                }
            },
        });
    });
});