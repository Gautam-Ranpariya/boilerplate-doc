declare namespace Vercel {
 type VercelMenuType =
    | "overview"
    | "prerequisites"
    | "local-config"
    | "token"
    | "github-secrets"
    | "cicd"
    | "troubleshoot"
    | "testing"
    | "monitoring"
    | "advanced"
    | "troubleshoot"

  interface IVercelState {
    activeSection: VercelMenuType;
  }

  interface IVercelDocMenuItem {
    id: VercelMenuType;
    name: string;
    icon: React.ReactNode;
  }

}