import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";

const getPagePathList = () => {
    const pages = readdirSync(resolve(__dirname, "pages"));
    let map = {};
    pages.forEach((c) => {
        const t = c;
        map[t.replace(".html", "")] = resolve(__dirname, "pages", c);
    });

    return map;
};

export default defineConfig({
    build: {
        outDir: "docs",

        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                ...getPagePathList(),
            },
        },
    },
});
