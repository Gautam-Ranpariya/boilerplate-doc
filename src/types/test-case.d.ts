declare namespace TestCase {
  type testcaseMenuType =
    | "overview"
    | "quickstart"
    | "manual"
    | "writing"
    | "commands"
    | "best"
    | "troubleshoot";

  interface ITestCaseState {
    activeSection: testcaseMenuType;
  }

  interface ITestCaseDocMenuItem {
    id: testcaseMenuType;
    name: string;
    icon: React.ReactNode;
  }

  interface ITestCaseDocCommand {
    cmd: string;
    desc: string;
  }

  interface IBestSectionMenu {
    title: string;
    desc: string;
    icon: React.ReactNode;
    color: string;
  }

  interface ITrobleshootItem {
    issue: string;
    solution: string;
  }
}
