import ActivityIcon from "@components/icons/ActivityIcon";
import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import GitBranchIcon from "@components/icons/GitBranchIcon";
import WorkFlowDiagram from "./WorkFlowDiagram";

const OverviewSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <ActivityIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Overview</h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-purple-900 p-6 rounded-lg border border-blue-500">
          <p className="text-lg leading-relaxed">
            This guide explains the complete CI/CD pipeline implementation for
            the Next.js TypeScript Boilerplate. The pipeline automates code
            quality checks, testing, code review assignment, and deployment to
            Vercel.
          </p>
        </div>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center space-x-2">
            <BadgeCheckIcon width={24} height={24} />
            <span>What This Pipeline Does</span>
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400 shrink-0 mt-1"
              />
              <span>
                <strong>Automated Quality Checks:</strong> Runs Prettier,
                ESLint, and builds on every push
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400 shrink-0 mt-1"
              />
              <span>
                <strong>Automated Testing:</strong> Executes Jest test suite
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400 shrink-0 mt-1"
              />
              <span>
                <strong>Auto-Assign Reviewer:</strong> Automatically assigns
                @Ka-ran123 as reviewer on PRs
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400 shrink-0 mt-1"
              />
              <span>
                <strong>Deployment on Approval:</strong> Deploys to Vercel when
                PR is approved
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400 shrink-0 mt-1"
              />
              <span>
                <strong>Deployment Notifications:</strong> Posts deployment
                status as PR comments
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3 text-white flex items-center space-x-2">
            <GitBranchIcon width={24} height={24} className="text-purple-400" />
            <span>Workflow Diagram</span>
          </h3>
          <WorkFlowDiagram />
        </div>
      </div>
    </>
  );
};

export default OverviewSection;
