declare namespace CICD {
  type CiCdMenuType =
    | "overview"
    | "structure"
    | "codeowners"
    | "pipeline"
    | "secrets"
    | "workflows"
    | "customization"
    | "monitoring"
    | "troubleshoot";

  interface ICiCdState {
    activeSection: CiCdMenuType;
  }

  interface ICICDDocMenuItem {
    id: CiCdMenuType;
    name: string;
    icon: React.ReactNode;
  }
}
