# Project Memory: Atelier North Interiors

## Status
Phases 0A, 0B, 1 and 2 completed and verified on 2026-10-21 (Asia/Kabul). Phase 3 has not started. This file is a handoff log; the observations below describe checks actually executed.

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
- [x] Phase 1: visual system and shell
- [x] Phase 2: pages and content
- [ ] Phase 3: interactions
- [ ] Phase 4: accessibility and edge cases
- [ ] Phase 5: QA
- [ ] Phase 6: deployment and handoff

## Current task
Phase 2 complete. Stop and wait for explicit Phase 3 approval. The existing public GitHub repository is connected to local main. No new GitHub repository was created and nothing was deployed.

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
Wait for explicit Phase 3 approval. Then reread the planning documents and README; implement category filtering, next/previous navigation, interactive accessible gallery, FAQ accordion and validated local-only enquiry/consultation simulations. Use the existing projects/category data, static gallery/FAQ structures and disabled form layouts. Keep consent, Vancouver timezone and no-real-submission decisions above. Do not assume a full accessibility audit or deployment is complete.

## Phase 1 implementation — 2026-10-21 (Asia/Kabul)
- Read PRD, architecture, design, rules, phases, memory and README completely before edits. CODEX_MASTER_PROMPT.md was absent. Started from a clean main at 7e1be58c57297b49655d97e1ed3701477c95baaa.
- Implemented exact brand color tokens, font families, a 4px spacing base, 640/768/1024/1280px breakpoints, 80rem container, responsive gutters/section spacing and clamp-based headings in Tailwind v4 CSS-first theme/global styles.
- Locally hosted Latin variable WOFF2 subsets of Cormorant Garamond and Inter (400–600 normal), with font-display: swap, fallbacks, source provenance and SIL licenses. No new packages or package/lockfile changes.
- Added layout: Brand, Header, Footer and AppLayout; UI: Container, Button, SectionHeading, PageHeader and EmptyState. Added separate navigation/page-skeleton data modules, shared RoutePage skeleton and NotFoundPage.
- Sticky desktop navigation from 1024px; smaller widths use an inline disclosure with native keyboard behavior, aria-expanded/controls, hidden state, Escape focus return, automatic close on navigation/focus exit/breakpoint change. It is not a modal and does not trap focus.
- Route changes focus main and reset scroll. Added skip link, semantic landmarks, visible focus, active navigation state, decorative icon hiding, motion reduction and persistent fictional-demo disclosure.
- Implemented all nine route patterns: /, /projects, /projects/:slug, /services, /about, /testimonials, /consultation, /contact and *. Route skeletons have unique headings/document titles; custom 404 provides working home/project recovery links.
- Updated index metadata and added an original SVG favicon after browser console checks found a missing default favicon request. No full pages, project records, testimonials, photography, contact forms or booking functionality were implemented.
- Modified existing files: src/App.jsx, src/App.test.jsx, src/index.css, src/test/setup.js, index.html, README.md and memory.md. Added files under src/components/layout, src/components/ui, src/data/navigation.js, src/data/pageSkeletons.js, src/pages, public/fonts and public/favicon.svg. The five specification files remain unchanged.

