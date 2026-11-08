# Personal profile evolution

Status: implemented, checked, and published to Wix on November 8, 2026.

## Purpose and audience

Evolve Brian Welk's existing GitHub Pages portfolio at https://brwelk.github.io/.
Potential clients, employers, and collaborators should understand Brian's story,
explore relevant work, and connect through the existing LinkedIn profile. The site
will also serve as a link in proposals and professional introductions.

## Confirmed story

- Brian learned by solving real problems at work.
- He has led internal automation projects, software implementations, and internal
  and external API integrations.
- He learns, tests, implements, refines, and shares knowledge within and beyond his
  team, with an interest in building systems others can maintain and extend.
- He is curious, enjoys creating, and is actively learning about AI integration
  and agentic applications.
- Northstar is the next evolution of the existing Multichannel Replenishment
  Control Tower and should remain one evolving case study.

The approved narrative direction connects operational experience, automation
leadership, and current exploration of AI. No dates, qualifications, employer
endorsements, or new performance claims are inferred.

## First revision

1. Introduce Brian, his practical approach, and AI exploration on the first screen.
2. Place a short personal story before selected work. Show three featured projects
   (Northstar, LocalLoop, and GuardianWorks) and retain access to every existing
   project in a compact additional-work list.
3. Update the existing control-tower case study in place to explain its evolution
   into Northstar. Preserve its URL and the earlier synthetic walkthrough. Clearly
   label that walkthrough as the earlier prototype; do not present it as the
   current AI assistant. Following Brian's request, lead with six new current-UI
   screenshots and a guided tour using fictional sample records. Show Ask
   Northstar before submission rather than supplying a fictional AI answer.
4. Describe Northstar's scoped record review, action preparation, existing
   calculation engine, explicit application approval, and test partner adapters.
   Do not publish private operational records, credentials, or internal documents.
5. Retain the established dark palette, typography, static HTML/CSS architecture,
   existing professional links, and GitHub source repository.
6. Make visible identity and project content readable without JavaScript. Add
   canonical/social metadata and structured profile/project descriptions that
   match the visible copy, plus a sitemap and crawler entry point.

## Acceptance and verification

| Criterion | Expected evidence |
| --- | --- |
| Story reflects Brian's answers | Editorial comparison with the confirmed facts above; Brian reviews voice and emphasis |
| Visitors can move from story to relevant work to contact | In-app browser review of homepage, Northstar case study, and LinkedIn link destination |
| Existing work remains reachable | Local checks of relative links, resources, and anchors; browser inspection of additional-work links |
| Northstar is one evolving case study | Existing case-study URL retained; current-development and earlier-walkthrough labels visible together |
| Public claims stay within evidence | Compare Northstar copy with its README and operations-assistant documentation; no claims of live partner execution |
| Layout remains usable | Inspect complete affected pages at desktop and mobile widths, at 200% text enlargement, and with keyboard focus |
| Machine-readable identity matches visible content | Parse JSON-LD, titles, descriptions, canonical URLs, and sitemap; inspect crawler-readable HTML |

## Environment and release

The upstream repository is BRWelk/brwelk.github.io. This workspace contains an
isolated clone on codex/profile-evolution. The site has no dependency installation
or build step. Preview with `python -m http.server 8877 --bind 127.0.0.1` from the
repository. No Northstar runtime or AI API access is needed for portfolio work.

The confirmed workflow is development and testing in this project, source control
in GitHub, and deployment of tested static files to Wix. The site remains
maintained in code, without conversion to a visual editor. Check the target URL
and update canonical URLs, structured IDs, social URLs, and sitemap before release.
No GitHub-to-Wix automatic deployment is assumed; establish that separately if
requested. New personal or workplace details remain separate decisions. Employer/vendor names,
new screenshots from private applications, external AI chat links, and a new
contact form are outside this revision.

Structured profile data follows Google Search Central's ProfilePage guidance:
https://developers.google.com/search/docs/appearance/structured-data/profile-page
and https://schema.org/ProfilePage. This is descriptive metadata, not a promise
of search or AI placement.
