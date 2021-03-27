import projectConfig from '/site/pagic.config.js';
import ReactHooksTest from './react_hooks_test_content.js';
import Gitalk from '/site/_gitalk.js';
export default {
    'prev': {
        "text": "Front matter test",
        "link": "test_pages/front_matter_test.html"
    },
    'next': {
        "text": "Foo",
        "link": "folder/foo.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/react_hooks_test.tsx",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/react_hooks_test.html",
    'title': "React hooks test",
    'content': React.createElement(ReactHooksTest, { config: {
            branch: 'main',
            description: 'Use this template to create a Pagic site with the docs theme',
            exclude: [
                '**/.*',
                '**/package.json',
                '**/package-lock.json',
                '**/node_modules',
                'pagic.config.ts',
                'pagic.config.tsx',
                '**/config.gypi',
                '**/CVS',
                '**/npm-debug.log',
                'LICENSE',
                'dist'
            ],
            gitalk: {
                admin: [
                    'sunlin92'
                ],
                clientID: '692a6b422e67b368cc70',
                clientSecret: 'f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853',
                owner: 'sunlin92',
                pagerDirection: 'last',
                repo: 'site'
            },
            github: 'https://github.com/sunlin92/site',
            include: undefined,
            nav: [
                {
                    link: '/site/introduction/index.html',
                    text: 'Docs'
                },
                {
                    align: 'right',
                    link: '/site/about/index.html',
                    text: 'About'
                }
            ],
            outDir: 'dist',
            plugins: [
                'clean',
                'init',
                'md',
                'tsx',
                'script',
                'layout',
                'out',
                'sidebar',
                'prev_next',
                'gitalk'
            ],
            port: 8000,
            root: '/site/',
            serve: false,
            sidebar: {
                '/': [
                    'introduction/README.md',
                    {
                        children: [
                            'test_pages/markdown_test.md',
                            'test_pages/front_matter.md',
                            'test_pages/react_hooks_test.tsx'
                        ],
                        link: 'test_pages/README.md'
                    },
                    {
                        children: [
                            'folder/foo.md',
                            {
                                link: 'folder/bar.md',
                                text: 'Custom sidebar text'
                            }
                        ],
                        text: 'Folder'
                    }
                ]
            },
            srcDir: '.',
            theme: 'docs',
            title: 'Pagic template docs',
            tools: {
                backToTop: true,
                editOnGitHub: true
            },
            watch: false
        }, content: null, head: null, layoutPath: "_layout.tsx", outputPath: "test_pages/react_hooks_test.html", pagePath: "test_pages/react_hooks_test.tsx", script: null, title: "React hooks test" }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/site/index.js", type: "module" })),
    'sidebar': [
        {
            "text": "Introduction",
            "link": "introduction/index.html",
            "pagePath": "introduction/README.md"
        },
        {
            "link": "test_pages/index.html",
            "children": [
                {
                    "text": "Markdown test",
                    "link": "test_pages/markdown_test.html",
                    "pagePath": "test_pages/markdown_test.md"
                },
                {
                    "text": "Front matter test",
                    "link": "test_pages/front_matter_test.html",
                    "pagePath": "test_pages/front_matter.md"
                },
                {
                    "text": "React hooks test",
                    "link": "test_pages/react_hooks_test.html",
                    "pagePath": "test_pages/react_hooks_test.tsx"
                }
            ],
            "pagePath": "test_pages/README.md",
            "text": "Test pages"
        },
        {
            "text": "Folder",
            "children": [
                {
                    "text": "Foo",
                    "link": "folder/foo.html",
                    "pagePath": "folder/foo.md"
                },
                {
                    "text": "Custom sidebar text",
                    "link": "folder/bar.html",
                    "pagePath": "folder/bar.md"
                }
            ]
        }
    ],
    'gitalk': React.createElement(Gitalk, { admin: [
            'sunlin92'
        ], clientID: "692a6b422e67b368cc70", clientSecret: "f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853", id: "test_pages/react_hooks_test.html", owner: "sunlin92", pagerDirection: "last", repo: "site", title: "React hooks test" })
};
