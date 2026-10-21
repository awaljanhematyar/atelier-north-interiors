# Project Memory: Atelier North Interiors

## Status
Phases 0A, 0B, 1, 2, 3 and 4 were verified on 2026-10-21. Phase 5 local QA and optimization were verified across 2026-10-21–22 (Asia/Kabul), with the performance, browser and assistive-technology limitations recorded below. This file is a handoff log; observations describe checks actually executed, not deployed production guarantees.

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
- [x] Phase 3: interactions
- [x] Phase 4: accessibility and edge cases
- [x] Phase 5: local QA and optimization, with documented limitations
- [ ] Phase 6: deployment and handoff

## Current task
Phase 5 local verification is finished; the interrupted work was preserved and the WebKit overflow corrected. Normal Git commit/push verification closes this task after this record is written. Stop before Phase 6 and wait for explicit approval. No deployment has occurred. See the final Phase 5 record for measured performance limits and remaining hosting/assistive-technology checks.

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
Wait for explicit Phase 6 approval. Reread the planning documents and README, confirm the real production origin and indexing policy, then perform the separately approved deployment and hosted-route/social-preview checks. Review the Phase 5 performance and assistive-technology limitations below. Preserve the local-only demo privacy model; do not assume deployment has occurred.

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

## Phase 3 implementation — 2026-10-21 (Asia/Kabul)
- Read the attached user request and required documents before editing; CODEX_MASTER_PROMPT.md was absent. Inspected the implementation and verified clean main at 9494ec26af51adedae464a7aa5d8a49524f3325c.
- Added All Projects plus four category buttons with aria-pressed, accurate 12/3 counts, live result status and an empty-state branch. Category query parameters support direct links/history without reloads; unknown categories safely show all. Query-only changes preserve filter focus/scroll; pathname navigation retains main focus/reset behavior.
- Added native showModal gallery with full descriptions/credits, cyclic previous/next images, Left/Right keyboard arrows, Escape/visible close, Tab boundary management, focus restoration, modal background isolation and scroll locking. Missing/failed images have accessible fallback; project changes reset gallery state.
- Added Previous/Next Project links in source order with non-actionable explanations at first/last boundaries. Related previews prioritize the same category, then fill remaining slots in source order.
- Converted existing FAQs to independently expandable buttons with aria-expanded, aria-controls and labelled hidden answer panels. Existing questions/content preserved except the obsolete consultation preview-only description, updated to match the local demo.
- Activated shared controlled Contact/Consultation demo forms with required name/email/category/message/acknowledgment; consultation adds date/time preferences. Validation checks trimmed empty values, basic email format, allowed categories/windows, true calendar dates/leap years and dates not before Vancouver today.
- Errors retain input, identify fields with aria-invalid/describedby, announce an error summary and focus the first invalid field. Completion is synchronous, duplicate-guarded and clears values; Start again/Clear form reset and focus the full-name field. Switching form routes resets form state.
- Exact consultation confirmation: This is a demo. No appointment has been booked. Contact states no message has been delivered. No form network requests, persistence, email, calendar, backend, artificial delay or spinner. Sample data stays only in component memory until cleared or unmounted.
- Form fields now have charcoal borders, 16px text, visible focus, dashed invalid state and textual errors. Gallery/filter/FAQ controls retain the brand palette and reduced-motion rules. Clipped the unfocused skip link to avoid off-viewport full-page capture artifacts while preserving keyboard access.
- Created: components/features/{DemoEnquiryForm,FAQAccordion,GalleryDialog,ProjectFilters,ProjectNavigation}.jsx; components/ui/FormField.jsx; interactions.css; utils/{portfolio,validation}.js and their tests; pages/Interactions.test.jsx.
- Modified: pages/{ProjectsPage,ProjectDetailPage,ServicesPage,EnquiryPage,CorePages.test}.jsx; components/layout/AppLayout.jsx; components/ui/Photo.jsx; data/studio.js; test/setup.js; index.css; README.md; memory.md.
- Preserved all twelve project records, IMAGE_CREDITS.md, photography/fonts, specification documents and dependency manifests. No packages added, no unrelated project access, no redesign or Phase 4 work.

