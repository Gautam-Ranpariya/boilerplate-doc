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
  { id: "overview", name: "Overview", icon: <RocketIcon /> },
  { id: "prerequisites", name: "Prerequisites", icon: <CircleAlertIcon /> },
  { id: "local-config", name: "Local Setup", icon: <SettingsIcon /> },
  { id: "token", name: "Token Generation", icon: <KeyIcon /> },
  { id: "github-secrets", name: "GitHub Secrets", icon: <LockIcon /> },
  { id: "cicd", name: "CI/CD Pipeline", icon: <ActivityIcon /> },
  { id: "testing", name: "Testing", icon: <CodeIcon /> },
  { id: "monitoring", name: "Monitoring", icon: <TrendingUpIcon /> },
  { id: "advanced", name: "Advanced", icon: <ZapIcon /> },
  { id: "troubleshoot", name: "Troubleshooting", icon: <TriangleAlertIcon /> },
];

export { vercelMenuData };
