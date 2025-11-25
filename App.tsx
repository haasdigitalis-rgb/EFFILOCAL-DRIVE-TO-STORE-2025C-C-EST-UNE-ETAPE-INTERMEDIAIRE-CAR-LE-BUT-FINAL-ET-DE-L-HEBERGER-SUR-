22:56:27.675 Running build in Washington, D.C., USA (East) – iad1
22:56:27.676 Build machine configuration: 2 cores, 8 GB
22:56:27.685 Cloning github.com/haasdigitalis-rgb/EFFILOCAL-DRIVE-TO-STORE-2025C-C-EST-UNE-ETAPE-INTERMEDIAIRE-CAR-LE-BUT-FINAL-ET-DE-L-HEBERGER-SUR- (Branch: main, Commit: 6f7bbac)
22:56:27.686 Skipping build cache, deployment was triggered without cache.
22:56:28.132 Cloning completed: 446.000ms
22:56:28.495 Running "vercel build"
22:56:28.893 Vercel CLI 48.10.5
22:56:29.508 Installing dependencies...
22:56:49.590 
22:56:49.591 added 135 packages in 20s
22:56:49.591 
22:56:49.591 25 packages are looking for funding
22:56:49.591   run `npm fund` for details
22:56:49.640 Running "npm run build"
22:56:49.755 
22:56:49.756 > effilocal-site@0.0.0 build
22:56:49.756 > vite build
22:56:49.757 
22:56:50.059 [36mvite v5.4.21 [32mbuilding for production...[36m[39m
22:56:50.122 
22:56:50.123 /index.css doesn't exist at build time, it will remain unchanged to be resolved at runtime
22:56:50.125 transforming...
22:56:50.197 [32m✓[39m 6 modules transformed.
22:56:50.201 [31mx[39m Build failed in 114ms
22:56:50.202 [31merror during build:
22:56:50.202 [31mCould not resolve "./components/Navbar" from "App.tsx"[31m
22:56:50.202 file: [36m/vercel/path0/App.tsx[31m
22:56:50.203     at getRollupError (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:401:41)
22:56:50.203     at error (file:///vercel/path0/node_modules/rollup/dist/es/shared/parseAst.js:397:42)
22:56:50.203     at ModuleLoader.handleInvalidResolvedId (file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21590:24)
22:56:50.203     at file:///vercel/path0/node_modules/rollup/dist/es/shared/node-entry.js:21550:26[39m
22:56:50.220 Error: Command "npm run build" exited with 1