### Vancouver date finding
- Date tests initially assumed a November 2026 return to UTC-8. Runtime Intl correctly retained UTC-7. Verified B.C.'s 2026 permanent daylight-time change against https://news.gov.bc.ca/releases/2026AG0013-000209 and https://www2.gov.bc.ca/gov/content/governments/celebrating-british-columbia/daylight-saving-time.
- Corrected the test to cover historical 2025 winter boundaries and current 2026 boundaries, and removed the old seasonal-time claim in Contact copy. Calculation still uses America/Vancouver through Intl, with no hard-coded offset. Browser/runtime timezone data must remain current.

### Phase 3 verification
Working directory for commands: D:\atelier-north-interiors. Used the session PATH prefix from earlier setup records.

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --host 127.0.0.1 --port 5177 --strictPort
& 'C:\Program Files\nodejs\node.exe' tmp/phase3-browser.cjs
git diff --check
```

- Final build: exit 0, Vite 8.3.5, 1973 modules, 4.13s. HTML 0.71kB, CSS 28.48kB (6.62kB gzip), JS 326.15kB (99.96kB gzip). A non-blocking CSS plugin timing diagnostic was printed.
- Final lint: exit 0, no errors or warnings.
- Final tests: exit 0, 85 passed across 6 files, 44.26s. Existing coverage retained, with assertions for previously static/disabled features updated for their newly approved behavior. Added filtering, galleries/focus/fallback, neighbours/related ordering, all FAQ controls, contact/consultation errors/success/reset/duplicate guard, no fetch/XHR/storage writes, leap years and named-zone date boundaries.
- jsdom lacks modal dialog methods; test-only stubs cover open/close while real-browser checks verify native modality, background isolation and keyboard focus. Vitest's jsdom timing advice is informational. No tests were deleted.
- Initial suite had 84 passes and one stale winter-time expectation; corrected after verifying the provincial change. Subsequent suites passed all 85.
- Dev server started successfully in 2382ms at http://127.0.0.1:5177/ with approved outside-sandbox execution; stopped via Ctrl+C after checks (intentional interrupted exit 1).
- Bundled Playwright/headless Microsoft Edge final browser pass: 32 responsive state checks (filters, gallery, navigation, FAQ, both forms' error/success states at 375/768/1024/1440px). No horizontal overflow or unexpected console/page/resource errors.
- Browser verified Enter/Space filters, active counts, query/history behavior and retained focus; native modal :modal state, blocked background focus, internal Tab/Shift+Tab cycling, arrows/Escape/close and focus return; first/last/middle project navigation; FAQ keyboard toggling; invalid email/past-date feedback; input retention, confirmation, empty reset and focus.
- Observed zero external requests, zero form-completion requests and empty local/session storage in the browser. Unit spies likewise saw no fetch, XMLHttpRequest send or Storage.setItem calls during completion.
- Initial browser verification had a script timing race when categories both returned three cards; corrected the script to wait for the active category rather than the unchanged count. Final browser passes succeeded.
- Viewed responsive gallery/filter/form screenshots; regenerated clean captures after scroll reset and skip-link clipping. Scripts, results and screenshots are in ignored tmp/ and are not staged.
- Source scan excluding tests found no localStorage/sessionStorage, fetch, XMLHttpRequest, sendBeacon or setTimeout usage in application code.

### Limitations, Git and next phase
- Modern browser native dialog support and current Intl timezone data are required. No full screen-reader audit, Safari/Firefox verification or WCAG certification claimed. Email checking is basic client-side demo validation, not server validation or address verification.
- No real enquiries, availability, appointments or confirmation emails. No data survives reset/completion/navigation by design. No deployment performed.
- Phase 4 recommendations: broaden assistive-technology/cross-browser testing, review unusual input and missing-data scenarios, empty filters, keyboard order and image failure states. Wait for explicit approval before that work.
- Final staged path/credential scan, commit and normal push follow this verified record. Report the resulting commit hash and local/remote synchronization to the user after execution, avoiding a self-referential commit hash here.
- Requested commit: feat: implement interactive portfolio and demo forms. No force push or history rewrite.

## Phase 4 audit and hardening — 2026-10-21 (Asia/Kabul)
- Read the attached Phase 4 request and PRD, architecture, design, rules, phases, memory, README and IMAGE_CREDITS completely before source edits. CODEX_MASTER_PROMPT.md was absent. Inspected source and tests; started from clean main at eec8bac595ca3c9c7a6089169ad947bcb4c464e2. No approved-functionality conflicts required a scope change.
- Preserved the five specification documents, all twelve project records, IMAGE_CREDITS.md, image/font assets, dependency manifests and existing 85 tests. No new pages, business features, dependencies, persistence, backend, real submissions, bookings or deployment. No unrelated project was accessed.

### Confirmed defects and corrections
- 200% root text sizing caused horizontal overflow: body min-width:20rem became 640px, while header/footer/CTA flex items resisted wrapping. Removed the fixed page minimum, allowed long text and navigation/footer wrapping, constrained the brand/buttons and allowed CTA/project-navigation children to shrink. Kept the palette, fonts, layouts and desktop sticky navigation.
- Gallery heading was compressed beside the close button at 320px with 200% text. Visual review prompted header wrapping; controls can wrap and the dialog remains vertically scrollable. Added scroll margins for focusable controls below the sticky header.
- Native maxlength alone did not enforce controlled form input boundaries when bypassed. Shared limits now enforce name 120, email 254 and message/brief 5,000 characters in controls and validation. Oversized values retain accessible errors/input. Acknowledgment requires boolean true.
- Missing image arrays/credits and scope/material arrays could crash cards/details or render incomplete links. Added missing-data fallbacks, safe HTTPS Pexels credit links, default alt text, safe slug checks and null-collection handling. Home/About/Services tolerate absent reference images. Valid existing content is unchanged.
- Gallery selection could fall outside a shortened image array. Clamp the visible index, reject unusable image entries and retain an empty-gallery status with working dismissal.
- Created src/pages/Hardening.test.jsx. Modified src/components/features/{DemoEnquiryForm,GalleryDialog,ProjectCard}.jsx, src/components/ui/Photo.jsx, src/pages/{HomePage,AboutPage,ServicesPage,ProjectDetailPage}.jsx, src/utils/{portfolio,validation}.js and their tests, src/{index,content,interactions}.css, README.md and memory.md.

### Accessibility, keyboard and responsive evidence
- Code/DOM review covered semantic landmarks, heading structure, native controls, meaningful names/alt text, explicit labels, required/invalid state, error descriptions, alert/status semantics, FAQ expanded/controlled IDs, pressed filters, native modal isolation and reduced motion. Browser accessibility snapshot confirms form names, invalid state, associated error text and alert structure; this is not screen-reader testing.
- Bundled Playwright 1.62.1 with actual headless Microsoft Edge Chromium 155.0.4283.62; no package added. Firefox and WebKit launch attempts failed because their executables were absent. Chromium emulation was not represented as another browser engine.
- Broad browser audit: 162 layout/semantic checks passed. Matrix: nine representative routes x eight widths (320/375/390/768/1024/1280/1440/1920) x 100%/200% root font size = 144; plus eight enlarged menu/error/gallery states, nine 844x390 landscape routes and one very long heading/unbroken-description case. No horizontal document/dialog overflow. Reduced widths exercise reflow; native browser zoom was not operated.
- Separate interaction run: 64 states passed across all eight widths, covering filters/history/focus/counts, gallery arrows/Escape/close/Tab/Shift+Tab/focus return/background isolation, previous/next boundaries, FAQ Enter/Space, both forms' validation/completion/reset and reduced motion. No unexpected focus traps. Hidden menu content was excluded from keyboard navigation.
- Production keyboard checks additionally verified skip-link Enter/main focus, mobile Space/Enter/Escape/automatic closing, custom 404 recovery and visible first-error focus. Keyboard traversal, text entry, selection, submission and reset passed for both forms; the consultation date fixture was populated with Playwright native-date fill rather than typed through each date segment. Close controls retain focus indication when keyboard modality is active.
- Observed 86 text foreground/background/size/weight combinations passed applicable 4.5:1 normal/3:1 large-text thresholds; minimum observed text contrast 9.8067:1 (charcoal/beige), charcoal/ivory 14.2012:1. Sage/taupe decorations do not carry text or control meaning. Primary controls retain at least 44px height; consent has an associated clickable text label and inline credits remain inline links.
- Viewed 320px gallery, contact and 200% gallery captures plus the full desktop homepage. Corrected the enlarged gallery heading after visual inspection. Forced lazy photos to decode only in the final screenshot harness so below-fold imagery was visible; application lazy loading remains intact.
- NVDA was not running or installed at either standard Program Files location. NVDA operation untested; VoiceOver/macOS and TalkBack/Android unavailable. No spoken-announcement results, formal WCAG certification or full cross-browser support claim.

### Form, date, project and asset edge cases
- Automated tests cover whitespace-only/trimmed values, basic invalid emails, exact and over-limit lengths, missing categories/time/consent, invalid/past/current/future calendar dates, leap-year/century rules, repeated submission, error/input retention, error reset and success reset. Existing duplicate-guard and no-fetch/XHR/storage spies remain passing.
- Added Vancouver date tests across 2025 spring/fall clock transitions and the 2026 spring date boundary, retaining 2026 permanent daylight-time coverage. A browser with visitor timezone Asia/Tokyo and clock 2026-10-21T06:59:59Z correctly used Vancouver date 2026-10-20 and accepted a future preference. No visitor-local date calculation or hard-coded zone offset introduced. Current timezone data is still required.
- All twelve records/unique slugs/categories/details/ordering/related links remain covered. Missing scope/materials/images/title, unsafe slugs, unknown filters, empty galleries and changing gallery arrays have regression coverage. Broken image requests were deliberately aborted in a separate browser page: page and modal fallbacks appeared and Escape worked; these deliberate failures are separate from normal error-free navigation.
- Decoded all 24 local WebPs; widths matched 640/1600 variants, heights ranged 427–2400px. Local fonts loaded, favicon returned 200, responsive srcSet/sizes and eager/lazy priorities remain. Frames retain CSS aspect ratios. Image credits/licensing and asset bytes were not changed; no new imagery introduced.

### Security/privacy and verification commands
Working directory D:\atelier-north-interiors. Each npm command used the existing runtime PATH prefix:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\npm.cmd' audit --json --fetch-retries=0 --fetch-timeout=20000
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --host 127.0.0.1 --port 5178 --strictPort
& 'C:\Program Files\nodejs\npm.cmd' run preview -- --host 127.0.0.1 --port 4178 --strictPort
& 'C:\Program Files\nodejs\node.exe' tmp/phase4-audit.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase4-interactions.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase4-form-edges.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase4-final-smoke.cjs
git diff --check
```

