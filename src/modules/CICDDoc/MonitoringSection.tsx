import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import ClockIcon from "@components/icons/ClockIcon";
import TerminalIcon from "@components/icons/TerminalIcon";
import TrendingUpIcon from "@components/icons/TrendingUpIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";

const MonitoringSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUpIcon className="text-blue-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Monitoring & Debugging
          </h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-6 rounded-lg border border-blue-500">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Viewing Workflow Status
          </h3>
          <ol className="space-y-2 text-gray-200 list-decimal list-inside">
            <li>Go to your GitHub repository</li>
            <li>
              Click on the <strong>"Actions"</strong> tab
            </li>
            <li>View all workflow runs and their status</li>
            <li>Click on any run to see detailed logs</li>
          </ol>
        </div>

        <div className="grid gap-4">
          <div className="bg-gray-900 border border-green-500 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <BadgeCheckIcon
                className="text-green-400"
                width={24}
                height={24}
              />
              <h3 className="text-lg font-semibold text-green-400">
                Success Status
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Green checkmark indicates all jobs passed successfully
            </p>
          </div>

          <div className="bg-gray-900 border border-red-500 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <TriangleAlertIcon
                className="text-red-400"
                width={24}
                height={24}
              />
              <h3 className="text-lg font-semibold text-red-400">
                Failure Status
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Red X shows build, test, or deployment issues - check logs for
              details
            </p>
          </div>

          <div className="bg-gray-900 border border-yellow-500 rounded-lg p-5">
            <div className="flex items-center space-x-3 mb-3">
              <ClockIcon className="text-yellow-400" width={24} height={24} />
              <h3 className="text-lg font-semibold text-yellow-400">
                In Progress
              </h3>
            </div>
            <p className="text-gray-300 text-sm">
              Yellow circle indicates the workflow is currently running
            </p>
          </div>
        </div>

        <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-purple-400 flex items-center space-x-2">
            <TerminalIcon width={24} height={24} />
            <span>Viewing Detailed Logs</span>
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>• Click on any workflow run to see all jobs</li>
            <li>• Click on a specific job to see step-by-step execution</li>
            <li>• Expand any step to see detailed output and errors</li>
            <li>• Download logs for offline analysis if needed</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MonitoringSection;
