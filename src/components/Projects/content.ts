export interface Project {
  name: string;
  official_name: string;
  official_fonts: string;
  problematic: string;
  description: string;
  tech: string[];
  url?: string;
}

interface ProjectsContent {
  title: string;
  projects: Project[];
}

export const projectsContent: ProjectsContent = {
  title: "projects",
  projects: [
    {
      name: "SSO",
      official_fonts: "",
      official_name: "MIJERY ID",
      problematic: "Every Malagasy platform re-invents account linking, password storage, and \"forgot password\" flows — badly, because there's no shared identity provider for the region. Each team solves the same problems alone, with less security budget than the problem deserves.",
      description: "MIJERY is a standalone OAuth2/OIDC identity provider for Malagasy applications. The authorization server implements the authorization-code flow with PKCE, issues RS256 JWTs validated via a public JWKS endpoint, and rotates opaque refresh tokens with single-use semantics.\n\nThe architecture pivot: the decisions that mattered were about identity boundaries, not token formats. The `sub` claim is the only account-linking key — never username or email, because both are mutable and reusable. Administrators provision identities through a console rather than public sign-up, closing \"who gets an account\" at the boundary. Clients integrate against a locale-aware `redirect_uri` template validated against an allowlist: a mismatch returns `invalid_grant` per RFC 6749 §4.1.3, and an unlisted locale returns `400`, so the redirect URI can never be steered by the request payload.",
      tech: ["Spring Boot", "PostgreSQL", "OAuth2", "OIDC", "PKCE", "RS256", "JWKS"],
      url: "https://mijery.mg",
    },
    {
      name: "Chronicles",
      official_fonts: "",
      official_name: "Chronicles MG",
      problematic: "Malagasy creators write in three languages, publish in two formats, and get paid through four incompatible payment rails. No existing platform handles all three. So creators trim their work to fit the platform — or stop publishing entirely.",
      description: "Chronicles is a full-stack publishing platform for Malagasy creators — webnovels and webcomics, paid per chapter or by subscription, with payouts through the mobile money creators already use.\n\nThe engineering coordination: a provider-agnostic wallet reconciles MVola, Orange Money, Airtel Money, and Visa into a single auditable ledger, so a 70/30 split holds to the ariary even when a provider's callback arrives late. Two reading engines (paginated text and streamed image panels) share one entitlement model. Content protection is layered rather than bolted on: MIJERY-scoped chapter access validated per request, watermarked image proxying, and hotlink prevention. All moderation, payout reconciliation, and audit logs live in Chronicles Studio.\n\nFederated identity: authentication is delegated to MIJERY ID. Chronicles is a pure resource server validating RS256 JWTs offline via JWKS. Local accounts are linked by the `sub` claim only. The client-side interceptor handles silent 401 recovery with concurrency dedupe, so expired sessions recover invisibly.",
      tech: ["Spring Boot", "PostgreSQL", "Next.js", "JWT", "Docker", "Cloudinary", "Tailwind", "OAuth2", "OIDC", "JWKS"],
      url: "https://mdg-chronicles.vercel.app",
    },
  ],
};