- Final build exit 0: Vite 8.3.5, 1973 modules, 3.95s; HTML 0.71kB, CSS 28.89kB (6.71kB gzip), JS 327.37kB (100.31kB gzip). Earlier builds emitted informational plugin-timing diagnostics; final build had no blocking errors.
- Final lint exit 0: no errors/warnings. Final tests exit 0: 95 tests passed across seven files, 54.35s. Original 85 tests retained; ten additional regression cases. Vitest printed informational jsdom timing advice. Earlier intermediate runs also passed 95 tests.
- Dev started successfully in 1467ms on 127.0.0.1:5178. Preview started on 127.0.0.1:4178. Both task-owned servers were stopped with Ctrl+C after verification (intentional interrupted exit 1). Production smoke: 40 combinations of twenty routes (all twelve details included) at 320/1440px passed; images decoded, single h1, no overflow. Keyboard/menu/skip/404, visible error focus and missing-image fallback checks passed.
- Normal browser runs recorded zero unexpected console/page/resource errors and zero external requests. Form completion recorded zero requests, empty local/session storage and unchanged query-free URLs. Source review found no unsafe HTML insertion, submission transport, console logging or personal-data storage. React renders text; external image credits use noreferrer and an allowlisted HTTPS host/path.
- npm audit initially failed on sandbox DNS; approved network retry succeeded with zero known vulnerabilities across 276 audited dependency entries. No automatic updates or manifest changes. This is a registry snapshot, not a guarantee against undisclosed vulnerabilities.
- Browser scripts/results/screenshots/accessibility snapshot are ignored local tmp/ QA artifacts, not application dependencies or committed content. One audit assertion incorrectly expected keyboard focus styling in pointer mode; corrected to Tab/Shift+Tab. One preview locator used the menu's old accessible name after opening; corrected to a stable toggle locator. Final runs passed; neither harness issue required an application workaround.

