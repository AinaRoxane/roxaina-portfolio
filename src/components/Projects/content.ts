export interface Project {
  name: string;
  official_name: string;
  official_fonts?: string;
  problematic: string;
  description: string[];
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
      name: "Creativity & Culture",
      official_name: "Chronicles MG",
      official_fonts: "",

      problematic:
        "Malagasy creators publish in multiple languages and formats, but the tools available to them rarely bring publishing, reader access, and local payments together. Creators end up adapting their work to the platform rather than the platform adapting to their work.",

      description: [
        "Chronicles MG is a publishing platform for webnovels and webcomics. Creators publish chapter by chapter and offer subscriptions, while two reading engines paginated text for webnovels and panel-by-panel image delivery for webcomics share a common entitlement model for chapter access. Content protection combines MIJERY-scoped access validation, watermarked image delivery, and hotlink prevention.",

        "Payments from MVola, Orange Money, Airtel Money, and Visa consolidate into a single auditable wallet, reconciled through a common ledger with a 70/30 revenue split; callbacks handle asynchronous provider responses without dropping or double-counting transactions. Chronicles Studio handles the operational side moderation, payout reconciliation, and audit logs. Authentication is delegated to MIJERY ID: Chronicles acts as a resource server, verifying RS256-signed JWTs against keys published at a JWKS endpoint, linking accounts by the stable `sub` claim, and deduplicating concurrent session-recovery requests on the client.",
      ],

      tech: [
        "Next.js",
        "Spring Boot",
        "PostgreSQL",
        "OAuth 2.0",
        "OpenID Connect",
        "JWT",
        "JWKS",
        "Docker",
        "Cloudinary",
        "Tailwind CSS",
      ],

      url: "https://mdg-chronicles.vercel.app",
    },

    {
      name: "Identity",
      official_name: "MIJERY ID",
      official_fonts: "",

      problematic:
        "Every Malagasy platform that manages user accounts faces the same challenges: authentication, account linking, password recovery, and access control. Without a shared identity provider, each team has to build and maintain them from scratch.",

      description: [
        "MIJERY ID is a standalone OAuth 2.0 / OpenID Connect identity provider for Malagasy applications, centralizing authentication so connected applications delegate sign-in rather than maintain their own identity systems. The authorization server implements the Authorization Code flow with PKCE, issues RS256-signed JWTs verifiable through a public JWKS endpoint, and rotates opaque refresh tokens with single-use semantics.",

        "The key design decision is how identities are created and linked: each account is identified by a stable `sub` claim rather than a username or email address, either of which can change or be reassigned, and administrators provision identities through a dedicated console rather than through unrestricted public registration. Redirect handling is equally controlled each client uses a locale-aware `redirect_uri` template validated against an allowlist, invalid configurations are rejected, and unsupported locales return `400 Bad Request`, preventing request parameters from being abused to send users to unauthorized destinations.",
      ],

      tech: [
        "Spring Boot",
        "PostgreSQL",
        "OAuth 2.0",
        "OpenID Connect",
        "PKCE",
        "RS256",
        "JWKS",
        "Refresh Token Rotation",
      ],

      url: "https://roxaina.me",
    },
  ],
};