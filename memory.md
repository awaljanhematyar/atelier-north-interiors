# Project Memory: Atelier North Interiors

## Status
Phase 0A review and Phase 0B initialization completed and verified on 2026-10-21 (Asia/Kabul). Phase 1 has not started. This file is a handoff log; the observations below describe the checks actually executed.

## Locked decisions
- Brand: Atelier North Interiors.
- Market: Vancouver, British Columbia.
- Stack: React + Vite + JavaScript + Tailwind CSS + React Router + Lucide.
- Demo-first implementation with no backend or real transaction claims.
- User approved the review decisions: add /consultation as a demo-only request flow, retain clearly fictional Testimonials, use transient form state, and split Phase 0 into review (0A) and setup (0B).
- Approved testing tooling: Vitest, React Testing Library, jest-dom and jsdom.
- Future consultation dates use America/Vancouver; no real availability, submissions or reservations. Contact/consultation details must not be persisted.
- Future accessibility target: WCAG 2.2 AA; responsive checks at 375/768/1024/1440px. No compliance claim has been verified yet.
- No cart/session context is needed. Future project navigation uses stable ordering and disabled boundaries; related projects prefer the same category and filters use a category query parameter.

## Phase tracker
- [x] Phase 0: specification and setup (0A review and 0B initialization)
- [ ] Phase 1: visual system and shell
- [ ] Phase 2: pages and content
- [ ] Phase 3: interactions
- [ ] Phase 4: accessibility and edge cases
- [ ] Phase 5: QA
- [ ] Phase 6: deployment and handoff

## Current task
Phase 0B complete. Stop and wait for explicit Phase 1 approval. No Git repository was initialized, no commits or GitHub repository were created, and nothing was deployed.

## Completed setup
- Reread all six planning documents completely before editing; the root initially contained only these six files and no README.
- Created a Vite/React JavaScript JSX project directly in the existing directory without a scaffold overwrite operation.
- Added a minimal main landmark, project heading and truthful demo/setup disclosure. No website pages, premium design, fonts or project records implemented.
- Added React StrictMode and BrowserRouter at the entry point; actual route skeletons remain Phase 1 work.
- Configured official Tailwind Vite plugin and CSS import; no legacy Tailwind/PostCSS config. Brand tokens deferred to Phase 1.
- Prepared architecture directories with .gitkeep files, package scripts, exact direct dependency versions and package-lock.json.
- Configured ESLint flat config with recommended JavaScript, Hooks and Fast Refresh rules; lint rejects warnings.
- Configured Vitest/jsdom, React Testing Library, jest-dom matchers and automatic cleanup. Two setup smoke tests only.
- Added initial README, .gitignore and future Vercel SPA rewrite configuration. Vercel behavior is not deployed or verified.
- Compared SHA-256 hashes of PRD.md, architecture.md, design.md, rules.md and phases.doc.md: all unchanged. memory.md is the only planning document updated, as requested.

## Runtime and installed direct dependencies
- Node.js 24.16.0; npm 11.13.0. Actual runtime: C:\Program Files\nodejs. package.json requires Node >=24.16.0 <25 and npm >=11 <12.
- Runtime: react 19.3.1, react-dom 19.3.1, react-router-dom 7.18.4, lucide-react 1.61.0.
- Build/style: vite 8.3.5, @vitejs/plugin-react 6.1.2, tailwindcss 4.3.3, @tailwindcss/vite 4.3.3.
- Lint: eslint 10.13.0, @eslint/js 10.0.1, globals 17.13.0, eslint-plugin-react-hooks 7.1.1, eslint-plugin-react-refresh 0.5.7.
- Tests: vitest 5.0.5, @testing-library/react 16.3.3, @testing-library/dom 10.4.2, @testing-library/jest-dom 7.0.1, jsdom 30.1.3.
- Registry metadata confirmed Vite/plugin-react require Node ^20.19.0 or >=22.12.0; selected Router requires Node >=20 and React/React DOM >=18; selected Vitest accepts Node ^24.0.0 and Vite ^8.0.0; selected Tailwind plugin accepts Vite ^8. Node 24.16 and the installed set satisfy these requirements. npm ls reported no invalid peer dependencies.

## Verified commands and results
Date: 2026-10-21 (Asia/Kabul). PowerShell working directory for all project commands: D:\atelier-north-interiors.