### Git and Phase 5 handoff
- Reviewed complete source/test/docs diff and verified protected specifications, credits, project records and manifests have no diff. Remote main matched the starting Phase 3 commit before staging. Staged path/credential scan passed across 18 intended files, and git diff --cached --check passed. Normal commit/push and final hash/synchronization verification follow this record; the resulting hash is reported after execution to avoid self-reference.
- Requested commit: fix: harden accessibility and edge cases. No force push or history rewriting.
- No known critical application issue remains in tested scope. Limitations: unavailable Firefox/WebKit and assistive technologies, untested native browser zoom/physical touch devices, modern native dialog/current Intl timezone data required, basic client email checking and no formal accessibility certification. Local preview does not verify Vercel rewrites or deployed HTTP status behavior.
- Phase 5 recommendation after explicit approval: run Firefox/WebKit and actual NVDA/VoiceOver/TalkBack where available; test native zoom/device input; then perform approved performance/metadata/QA work. Keep noindex/publication policy and deployment deep-link checks for their approved later scope. Do not begin Phase 5 or deploy now.

## Phase 5 recovery and optimization — 2026-10-21–22 (Asia/Kabul)

### Scope and recovery
- Resumed the interrupted working tree on main at 5f710542ff9670e1b099d04845ce5349bea1ad71. Reread the planning documents, README, image credits and attached Phase 5 request, then inspected Git status, diff and preserved QA artifacts. CODEX_MASTER_PROMPT.md/AGENTS.md were absent. No reset, discard, scaffold restart, unrelated-project access or deployment.
- Preserved existing Phase 5 route metadata, generated static heads, route-level lazy loading, font/image hints, responsive image derivative and tests. Kept the React/Vite client-rendered architecture, premium design, all twelve records and demo interactions. No application package/lockfile changes, new framework, backend, persistence, tracking or real submission/booking.
- PRD.md, architecture.md, design.md, rules.md, phases.doc.md, IMAGE_CREDITS.md, src/data/projects.js, package.json/package-lock.json and original image/font files remain unchanged. memory.md is the only planning document updated. Supplemental derivative provenance is in ASSET_OPTIMIZATION.md.

