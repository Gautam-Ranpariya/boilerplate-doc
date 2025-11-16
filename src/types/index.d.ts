declare namespace CommonTypes {
  type Routes = "/" | "test-case" | "vercel" | "ci-cd" | "pwa";

  interface ILayoutState {
    isMobileMenuOpen: boolean;
    currentPage: Routes;
    copiedCode: string;
    expandedSections: Record<string, boolean>;
  }

  interface INavigationMenu {
    id: Routes;
    name: string;
    path: string;
    isMaintenance: boolean;
  }

  interface IBreadcrumbItem {
    id: string;
    label: string;
    link?: string;
  }

  interface ISeoConfig {
    title: string;
    description: string;
  }

  interface IHeadingProps {
    title: string;
  }

  interface IIconProps {
    width?: number;
    height?: number;
    className?: string;
    strokeWidth?: number;
    strokeColor?: string;
    svgFillColor?: string;
    pathFillColor?: string;
    viewBox?: string;
  }

  interface IInnerLayoutProps {
    children: React.ReactNode;
    title: string;
    isFullWidth?: boolean;
  }
}