### Phase 1 verification
All commands ran in D:\atelier-north-interiors using the session PATH prefix and explicit npm.cmd executable recorded above.

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --host 127.0.0.1 --port 5175 --strictPort
& 'C:\Program Files\nodejs\node.exe' tmp/phase1-browser.cjs
git diff --check
```

- Final build after separating skeleton data: exit 0, 1954 modules, 3.75s; dist/index.html 0.71kB, CSS 14.22kB and JS 272.41kB before gzip. Vite printed a non-blocking CSS plugin timing diagnostic. Build artifacts remain ignored.
- Final lint: exit 0, no errors or warnings. Final tests: exit 0, 15 tests passed in 1 file, 7.90s. Coverage includes landmarks/disclosure, all route patterns, navigation/active state, skip and route focus, mobile open/close/Escape/focus-exit/navigation, and 404 recovery.
- Dev server: Vite 8.3.5 started successfully in 1397ms at http://127.0.0.1:5175/ using approved outside-sandbox execution. Stopped with Ctrl+C after checks (intentional interrupted exit 1).
- Browser verification used the already bundled Playwright 1.62.1 runtime with headless Microsoft Edge; no browser/test dependency was added to the project. Temporary script, JSON results and screenshots live in ignored tmp/ and are not committed.
- Browser result: all 36 combinations of nine routes and 375/768/1024/1440px passed overflow, single-main, heading and local-font checks. Keyboard Enter/Space/Tab/Escape, skip link, route focus, mobile auto-close, breakpoint reset, sticky desktop header, footer navigation, reduced-motion transitions and 404 home recovery passed. No page/console errors or failed resource requests in the final run.
- Viewed home screenshots at all four widths and the keyboard-focused mobile menu. Increased footer disclosure text to 12px following visual review. Charcoal/ivory contrast measured 14.20:1; charcoal/beige 9.81:1 (also covers reversed primary-button colors). Sage/taupe remain decorative.
- Browser-script debugging: fixed a locator tied to the changing menu label and added waits for React route updates. These were verification-script issues; the final run passed. Missing favicon was an app resource issue and was fixed.
- No full assistive-technology audit, Safari/Firefox run or deployed Vercel checks performed. No WCAG certification claimed. HTML remains noindex.
- Git diff, staged credential/path scan, normal commit and push verification are performed after this record is written; final commit hash and synchronization results are reported after execution rather than embedded self-referentially here.

## GitHub setup verification — 2026-10-21 (Asia/Kabul)
- User explicitly authorized initialization, committing and pushing to the existing public repository https://github.com/awaljanhematyar/atelier-north-interiors.git.
- Working directory verified as D:\atelier-north-interiors. Read rules.md and memory.md. Git 2.43.0.windows.1 found no existing local repository or origin.
- Before initialization, git ls-remote --symref against the supplied URL returned no refs (exit 0); GitHub API confirmed public visibility, default branch main and repository size 0. No remote history was overwritten.
- Ran git init -b main and git remote add origin https://github.com/awaljanhematyar/atelier-north-interiors.git.
- Expanded .gitignore to exclude all .env files, local credentials/private keys and temporary/editor recovery files, in addition to node_modules and dist. Verified representative paths with git check-ignore. No secret files were created for these checks.
- Staged only explicit source, config, docs, public and src paths. Reviewed 29 staged files with git diff --cached --stat, --name-only and the source/config diff. git diff --cached --check passed.
- Scanned staged text for common GitHub/API/AWS credential formats, private-key headers, embedded URL credentials and secret/password/token assignments. git grep --cached -I -l -E returned 1 (no matches). Forbidden path check found no dependencies, build outputs, .env files, secret directories, private-key or temporary files. This is a targeted scan, not a universal guarantee against unknown secret formats.
- Rechecked git ls-remote origin immediately before committing: still empty.
- Initial commit: d0e6ddca3bcaab76fcd40c425218205028b0ca69, message: chore: initialize Atelier North Interiors project.
- git push -u origin main succeeded with the existing authorized Git authentication. No passwords/tokens requested or exposed; no force push or history rewrite.
- git status --short --branch showed clean main tracking origin/main; git rev-list --left-right --count main...origin/main returned 0 0; git ls-remote origin refs/heads/main matched the initial commit.
- GitHub API file list matched all 29 local committed files, including all six planning documents. Git commit API matched the initial commit and tree ef1961966ccfcb1d217d7cf9c070e181ab92cc9d; all 29 GitHub blob hashes matched local blobs.
- An initial tree-endpoint comparison using a commit SHA gave an inconsistent response SHA. Resolved by reading the Git commit's actual tree SHA, fetching that tree explicitly and comparing every blob: no content mismatch or unexpected repository change found.
- Sandbox Git index writes and networking were denied; approved outside-sandbox commands completed staging, commit, push and remote verification. Git warned of normal Windows LF/CRLF normalization; no specification content was edited.
- Updated README's Git status and this handoff record after the verified initial push. This documentation update is intended as a separate follow-up commit; its final hash and final push/sync verification are reported to the user after execution, avoiding a self-referential commit hash in this file.
- No application feature changes, no access to unrelated projects and no Phase 1 work. Remaining local environment notes above still apply.

## Phase 2 implementation — 2026-10-21 (Asia/Kabul)
- Read CODEX_MASTER_PROMPT.md if present (absent), PRD, architecture, design, rules, phases, memory and README before edits. Started from clean main at e7fee9c1735c5a93eb2781c71090ba72fb8aa5b1.
- Preserved Phase 1 tokens, local fonts, shell, navigation, focus management and reduced-motion rules. Added content.css through a single import in index.css; no dependency or lockfile changes.
- Added twelve fictional concept records in src/data/projects.js, three per residential/commercial/hospitality/renovations category. Each has a unique slug, title, explicitly imagined location, original brief, design concept, proposed scope, materials and three reference image records with alt text, source, photographer and licence URL.
- Implemented Home (editorial hero, introduction, featured projects, services overview, philosophy and consultation CTA); Projects (all twelve cards and static category index); all twelve dynamic details (hero, narrative, concept, scope/materials, static reference gallery and two related previews); Services (four offerings, process and static FAQs); About (fictional story/values/approach); Testimonials (three clearly labelled fictional samples).
- Contact and Consultation now have labelled form previews in disabled fieldsets with disabled submit buttons and explicit no-collection/no-submission notices. Consultation includes preferred date/time and America/Vancouver context, with no availability or reservation claims. Contact uses a reserved .example email and no real office address.
- All fictional work, testimonials and illustrative photography are disclosed at relevant content points as well as the existing footer. No credentials, awards, verified reviews, real clients, fees, real submissions, backend or database added.
- Unknown project slugs use the existing custom 404. Removed obsolete RoutePage.jsx and pageSkeletons.js. Category filtering, FAQ accordion, lightbox/gallery controls, next/previous navigation, form validation and demo confirmation remain Phase 3 work.
- Created: src/data/projects.js, projects.test.js, studio.js; src/pages/HomePage.jsx, ProjectsPage.jsx, ProjectDetailPage.jsx, ServicesPage.jsx, AboutPage.jsx, TestimonialsPage.jsx, EnquiryPage.jsx, CorePages.test.jsx; src/components/features/ProjectCard.jsx, ConsultationCTA.jsx; src/components/ui/Photo.jsx; src/hooks/usePageTitle.js; src/content.css; IMAGE_CREDITS.md; 24 local WebP assets under public/images.
- Modified: src/App.jsx, src/App.test.jsx, src/index.css, README.md and memory.md. Deleted only the two obsolete skeleton files listed above. PRD.md, architecture.md, design.md, rules.md and phases.doc.md remain unchanged.

### Photography and licensing
- Checked the official Pexels License and individual source pages before incorporating images. Free personal/commercial use and modification are allowed; attribution is not required, but is displayed beside photos. Source register, photographers, checked date, restrictions and download recipe are in IMAGE_CREDITS.md.
- Twelve independent photos, two responsive WebP widths each (640 and 1600): 24 assets totalling 2,488,136 bytes. Downloaded through Pexels image resizing/compression with approved outside-sandbox network access after sandbox DNS failed.
- Local images use srcSet/sizes, lazy supporting-image loading, eager hero loading, descriptive alt text and an accessible in-layout fallback. No external image requests at runtime.
- Photos are separate visual references and may be reused across concepts; galleries expressly do not represent one real completed project. No studio authorship, client relationship or endorsement is implied.

### Phase 2 verification
PowerShell working directory: D:\atelier-north-interiors. Used the session PATH prefix and explicit Node/npm executable paths recorded earlier.

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --host 127.0.0.1 --port 5176 --strictPort
& 'C:\Program Files\nodejs\node.exe' tmp/phase2-browser.cjs
git diff --check
```