### Confirmed fixes and implementation
- WebKit 26.5 reproduced Contact overflow only after a navigation/text-sizing sequence: at viewport 320px and root text 200%, document scroll width was 471px while the visible native Project category select was 240px wide. Isolated the native select's text overflow; textarea sizing, select width and appearance changes did not solve it. Applying white-space: normal to form selects returned scroll width to 320px without clipping content or focus indicators. Native select behavior, labels and enlarged text remain available.
- The focused final WebKit sequence passed sixteen navigation/text-size states plus both enlarged form-error states. Selected category text wrapped; document width 320px, body overflow visible, focus retained and outline solid. Inspected the enlarged selected-field capture. No overflow:hidden/clip workaround was added.
- Build-time metadata covers seven core routes plus twelve project details, with unique titles/descriptions, en-CA language, accurate fictional-portfolio OG/Twitter copy, licensed local images/alt text, robots and canonical/sitemap configuration. No fabricated business/review structured data.
- The build emits nineteen valid HTML documents and 404.html with route-specific head tags; bodies still require client JavaScript. This is head generation, not SSR or full page prerendering. Home is eager; other pages are lazy, with announced loading and reload recovery on chunk failure.
- Replaced the blanket host fallback with explicit valid-route document mappings so raw nested responses preserve their heads and unknown URLs can retain HTTP 404. This is the smallest correction to architecture.md's original blanket-fallback suggestion required by the approved Phase 5 metadata/404 requirements; the React SPA architecture is unchanged. Vercel's native static 404 behavior is configured, not deployed or verified.
- Preview middleware serves actual generated route heads and noindex 404 responses. Found and fixed another Vite fallback defect: nonexistent .html URLs returned successful home HTML. Only existing static files within dist are now delegated; dotted unknown paths also return the custom noindex 404.
- Detailed Lighthouse/axe review found visible-label/name mismatches despite a 100 weighted accessibility score. Brand and Menu names now include visible wording; cards include category/title/location; gallery says Open image. Added explicit word separators between card blocks and previous/next labels and titles so extracted visible words do not join. Browser and unit regressions cover these cases.

