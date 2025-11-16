import BellIcon from "@components/icons/BellIcon";
import FileTextIcon from "@components/icons/FileTextIcon";
import ImageIcon from "@components/icons/ImageIcon";
import MonitorIcon from "@components/icons/MonitorIcon";
import PackageIcon from "@components/icons/PackageIcon";
import RocketIcon from "@components/icons/RocketIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import SmartPhoneIcon from "@components/icons/SmartPhoneIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import WIFIOffIcon from "@components/icons/WIFIOffIcon";
import ZapIcon from "@components/icons/ZapIcon";

const pwaMenuData: Array<PWA.IPWAMenuItem> = [
  {
    id: "overview",
    name: "Overview",
    icon: <SmartPhoneIcon width={18} height={18} />,
  },
  {
    id: "benefits",
    name: "PWA Benefits",
    icon: <ZapIcon width={18} height={18} />,
  },
  {
    id: "installation",
    name: "Installation",
    icon: <PackageIcon width={18} height={18} />,
  },
  {
    id: "manifest",
    name: "Manifest Setup",
    icon: <FileTextIcon width={18} height={18} />,
  },
  {
    id: "service-worker",
    name: "Service Worker",
    icon: <SettingsIcon width={18} height={18} />,
  },
  {
    id: "icons",
    name: "Icons & Assets",
    icon: <ImageIcon width={18} height={18} />,
  },
  {
    id: "offline",
    name: "Offline Support",
    icon: <WIFIOffIcon width={18} height={18} />,
  },
  {
    id: "notifications",
    name: "Push Notifications",
    icon: <BellIcon width={18} height={18} />,
  },
  {
    id: "testing",
    name: "Testing",
    icon: <MonitorIcon width={18} height={18} />,
  },
  {
    id: "deployment",
    name: "Deployment",
    icon: <RocketIcon width={18} height={18} />,
  },
  {
    id: "troubleshoot",
    name: "Troubleshooting",
    icon: <TriangleAlertIcon width={18} height={18} />,
  },
];

export { pwaMenuData };
