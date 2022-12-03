require('esbuild').build({
    entryPoints: ['src/index.ts'],
    bundle: true,
    outfile: 'dist/index.js',
    sourcemap: true,
    plugins: [
        require('esbuild-sass-plugin').sassPlugin(),
    ]
}).catch(() => process.exit(1));