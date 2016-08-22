﻿(function () {

    angular.module("app").service("sidebarMenuService", SidebarMenuService);

    function SidebarMenuService($q) {
        var svc = this;

        svc.getSections = getSections;

        function getSections() {

            return $q.resolve([
                {
                    text: "General",
                    items: [
                        {
                            text: "Home",
                            icon: "home",
                            items: [
                                {
                                    text: "Dashboard",
                                    state: "home.dashboard"
                                },
                                {
                                    text: "Dashboard2",
                                    state: "home.dashboard-two"
                                },
                                {
                                    text: "Dashboard3",
                                    state: "home.dashboard-three"
                                }
                            ]
                        },
                        {
                            text: "Forms",
                            icon: "edit",
                            items: [
                                {
                                    text: "General Forms",
                                    state: "forms.general"
                                },
                                {
                                    text: "Advanced Components",
                                    state: "forms.advanced"
                                },
                                {
                                    text: "Form Validation",
                                    state: "forms.validation"
                                },
                                {
                                    text: "Form Wizard",
                                    state: "forms.wizard"
                                },
                                {
                                    text: "Form Upload",
                                    state: "forms.upload"
                                },
                                {
                                    text: "Form Buttons",
                                    state: "forms.buttons"
                                }
                            ]
                        },
                        {
                            text: "UI Elements",
                            icon: "desktop",
                            items: [
                                {
                                    text: "General Elements",
                                    state: "ui.general"
                                },
                                {
                                    text: "Media Gallery",
                                    state: "ui.media"
                                },
                                {
                                    text: "Typography",
                                    state: "ui.typo"
                                },
                                {
                                    text: "Icons",
                                    state: "ui.icons"
                                },
                                {
                                    text: "Glyphicons",
                                    state: "ui.glyph"
                                },
                                {
                                    text: "Widgets",
                                    state: "ui.widgets"
                                },
                                {
                                    text: "Invoice",
                                    state: "ui.invoice"
                                },
                                {
                                    text: "Inbox",
                                    state: "ui.inbox"
                                },
                                {
                                    text: "Calendar",
                                    state: "ui.calendar"
                                }
                            ]
                        },
                        {
                            text: "Tables",
                            icon: "table",
                            items: [
                                {
                                    text: "Tables",
                                    state: "tables.default"
                                },
                                {
                                    text: "Table Dynamic",
                                    state: "tables.dynamic"
                                }
                            ]
                        },
                        {
                            text: "Data Presentation",
                            icon: "bar-chart-o",
                            items: [
                                {
                                    text: "Chart JS",
                                    state: "charts.js"
                                },
                                {
                                    text: "Chart JS2",
                                    state: "charts.js2"
                                },
                                {
                                    text: "Moris JS",
                                    state: "charts.morris"
                                },
                                {
                                    text: "ECharts",
                                    state: "charts.echarts"
                                },
                                {
                                    text: "Other Charts",
                                    state: "charts.other"
                                }
                            ]
                        },
                        {
                            text: "Layouts",
                            icon: "clone",
                            items: [
                                {
                                    text: "Fixed Sidebar",
                                    state: "layouts.fsidebar"
                                },
                                {
                                    text: "Fixed Footer",
                                    state: "layouts.ffooter"
                                }
                            ]
                        }
                    ]
                },
                {
                    text: "Live On",
                    items: [
                        {
                            text: "Additional Pages",
                            icon: "bug",
                            items: [
                                {
                                    text: "E-commerce",
                                    state: "pages.ecom"
                                },
                                {
                                    text: "Projects",
                                    state: "pages.project"
                                },
                                {
                                    text: "Project Detail",
                                    state: "pages.detail"
                                },
                                {
                                    text: "Contacts",
                                    state: "pages.contacts"
                                },
                                {
                                    text: "Profile",
                                    state: "pages.profile"
                                }
                            ]
                        },
                        {
                            text: "Extras",
                            icon: "windows",
                            items: [
                                {
                                    text: "403 Error",
                                    state: "extras.403"
                                },
                                {
                                    text: "404 Error",
                                    state: "extras.404"
                                },
                                {
                                    text: "500 Error",
                                    state: "extras.500"
                                },
                                {
                                    text: "Plain Page",
                                    state: "extras.plain"
                                },
                                {
                                    text: "Login Page",
                                    state: "extras.login"
                                },
                                {
                                    text: "Pricing Tables",
                                    state: "extras.pricing"
                                }
                            ]
                        },
                        {
                            text: "Multilevel Menu",
                            icon: "sitemap",
                            items: [
                                {
                                    text: "Level One",
                                    state: "levels.one"
                                },
                                {
                                    text: "Level One",
                                    state: "levels.one",
                                    items: [
                                        { text: "Level Two", state: "levels.two" },
                                        { text: "Level Two", state: "levels.two" },
                                        { text: "Level Two", state: "levels.two" }
                                    ]
                                },
                                {
                                    text: "Level One",
                                    state: "levels.one"
                                }
                            ]
                        },
                        {
                            text: "Landing Page",
                            icon: "laptop",
                            label: {
                                type: "success",
                                text: "Coming Soon"
                            }
                        }
                    ]
                }
            ]);
        }
    }

    


})();