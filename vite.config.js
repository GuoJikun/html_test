import { defineConfig } from "vite";
import { resolve } from "node:path";
import { readdirSync } from "node:fs";

const getPagePathList = () => {
    const pages = readdirSync(resolve(__dirname, "pages"));
    return pages.map((c) => {
        const tmp = {};
        const t = c;
        tmp[t.replace(".html", "")] = resolve(__dirname, "pages", c);
        return { ...tmp };
    });
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
