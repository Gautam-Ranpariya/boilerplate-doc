import ActivityIcon from "@components/icons/ActivityIcon";
import CirclePlayIcon from "@components/icons/CirclePlayIcon";
import CodeIcon from "@components/icons/CodeIcon";
import FileTextIcon from "@components/icons/FileTextIcon";
import LockIcon from "@components/icons/LockIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import TrendingUpIcon from "@components/icons/TrendingUpIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import UsersIcon from "@components/icons/UsersIcon";

const ciCdMenuData : Array<CICD.ICICDDocMenuItem> = [
  {
    id: "overview",
    name: "Overview",
    icon: <ActivityIcon width={18} height={18} />,
  },
  {
    id: "structure",
    name: "Project Structure",
    icon: <FileTextIcon width={18} height={18} />,
  },
  {
    id: "codeowners",
    name: "CODEOWNERS",
    icon: <UsersIcon width={18} height={18} />,
  },
  {
    id: "pipeline",
    name: "Pipeline Config",
    icon: <SettingsIcon width={18} height={18} />,
  },
  {
    id: "secrets",
    name: "Secrets Setup",
    icon: <LockIcon width={18} height={18} />,
  },
  {
    id: "workflows",
    name: "How It Works",
    icon: <CirclePlayIcon width={18} height={18} />,
  },
  {
    id: "customization",
    name: "Customization",
    icon: <CodeIcon width={18} height={18} />,
  },
  {
    id: "monitoring",
    name: "Monitoring",
    icon: <TrendingUpIcon width={18} height={18} />,
  },
  {
    id: "troubleshoot",
    name: "Troubleshooting",
    icon: <TriangleAlertIcon width={18} height={18} />,
  },
];

export { ciCdMenuData };

