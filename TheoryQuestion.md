# Web Rendering Types (CSR, SSR, SSG, ISR, and More)

Modern web frameworks offer different **rendering strategies** that decide **where** and **when** a page is generated. This affects performance, SEO, scalability, and content freshness.

---

## 1. Client-Side Rendering (CSR / CSE)
> **CSE = Client-Side Execution** — essentially the same as CSR.

- **Where rendering happens:** Entirely in the browser using JavaScript.
- **How it works:**  
  The server sends a bare HTML shell + JavaScript bundle. JS executes in the browser, rendering the UI and hydrating it for interactivity.
- **When to use:**  
  - Single Page Applications (SPAs) where interactivity is more important than SEO.
  - Apps with user-specific data and minimal SEO needs.
- **Pros:**
  - Rich, dynamic interactions without full page reloads.
  - Centralized state management.
- **Cons:**
  - Slower first load (blank screen until JS runs).
  - Weak SEO if search engines can’t handle JS well.
- **Example:** React app created with `create-react-app`.

---

## 2. Server-Side Rendering (SSR)

- **Where rendering happens:** On the server at request time.
- **How it works:**  
  On each request, the server runs your app code, generates HTML, and sends it to the browser. JS then hydrates it for interactivity.
- **When to use:**  
  - SEO-sensitive pages that change often.
  - Personalized dashboards or user-specific content.
- **Pros:**
  - Faster First Contentful Paint (FCP).
  - SEO-friendly (HTML already contains content).
- **Cons:**
  - Slower TTFB due to server processing.
  - Higher server cost and complexity.
- **Example:** Next.js `getServerSideProps`.

---

## 3. Static Site Generation (SSG)

- **Where rendering happens:** On the server at build time.
- **How it works:**  
  HTML pages are generated during deployment and served statically from a CDN.
- **When to use:**  
  - Content that rarely changes (e.g., documentation, blogs).
- **Pros:**
  - Very fast load times (just static files from CDN).
  - Low server cost.
- **Cons:**
  - Requires rebuild to update content.
- **Example:** Next.js `getStaticProps`.

---

## 4. Incremental Static Regeneration (ISR)

- **Where rendering happens:** Hybrid — build time + on-demand background regeneration.
- **How it works:**  
  Pages are prebuilt, but after a set `revalidate` time, the server regenerates the page in the background upon the next request.
- **When to use:**  
  - Content updates periodically (e.g., news sites, product catalogs).
- **Pros:**
  - Fast like SSG but with automatic updates.
  - Still benefits from CDN caching.
- **Cons:**
  - Possible brief stale content before regeneration.
- **Example:** Next.js `getStaticProps` with `revalidate`.

---

## 5. Streaming SSR (React 18 / Next.js)

- **Where rendering happens:** Server sends HTML in chunks as it becomes ready.
- **How it works:**  
  Parts of the page (e.g., header) are sent early, while slower sections (e.g., data-heavy lists) stream in later.
- **When to use:**  
  - Large, data-heavy pages.
- **Pros:**
  - Faster perceived load (content appears sooner).
- **Cons:**
  - Implementation complexity.
- **Example:** `ReactDOMServer.renderToPipeableStream`.

---

## 6. Edge Rendering

- **Where rendering happens:** On CDN edge locations near the user.
- **How it works:**  
  Similar to SSR, but runs on edge servers for lower latency.
- **When to use:**  
  - Personalized experiences with global users.
- **Pros:**
  - Very low latency.
  - Global scalability.
- **Cons:**
  - Limited compute power/memory compared to centralized servers.

---

## 7. Static Rendering + Hydration (Prerendering)

- **Where rendering happens:** HTML is generated ahead of time, then JS hydrates it.
- **How it works:**  
  Combines SSG/SSR with client-side hydration for interactivity.
- **When to use:**  
  - SEO + rich interactivity requirements.
- **Pros:**
  - SEO-friendly + SPA-like experience.
- **Cons:**
  - Still requires JS for full interactivity.

---

## Quick Comparison Table

| Rendering Type | Render Location | Timing        | SEO  | Performance | Content Freshness |
|----------------|----------------|--------------|------|-------------|-------------------|
| CSR / CSE      | Browser        | Request time | Poor | Slow first load | Always fresh      |
| SSR            | Server         | Request time | Good | Slower TTFB | Always fresh      |
| SSG            | Server (build) | Build time   | Good | Fast        | Stale until rebuild |
| ISR            | Server+CDN     | Hybrid       | Good | Fast        | Fresh after revalidate |
| Streaming SSR  | Server         | Request time | Good | Fast visible load | Always fresh |
| Edge Rendering | Edge servers   | Request time | Good | Very fast   | Always fresh |

---

## Diagram (Request Flow)

```plaintext
CSR / CSE:
[Client Request] -> [Server sends HTML shell + JS] -> [Browser runs JS to render UI]

SSR:
[Client Request] -> [Server generates HTML with data] -> [Browser hydrates for interactivity]

SSG:
[Build time] -> [HTML files generated] -> [Client Request] -> [Static HTML served from CDN]

ISR:
[Build time] -> [HTML files generated] -> [Client Request triggers background regeneration after interval]

Streaming SSR:
[Client Request] -> [Server sends chunks of HTML progressively] -> [Browser renders as chunks arrive]

Edge Rendering:
[Client Request] -> [Nearest CDN Edge Server runs rendering] -> [HTML sent quickly]
