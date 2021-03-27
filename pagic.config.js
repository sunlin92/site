// import { React } from 'https://deno.land/x/pagic/mod.ts';
export default {
    srcDir: ".",
    exclude: ["LICENSE"],
    root: "/site/",
    theme: "docs",
    plugins: ["sidebar", "prev_next", "gitalk"],
    title: "Pagic template docs",
    description: "Use this template to create a Pagic site with the docs theme",
    // To use jsx syntax, please rename this file to pagic.config.tsx
    // head: <>
    //   <link rel="icon" type="image/png" href="/favicon.png" />
    //   <script src="/assets/custom.js" />
    // </>,
    nav: [
        {
            text: "Docs",
            link: "/site/introduction/index.html",
        },
        {
            text: "About",
            link: "/site/about/index.html",
            align: "right",
        },
    ],
    github: "https://github.com/sunlin92/site",
    sidebar: {
        "/": [
            "introduction/README.md",
            {
                link: "test_pages/README.md",
                children: [
                    "test_pages/markdown_test.md",
                    "test_pages/front_matter.md",
                    "test_pages/react_hooks_test.tsx",
                ],
            },
            {
                text: "Folder",
                children: [
                    "folder/foo.md",
                    {
                        text: "Custom sidebar text",
                        link: "folder/bar.md",
                    },
                ],
            },
        ],
    },
    tools: {
        editOnGitHub: true,
        backToTop: true,
    },
    gitalk: {
        clientID: '692a6b422e67b368cc70',
        clientSecret: 'f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853',
        repo: 'site',
        owner: 'sunlin92',
        admin: ['sunlin92'],
        pagerDirection: 'last',
    },
    port: 8000,
};
