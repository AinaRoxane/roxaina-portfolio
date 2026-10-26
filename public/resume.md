# Roxane Aina — Full-Stack Developer & Author

Based in Antananarivo, Madagascar — open to remote & freelance.

Email: roxane.rakotoarimanana@gmail.com
GitHub: https://github.com/AinaRoxane
LinkedIn: https://linkedin.com/in/roxane-aina

## About

Full-Stack Developer at e-Fanamby, where I apply my skills in data analysis and software engineering to help build the continent's future sports analytics platform.

My journey is driven by a simple conviction: Madagascar doesn't just need to consume technology; it needs to build it. I'm building shared infrastructure for Malagasy products — identity first, because it's the layer everything else depends on. Whether I am building data-driven tools or creating a home for Malagasy storytellers, I focus on systems that are rooted in local realities.

I am early in my career and looking for teams building serious things — freelance projects, remote roles, or partnerships where I can bring both full-stack engineering and product vision.

## Experience

### e-Fanamby — Full-Stack Developer
January 2026 – Present

Architected and developed a full-stack football analytics SaaS platform using Spring Boot, Next.js, and PostgreSQL, processing over 160 hierarchical performance indicators across 19 annotated matches and 400+ profiled players, including data ingestion (forms/CSV), a dynamic player rating engine, video synchronization of actions, and a multilingual system (MG/FR/EN/ES).

Designed an automated highlights generation pipeline capable of relying on videos from YouTube, Google Drive, a local VPS, or external S3 storage, eliminating over 4 hours of manual editing per match.

Contributed to product-market fit by conducting market and cost analyses, leading a complete UI rebranding, and pitching the solution as a finalist at the POESAM 2026 awards.

### e-Fanamby — Software Engineer (Intern)
July 2025 – December 2025

Built a desktop application that automatically generates match highlights using YOLO, Roboflow, FFmpeg, and Python (PySide).

Trained computer vision models to identify teams, players, and passes – enabling automated tactical analysis without manual video editing.

### Outlier — Linguistic AI Specialist (Freelance)
August 2024 – January 2025

Trained and aligned Large Language Models (LLMs) via RLHF (Reinforcement Learning from Human Feedback) workflows.

Specialized in creative writing quality and French-English translation accuracy for AI training data generation.

Delivered 2,000+ translated prompts with a top-10% quality rating across French–English language pairs.

## Projects

### MIJERY ID
https://mijery.mg

Every Malagasy platform re-invents account linking, password storage, and "forgot password" flows — badly, because there's no shared identity provider for the region. Each team solves the same problems alone, with less security budget than the problem deserves.

MIJERY is a standalone OAuth2/OIDC identity provider for Malagasy applications. The authorization server implements the authorization-code flow with PKCE, issues RS256 JWTs validated via a public JWKS endpoint, and rotates opaque refresh tokens with single-use semantics.

The architecture pivot: the decisions that mattered were about identity boundaries, not token formats. The `sub` claim is the only account-linking key — never username or email, because both are mutable and reusable. Administrators provision identities through a console rather than public sign-up, closing "who gets an account" at the boundary. Clients integrate against a locale-aware `redirect_uri` template validated against an allowlist: a mismatch returns `invalid_grant` per RFC 6749 §4.1.3, and an unlisted locale returns `400`, so the redirect URI can never be steered by the request payload.

Tech: Spring Boot, PostgreSQL, OAuth2, OIDC, PKCE, RS256, JWKS

### Malagasy Chronicles
https://mdg-chronicles.vercel.app

Malagasy creators write in three languages, publish in two formats, and get paid through four incompatible payment rails. No existing platform handles all three. So creators trim their work to fit the platform — or stop publishing entirely.

Chronicles is a full-stack publishing platform for Malagasy creators — webnovels and webcomics, paid per chapter or by subscription, with payouts through the mobile money creators already use.

The engineering coordination: a provider-agnostic wallet reconciles MVola, Orange Money, Airtel Money, and Visa into a single auditable ledger, so a 70/30 split holds to the ariary even when a provider's callback arrives late. Two reading engines (paginated text and streamed image panels) share one entitlement model. Content protection is layered rather than bolted on: MIJERY-scoped chapter access validated per request, watermarked image proxying, and hotlink prevention. All moderation, payout reconciliation, and audit logs live in Chronicles Studio.

Federated identity: authentication is delegated to MIJERY ID. Chronicles is a pure resource server validating RS256 JWTs offline via JWKS. Local accounts are linked by the `sub` claim only. The client-side interceptor handles silent 401 recovery with concurrency dedupe, so expired sessions recover invisibly.

Tech: Spring Boot, PostgreSQL, Next.js, JWT, Docker, Cloudinary, Tailwind, OAuth2, OIDC, JWKS

## Stack

**Backend**: Java, Spring Boot, Spring Security, PostgreSQL, OAuth2, OIDC
**Frontend**: Next.js, React, TypeScript, Tailwind CSS
**Infrastructure & DevOps**: Docker, Caddy, Cloudinary, FFmpeg, Python (YOLO / Roboflow)
**Security**: JWT, Spring Authorization Server, RS256, JWKS, PKCE