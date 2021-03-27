import projectConfig from '/site/pagic.config.js';
import Gitalk from '/site/_gitalk.js';
export default {
    'prev': {
        "text": "Introduction",
        "link": "introduction/index.html"
    },
    'next': {
        "text": "Markdown test",
        "link": "test_pages/markdown_test.html"
    },
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "test_pages/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "test_pages/index.html",
    'title': "Test pages",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>Test pages</h1>\n<p>The test pages.</p>'
        } }),
    'head': React.createElement(React.Fragment, null,
        React.createElement("link", { crossOrigin: "anonymous", href: "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css", integrity: "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X", rel: "stylesheet" })),
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/site/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "Test pages"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>The test pages.</p>'
        } }),
    'toc': null,
    'author': "水月",
    'contributors': [
        "水月"
    ],
    'date': "2021-03-27T05:10:31.000Z",
    'updated': null,
    'excerpt': "The test pages.",
    'cover': undefined,
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
        ], clientID: "692a6b422e67b368cc70", clientSecret: "f80785fb814bc4a5d391b4dbbd02ae3dfbb6b853", id: "test_pages/index.html", owner: "sunlin92", pagerDirection: "last", proxy: "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token", repo: "site", title: "Test pages" })
};
