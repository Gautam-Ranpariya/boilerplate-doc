declare namespace PWA {
    type PWAMenuType =
    | "overview"
    | "benefits"
    | "installation"
    | "manifest"
    | "service-worker"
    | "icons"
    | "offline"
    | "notifications"
    | "testing"
    | "deployment"
    | "troubleshoot";

  interface IPWAMenuItem {
    id: PWAMenuType;
    name: string;
    icon: React.ReactNode;
  }

  interface IPWAState {
    activeSection: PWAMenuType;
  }
}