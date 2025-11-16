import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import BookIcon from "@components/icons/BookIcon";
import BookOpenIcon from "@components/icons/BookOpenIcon";
import CircleAlertIcon from "@components/icons/CircleAlertIcon";
import CodeIcon from "@components/icons/CodeIcon";
import FileTextIcon from "@components/icons/FileTextIcon";
import RocketIcon from "@components/icons/RocketIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import TerminalIcon from "@components/icons/TerminalIcon";

const testCaseDocMenuData: Array<TestCase.ITestCaseDocMenuItem> = [
  {
    id: "overview",
    name: "Overview",
    icon: <BookIcon width={18} height={18} />,
  },
  {
    id: "quickstart",
    name: "Quick Start",
    icon: <RocketIcon width={18} height={18} />,
  },
  {
    id: "manual",
    name: "Manual Setup",
    icon: <SettingsIcon width={18} height={18} />,
  },
  {
    id: "writing",
    name: "Writing Tests",
    icon: <CodeIcon width={18} height={18} />,
  },
  {
    id: "commands",
    name: "Commands",
    icon: <TerminalIcon width={18} height={18} />,
  },
  {
    id: "best",
    name: "Best Practices",
    icon: <BadgeCheckIcon width={18} height={18} />,
  },
  {
    id: "troubleshoot",
    name: "Troubleshooting",
    icon: <CircleAlertIcon width={18} height={18} />,
  },
];

const testCaseDocCommands: Array<TestCase.ITestCaseDocCommand> = [
  { cmd: "npm test", desc: "Run all tests once" },
  { cmd: "npm test --watch", desc: "Run tests in watch mode" },
  { cmd: "npm test --coverage", desc: "Generate coverage report" },
  {
    cmd: "npm test --verbose",
    desc: "Show detailed test results",
  },
  { cmd: "npm test --MyTest", desc: "Run specific test file" },
  { cmd: "npm test --updateSnapshot", desc: "Update snapshots" },
];

const BestSectionMenu: Array<TestCase.IBestSectionMenu> = [
  {
    title: "Organize Tests",
    desc: "Keep test files next to the components/functions they test",
    icon: <FileTextIcon />,
    color: "text-blue-400 flex-shrink-0",
  },
  {
    title: "Naming Convention",
    desc: "Use .test.js or .spec.js suffix for test files",
    icon: <BookOpenIcon />,
    color: "text-purple-400 flex-shrink-0",
  },
  {
    title: "Test Structure",
    desc: "Follow AAA pattern (Arrange, Act, Assert)",
    icon: <CodeIcon />,
    color: "text-green-400 flex-shrink-0",
  },
  {
    title: "Mock Dependencies",
    desc: "Use jest.mock() for external modules",
    icon: <SettingsIcon />,
    color: "text-yellow-400 flex-shrink-0",
  },
  {
    title: "Test One Thing",
    desc: "Each test should verify a single behavior",
    icon: <BadgeCheckIcon />,
    color: "text-pink-400 flex-shrink-0",
  },
];

const TrobleShootMenuData: Array<TestCase.ITrobleshootItem> = [
  {
    issue: "Cannot find module 'jest'",
    solution: "Run npm install to install dependencies",
  },
  {
    issue: "ReferenceError: document is not defined",
    solution: "Set testEnvironment: 'jsdom' in jest.config.js",
  },
  {
    issue: "CSS imports causing errors",
    solution: "Add CSS mock in moduleNameMapper configuration",
  },
  {
    issue: "Async tests timing out",
    solution: "Increase timeout: jest.setTimeout(10000)",
  },
];

export {
  BestSectionMenu,
  testCaseDocCommands,
  testCaseDocMenuData,
  TrobleShootMenuData,
};