Bare node/npm initially resolved to inaccessible Windows system shims. The successful commands used explicit executables and this session-local PATH prefix:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\node.exe' --version
& 'C:\Program Files\nodejs\npm.cmd' --version
```

Results: v24.16.0 and 11.13.0.

Compatibility queries executed (outside the sandbox after registry DNS failed inside it):

```powershell
& 'C:\Program Files\nodejs\npm.cmd' view vite version engines --json
& 'C:\Program Files\nodejs\npm.cmd' view @vitejs/plugin-react version peerDependencies engines --json
& 'C:\Program Files\nodejs\npm.cmd' view react-router-dom version peerDependencies engines --json
& 'C:\Program Files\nodejs\npm.cmd' view @tailwindcss/vite version peerDependencies --json
& 'C:\Program Files\nodejs\npm.cmd' view vitest version engines peerDependencies --json
```

Installation commands executed successfully outside the sandbox:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' install react@19 react-dom@19 react-router-dom@7 lucide-react --save-exact --fetch-retries=0 --fetch-timeout=30000
& 'C:\Program Files\nodejs\npm.cmd' install -D vite @vitejs/plugin-react tailwindcss @tailwindcss/vite eslint @eslint/js globals eslint-plugin-react-hooks eslint-plugin-react-refresh vitest @testing-library/react @testing-library/dom @testing-library/jest-dom jsdom --save-exact --fetch-retries=0 --fetch-timeout=30000
```

Results: runtime install added 8 packages; tooling install added 222. Final audit covered 231 packages and reported 0 vulnerabilities at installation time.

Verification commands:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' ls --depth=0
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --host 127.0.0.1 --port 5173 --strictPort
& 'C:\Program Files\nodejs\npm.cmd' run preview -- --host 127.0.0.1 --port 4173 --strictPort
```

- Build: succeeded, Vite 8.3.5, 24 modules transformed, 657ms. Generated dist/index.html and hashed JS/CSS assets.
- Lint: succeeded with no errors or warnings.
- Tests: 1 file passed, 2 tests passed, 6.43s. Verified router-wrapped accessible shell and visible demo/unfinished-scope disclosure.
- Dependency tree: all direct versions listed above, no invalid/extraneous errors.
- Dev: initial sandbox bind failed with EACCES. Approved outside-sandbox retry started in 1061ms on http://127.0.0.1:5173/. Vite warned of an existing wildcard listener but could bind this specific loopback address; that other listener was not inspected or modified.
- HTTP checks used Invoke-WebRequest -UseBasicParsing for http://127.0.0.1:5173/, /src/main.jsx and /src/index.css. All returned 200; root title, React entry and generated max-w-3xl Tailwind utility were confirmed. Sandbox socket checks initially failed and were rerun outside it.
- Production preview started on http://127.0.0.1:4173/. Invoke-WebRequest -UseBasicParsing returned 200 for root, /assets/index-Bztqz_n2.js and /assets/index-DFcUTKu8.css; correct root title confirmed.
- Both servers started for this task were stopped with Ctrl+C after verification. Their interrupted process exit code 1 is an intentional shutdown, not a build/test failure.
- Browser visual inspection, deployed deep links, full accessibility checks, feature tests and npm ci have not been executed.

## Known issues / blockers
- No remaining Phase 0B application/tooling failures verified.
- Environment: bare node/npm command resolution needs the actual Node installation in PATH; explicit npm.cmd invocation works. No global system settings were changed.
- Sandbox networking and listening restrictions require approved outside-sandbox commands for registry access and localhost verification.
- Port 5173 has an existing wildcard listener warning. If local startup conflicts later, select another available port; do not stop unrelated processes.
- Vercel rewrite, social previews, indexing policy and true HTTP 404 behavior remain unverified and belong to later deployment/SEO work. Initial HTML remains noindex.

## Change log
- Initial planning documents created; no app code implemented.
- 2026-10-21: Completed approved Phase 0B only; added setup shell, tooling, tests, docs and verified results above. Existing specification files preserved. No access to unrelated projects.

## Next session handoff
Wait for explicit Phase 1 approval. Then reread the six planning documents and README; implement visual tokens/fonts, responsive navigation/footer, shared primitives and route skeletons. Keep approved Consultation and Testimonials decisions above. Do not assume future pages, content, accessibility or deployment are complete.
