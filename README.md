# Zero-to-Cloud Java — The Finance Tracker

An interactive, self-paced course site that walks a student through building **one application five
times over** — a personal finance tracker, rebuilt at five increasing levels of engineering
maturity, from a console program that writes a text file to a secured API running on the internet
with an automated pipeline behind it.

It is a single-page app: pure HTML, CSS and vanilla JavaScript. No build step, no dependencies, no
server. Open the file and it runs.

## Running it

```
open index.html
```

Or double-click it. That is the whole setup — there is nothing to install and nothing to compile.

Everything is local: progress lives in the browser's `localStorage` under the key
`ztc-java-finance-tracker-v1`, and nothing is ever sent anywhere. Opening the site in a different
browser, a different profile, or a private window starts from scratch. If storage is unavailable the
site still runs, it just forgets your progress between visits.

## The teaching rule

The site leads with **pseudocode**, never with a solution. Each concept gives a language-neutral
description of what to build and in what order, plus the literal search queries to go and look up.
Finding the *how* is the point.

Every blueprint does carry a **⟨⟩ Show the Java** button holding a working reference
implementation, folded away until clicked. It is there to compare against *after* your own version
runs — not to copy from before you start. Opening it first is the fastest way to finish the course
having learned nothing.

## The five modules

Modules unlock in order: each one stays locked until the one before it is marked complete.

| # | Module | What it adds |
|---|---|---|
| 1 | The Core Java Console Foundation & Git | Objects, collections, file I/O, and the version-control habit that carries the rest of the course |
| 2 | Evolution to Spring Boot & Database | The same logic, lifted into a layered REST API backed by PostgreSQL |
| 3 | Security & Architecture Refinement | Identity, ownership, and a boundary between what you store and what you expose |
| 4 | GitHub Actions — Continuous Integration | A machine that checks your work on every push, and a test suite worth checking |
| 5 | Digital Ocean Deployment | Containers, managed infrastructure, and a push that becomes a running system |

Each module carries a mission, an architecture blueprint, a set of concepts, an acceptance
checklist, and a checkpoint that requires pushed code before it closes.

## How a concept is laid out

Every one of the 38 concepts has the same five parts:

- **What you're learning here** — the concept in plain words, and the thing to search before writing
  anything
- **Go research this** — literal search queries and the canonical docs, to read *first*, not when
  stuck
- **Blueprint** — pseudocode: structure, order and decisions, no syntax — with the **Show the
  Java** button on its bar
- **Tips** — conventions, trade-offs, and what good looks like
- **Common pitfall** — the specific mistake most people make, to read before starting

## Project structure

```
index.html    markup only — the shell, sidebar and main region
styles.css    the dark, editor-flavoured design system
app.js        course content + the rendering engine
plan.md       the implementation plan this was built from
prompt.txt    the original specification
```

`app.js` has two halves. The top is data — a single `COURSE` object holding the intro, five modules
and the outro, plus a `CODE_EXAMPLES` map of the 38 reference implementations, keyed by concept
name. The bottom is the engine: state, persistence, routing and rendering, all plain functions
against `document`.

### Changing the course content

Editing a module means editing its object in `app.js` — nothing is generated and nothing is
templated ahead of time. To add a concept, push an object onto a module's `concepts` array with
`name`, `learning`, `searchFor`, `pseudocode`, `tips` and `pitfall`. To give it a reference
implementation, add an entry to `CODE_EXAMPLES` under exactly that `name`, holding a `parts` array
of `{ file, lang, code }`. A concept with no matching entry simply renders no button, which is the
intended fallback.

Code panes are plain `<pre>` — the `lang` field is a label, not a syntax highlighter.

## Behaviour worth knowing

- **Locked modules** are visible in the sidebar but refuse to open, and clicking one explains why.
- **Mark Module Complete** stays disabled until every box in that module's checklist is ticked.
- **Reset all progress** at the foot of the sidebar clears the stored state and returns to the
  intro, after a confirmation prompt.
- **The outro** unlocks only once all five modules are complete.
- **Progress is per-browser.** There is no account and no sync.

## Browser support

Any current browser. It uses `<details>`, CSS custom properties, flexbox and grid, and ES6+
JavaScript — all long-settled. It honours `prefers-reduced-motion`, and the layout collapses to a
drawer on narrow screens.
