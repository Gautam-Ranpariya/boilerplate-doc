import ActivityIcon from "@components/icons/ActivityIcon";
import CircleAlertIcon from "@components/icons/CircleAlertIcon";
import CodeIcon from "@components/icons/CodeIcon";
import KeyIcon from "@components/icons/KeyIcon";
import LockIcon from "@components/icons/LockIcon";
import RocketIcon from "@components/icons/RocketIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import TrendingUpIcon from "@components/icons/TrendingUpIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import ZapIcon from "@components/icons/ZapIcon";

const vercelMenuData: Array<Vercel.IVercelDocMenuItem> = [
  {
    id: "overview",
    name: "Overview",
    icon: <RocketIcon width={18} height={18} />,
  },
  {
    id: "prerequisites",
    name: "Prerequisites",
    icon: <CircleAlertIcon width={18} height={18} />,
  },
  {
    id: "local-config",
    name: "Local Setup",
    icon: <SettingsIcon width={18} height={18} />,
  },
  {
    id: "token",
    name: "Token Generation",
    icon: <KeyIcon width={18} height={18} />,
  },
  {
    id: "github-secrets",
    name: "GitHub Secrets",
    icon: <LockIcon width={18} height={18} />,
  },
  {
    id: "cicd",
    name: "CI/CD Pipeline",
    icon: <ActivityIcon width={18} height={18} />,
  },
  { id: "testing", name: "Testing", icon: <CodeIcon width={18} height={18} /> },
  {
    id: "monitoring",
    name: "Monitoring",
    icon: <TrendingUpIcon width={18} height={18} />,
  },
  {
    id: "advanced",
    name: "Advanced",
    icon: <ZapIcon width={18} height={18} />,
  },
  {
    id: "troubleshoot",
    name: "Troubleshooting",
    icon: <TriangleAlertIcon width={18} height={18} />,
  },
];

export { vercelMenuData };