### Performance and assets
- Final build: Vite 8.3.5, 1976 modules, 4.26s, exit 0. Initial JavaScript is 306,892 bytes (229,780 entry + 77,112 eager shared chunk), versus preserved Phase 4's 327,374 bytes: 20,482 bytes/6.26% smaller. Do not count only the entry file as the entire initial payload. Rounded gzip initial JS is 96.80kB versus 100.31kB. Deferred route modules remain separate; total built JS is not the initial payload.
- CSS is 28,996 bytes, 6.74kB gzip. Build printed informational plugin-timing advice, no blocking errors. No speculative memoization, animation library or framework change.
- Two local WOFF2 fonts use font-display: swap and preload hints. Critical initial-route hero hints match responsive candidates; supporting images stay lazy. Local font/favicons and every WebP were verified.
- New portrait derivative: public/images/optimized/28450649-960.webp, 960x1440, quality 80, 101,014 bytes, derived from the existing licensed Masood Aslami/Pexels source. Compared with the 210,380-byte 1600px original it saves 109,366 bytes/52% when selected. Original 640/1600 variants and credits are preserved; total repository image bytes grow by the added variant, while selected delivery can shrink. Browser DPR/viewport controls selection. Lighthouse confirmed use of the new candidate; some below-fold photo-delivery savings remain possible.

### Final Lighthouse and lab measurements
Lighthouse 13.5.0 against http://127.0.0.1:4179/, actual headless Edge 155.0.4283.62, sequential audits after functional browsers/tests closed. Mobile simulated profile: 412x823, DPR 1.75, 150ms RTT, 1638.4Kbps throughput, 4x CPU. Desktop: 1350x940, DPR 1, 40ms RTT, 10240Kbps, 1x CPU.

| Final profile | Performance | Accessibility | Best Practices | SEO | LCP ms | CLS | TBT ms |
|---|---:|---:|---:|---:|---:|---:|---:|
| Mobile | 94 | 100 | 100 | 66 | 2762.893 | 0.0004793864 | 157.5 |
| Desktop | 100 | 100 | 100 | 66 | 645.306 | 0 | 4.5 |

- Both final detailed label-content-name-mismatch audits passed. The only failed weighted SEO audit is is-crawlable: deliberate noindex/nofollow and robots Disallow, retained until real-domain/publication approval. No indexing flag was enabled just to inflate a score. Mobile warned that host CPU is slower than Lighthouse expects; desktop had no warning.
- Mobile Lighthouse LCP remains above the 2.5s goal. This is a measured performance limitation, not a claim that all Core Web Vitals targets or production readiness guarantees are satisfied.
- Preserved initial mobile report: 44/100/100/58, LCP 8644.5ms, CLS 0.0004794, TBT 576ms, cache-clear/slow-CPU warnings amid other QA load. An intermediate post-optimization report was 89/100/100/66. Conditions/host load vary, so do not attribute the entire score difference to code or select only the best sample.
- Separate final controlled browser lab: three cold contexts, 390x844/DPR1, disabled HTTP cache, 150ms RTT, 1.6Mbps down/750Kbps up, 4x CPU slowdown. LCP 2532/1856/1920ms (median 1920); CLS 0.03670887/0/0; maximum observed selected-interaction Event Timings 88/40/72ms. Selected actions were menu, project filtering/navigation and gallery controls. These timings are NOT real-user field INP.
- Preserved baseline under the same configured lab profile: LCP 2436/1760/1748ms (median 1760), CLS 0.03670887 each, selected-event maxima 72/64/152ms. The small final sample does not establish an LCP improvement over baseline; hard byte savings are independently verified. Earlier intermediate interaction measurement had a 392ms outlier during overlapping QA load; it was retained, not represented as field INP. All final measured CLS samples are below 0.1, but they are not uniformly zero.
- Reports and sample JSON are local ignored tmp/phase5-verified-{mobile,desktop}.lhr.json and tmp/phase5-verified-metrics.json. Earlier reports are preserved separately. No field traffic/data or hosted measurements exist yet.

