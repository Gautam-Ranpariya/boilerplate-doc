import ActivityIcon from "@components/icons/ActivityIcon";
import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import GithubIcon from "@components/icons/GithubIcon";
import TrendingUpIcon from "@components/icons/TrendingUpIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";

const MonitoringSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TrendingUpIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Monitoring & Management
          </h2>
        </div>

        <div className="bg-linear-to-r from-blue-900 to-indigo-900 p-6 rounded-lg border border-blue-500">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Vercel Dashboard
          </h3>
          <p className="text-gray-200 mb-4">
            Access your deployment metrics and configurations
          </p>
          <ul className="space-y-2 text-gray-200 mb-4">
            <li>
              • <strong>Deployment History:</strong> Track all deployments and
              rollbacks
            </li>
            <li>
              • <strong>Performance Metrics:</strong> Core Web Vitals and
              loading times
            </li>
            <li>
              • <strong>Preview Deployments:</strong> Test branches and PRs
            </li>
            <li>
              • <strong>Custom Domains:</strong> Configure your own domain
            </li>
          </ul>
          <a
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <span>Open Dashboard</span>
            <ExternalLinkIcon width={16} height={16} />
          </a>
        </div>

        <div className="bg-gray-900 border border-gray-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-white flex items-center space-x-2">
            <GithubIcon width={24} height={24} className="text-purple-400" />
            <span>GitHub Actions Monitoring</span>
          </h3>
          <div className="grid gap-3">
            <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
              <BadgeCheckIcon
                className="text-green-400"
                width={20}
                height={20}
              />
              <div>
                <span className="font-semibold text-green-400">Success:</span>
                <span className="text-gray-300 ml-2">
                  Green checkmark indicates successful deployment
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
              <TriangleAlertIcon
                className="text-red-400"
                width={20}
                height={20}
              />
              <div>
                <span className="font-semibold text-red-400">Failure:</span>
                <span className="text-gray-300 ml-2">
                  Red X shows build or deployment issues
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
              <ActivityIcon
                className="text-yellow-400"
                width={20}
                height={20}
              />
              <div>
                <span className="font-semibold text-yellow-400">
                  In Progress:
                </span>
                <span className="text-gray-300 ml-2">
                  Yellow circle indicates running workflow
                </span>
              </div>
            </div>
          </div>
          <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-4 mt-4">
            <p className="text-gray-300">
              <strong className="text-yellow-400">Troubleshooting:</strong>{" "}
              Check workflow logs for detailed error messages if deployments
              fail.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MonitoringSection;