- Final build: exit 0, Vite 8.3.5, 1964 modules, 4.32s. HTML 0.71kB, CSS 23.98kB, JavaScript 315.47kB (96.22kB gzip). Assets in public are copied into dist. No deployment performed.
- Final lint: exit 0, no errors or warnings.
- Final tests: exit 0, 47 passed in 3 files, 23.51s. Tests cover all twelve complete project records, unique slugs/category counts, local WebP signatures and responsive variants, detail content for every project, unknown slugs, core routes, project links, navigation/focus, fictional testimonials, static FAQs, disabled labelled forms and image fallback/recovery. Vitest printed informational jsdom environment timing advice, not a test failure.
- First test run exposed an accessible-heading whitespace issue at a hero line break (fixed). Corrected two test harness issues: used NodeURL to avoid Vite asset-URL transformation, and scoped the static-FAQ assertion to the FAQ region rather than the header menu. All failures resolved before the final passing run.
- Dev server started successfully in 1747ms at http://127.0.0.1:5176/, using approved outside-sandbox execution. Stopped with Ctrl+C after verification (intentional interrupted exit 1).
- Used bundled Playwright with headless Microsoft Edge, without adding a package. The ignored tmp/phase2-browser.cjs checked 51 layouts: ten representative routes at 375/768/1024/1440px plus the other eleven valid details at 1440px.
- Browser results: no horizontal overflow, broken/missing-alt images, duplicate h1 or unexpected console/page/resource errors during normal navigation. All project details loaded; card navigation, route focus, mobile menu navigation, disabled form inputs/buttons, homepage section link and reduced motion passed.
- Intentionally blocked a photo request to verify accessible fallback rendering; the resulting deliberate network error is separate from normal-navigation checks. Unit tests also verify recovery when a different image source renders.
- Additional final 1440px browser anchor check: sticky header bottom 113px, selected-projects top 128.1875px, so heading/section are not obscured.
- Viewed the 375px home, 768px consultation, 1440px home/detail screenshots and the twelve-image contact sheet. Remaining generated screenshots/results are local ignored QA artifacts, not repository content.
- No Safari/Firefox run, full screen-reader audit, automated WCAG certification or deployed deep-link verification performed. Existing noindex policy remains.

### Phase 2 handoff and Git
- No known remaining Phase 2 application failures. Future enabled form borders/error/consent handling, date validation and simulated confirmations require Phase 3 work; no real booking/submission is implemented.
- Remote-history check, staged secret/path scan, commit and normal push are performed after this verified implementation record is written. Final commit hash and remote synchronization are reported after execution to avoid self-referential hashes here.
- Requested commit message: feat: build interior design pages and project content.
- No unrelated project access, no force push and no Phase 3 work.