### Browser, routing, accessibility and privacy results
- Actual Chromium 155.0.4283.62, Firefox 153.0 and WebKit 26.5 each passed 197 responsive/interaction states: eight widths 320/375/390/768/1024/1280/1440/1920, eight representative routes at 100%/200% root font size, filters, gallery modality/arrows/Escape/focus return, FAQs, both forms' errors/success/reset, menus, 844x390 landscape, long content and reduced motion. Each run verified nineteen raw route heads and nineteen internal targets, with zero unexpected console/page/resource errors and zero external requests.
- After the final whitespace-only label corrections, a further thirty targeted states across all three engines/375px/1440px passed the detailed axe label rule with zero violations or incomplete results and no overflow. Covered home/cards, all twelve portfolio cards, first/middle/last project navigation and gallery triggers. No blanket claim that every axe rule or WCAG criterion was tested.
- Final raw-response audit checked all nineteen valid route titles/descriptions/social tags and status 200. Four unknown paths (/not-a-page, /projects/not-a-concept, /missing.html, /a.b) returned status 404 with custom not-found metadata/noindex. Nested refresh and 404 recovery worked. Default robots.txt returned valid Disallow; absent sitemap.xml correctly returned 404 rather than home HTML.
- Decoded all twenty-five WebPs, confirmed local fonts and favicon 200. Existing asset fallback/alt/priority regression tests remain passing. Original image licensing register is untouched.
- Reserved-host build fixture (https://portfolio.example, test only) verified nineteen absolute canonical heads, nineteen sitemap entries, explicit publication flag, robots Sitemap and noindex 404. No production hostname was invented, deployed or submitted. Default build has no canonical/og:url/sitemap and remains noindex. Client navigation updates metadata and removes stale canonicals on 404.
- Both forms remain local React demos. Original unit spies confirm no fetch/XHR send/storage write during completion; browser completions/reset and empty storage passed. Source scan excluding tests found no submission transport, analytics, unsafe HTML insertion or personal-data persistence. No availability, email, calendar, appointments, backend or database.
- WebKit Windows default Tab skips links and moves from the menu toggle into form controls; focus exit correctly dismisses the inline menu. Escape was separately verified from a focused navigation link. Do not represent this as native full-link tabbing or physical Safari/iOS verification.
- NVDA was absent/not running at the checked standard paths; VoiceOver/macOS and TalkBack/Android unavailable. Actual screen readers, native browser zoom and physical touch devices remain untested. Engine/semantic/contrast checks and audit scores are not accessibility certification.

### Automated tests, security and exact verification commands
- Final automated suite: 125 passed across 9 files, 48.63s, exit 0. Original 95 tests retained; thirty additional regression cases cover metadata, dynamic SEO, build generation, sitemap/robots, route mappings, image priority/candidates, chunk failure, label content and project navigation. No skipped tests or suppressed unhandled errors. Final lint exit 0, no errors/warnings; final source build result above.
- Earlier recovery fork run passed only 89 tests and failed to start two workers: not a passing suite. Switched to Vitest's supported threads pool, maxWorkers 2, retaining per-file isolation. A metadata test then exposed effect timing (123/124); it now waits for metadata while preserving assertions. Another added assertion initially matched card and credit links (123/124); scoped it to the named card. Subsequent complete runs passed 124, then 125 after the navigation regression was added. No assertions were removed to hide failures.
- npm audit --json --fetch-retries=0 --fetch-timeout=30000 returned exit 0, zero known vulnerabilities across 276 dependency entries. Manifests stayed unchanged; no automatic upgrade. This is a registry snapshot, not a guarantee against undisclosed vulnerabilities.
- Used Node v24.16.0/npm 11.13.0 with explicit executables; no global system settings changed. Sandbox Git ownership checks used per-command safe.directory, not a global exception. Restricted worker/network/listening operations were rerun through approved outside-sandbox execution where needed.

PowerShell, working directory D:\atelier-north-interiors:

```powershell
$env:PATH = 'C:\Program Files\nodejs;' + $env:PATH
& 'C:\Program Files\nodejs\npm.cmd' run build
& 'C:\Program Files\nodejs\npm.cmd' run lint
& 'C:\Program Files\nodejs\npm.cmd' test
& 'C:\Program Files\nodejs\npm.cmd' audit --json --fetch-retries=0 --fetch-timeout=30000
& 'C:\Program Files\nodejs\npm.cmd' run preview -- --host 127.0.0.1 --port 4179 --strictPort
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-production.cjs chromium
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-production.cjs firefox
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-production.cjs webkit
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-webkit-final.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-labels.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-final-verify.cjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-fixture-check.mjs
& 'C:\Program Files\nodejs\node.exe' tmp/phase5-metrics.cjs verified
$env:CHROME_PATH = 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
& 'C:\Program Files\nodejs\node.exe' tmp/qa-tools/node_modules/lighthouse/cli/index.js http://127.0.0.1:4179/ '--chrome-flags=--headless=new --no-sandbox --disable-gpu' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=tmp/phase5-verified-mobile.lhr.json --quiet
& 'C:\Program Files\nodejs\node.exe' tmp/qa-tools/node_modules/lighthouse/cli/index.js http://127.0.0.1:4179/ '--chrome-flags=--headless=new --no-sandbox --disable-gpu' --only-categories=performance,accessibility,best-practices,seo --output=json --output-path=tmp/phase5-verified-desktop.lhr.json --quiet --preset=desktop
git diff --check
```

- Fixture build executed separately with SITE_URL=https://portfolio.example and INDEX_SITE=true, npm run build -- --outDir tmp/phase5-seo-fixture; those process-local test settings were not persisted or used for the normal build. The fixture verifier was rerun during recovery.
- Browser scripts use the already bundled Playwright 1.62.1 runtime, with Firefox/WebKit binaries installed only under ignored tmp/browsers. Lighthouse 13.5.0 and its axe runtime are isolated in ignored tmp/qa-tools, not project manifests. The first Lighthouse tool install hit EIDLETIMEOUT; bounded retry succeeded. Browser download fallback succeeded after the primary redirect failed. No Chromium emulation was called Firefox/WebKit.
- The production preview started for recovery was stopped with Ctrl+C after all checks; interrupted exit 1 is the intentional shutdown. Browser scripts closed their task-owned browsers. The previous baseline preview session no longer existed after recovery; no unrelated listener/process was stopped.

### Created and modified files
- Created: ASSET_OPTIMIZATION.md; public/images/optimized/28450649-960.webp; scripts/seo-build.js; src/components/layout/PageLoadBoundary.jsx; src/pages/Metadata.test.jsx; src/utils/images.js, seo.js, seo.test.js.
- Modified: README.md; memory.md; eslint.config.js; index.html; vite.config.js; vercel.json; src/App.jsx, App.test.jsx, content.css, test/setup.js; src/components/features/ProjectCard.jsx, ProjectNavigation.jsx; src/components/layout/AppLayout.jsx, Brand.jsx, Header.jsx; src/components/ui/Photo.jsx; src/hooks/usePageTitle.js; src/pages/CorePages.test.jsx, Hardening.test.jsx, Interactions.test.jsx, NotFoundPage.jsx, ProjectDetailPage.jsx.
- Thirty intended files in total. QA tools, browser binaries, reports, temporary scripts, node_modules and dist stay ignored and are not application deliverables.

### Git closure, limitations and Phase 6 handoff
- Complete source/test/config/docs diff reviewed, protected paths checked unchanged and git diff --check passed. Final staged review contained exactly thirty intended files; common credential/private-key scans found no matches, forbidden-path count was zero and all seven ignore probes passed. No dependencies, dist, temporary QA tools, env files or secrets are staged. Remote origin remains the existing repository; immediately before staging, refs matched only main at the starting Phase 4 commit. Normal commit/push and synchronization verification follow this record; the resulting hash is reported after execution rather than embedded self-referentially here.
- Requested commit: perf: optimize SEO performance and production readiness. Never force push or rewrite history. No known critical functional defect remains in the tested local scope; this does not mean all performance goals or every browser/device/assistive-technology combination are verified.
- Remaining measured limits: mobile Lighthouse LCP 2.763s exceeds the 2.5s goal; host CPU warnings and small lab samples limit conclusions; below-fold responsive delivery can improve further; no real-user INP/field data. Keep these observations when evaluating future changes rather than claiming every metric improved.
- Remaining platform checks: actual Vercel deep URLs/404 status/cache/security headers, real-domain canonical/sitemap/social images and social-crawler format/caching behavior. Page bodies remain client-rendered, and no actual social-platform fetch compatibility is claimed. Modern native dialog/current Intl timezone data are still required.
- Wait for explicit Phase 6 approval. Then confirm the actual HTTPS production origin and indexing policy, use Vite/npm ci/npm run build/dist and a Node 24.x patch satisfying package.json, keep preview builds noindex, and verify every hosted route/status/head/asset/robots/sitemap/social card before claiming deployment complete. No Vercel deployment, public-domain guess, search-engine submission, real form integration or Phase 6 work occurred here.
