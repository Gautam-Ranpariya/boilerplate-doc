import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import GithubIcon from "@components/icons/GithubIcon";
import RocketIcon from "@components/icons/RocketIcon";
import TerminalIcon from "@components/icons/TerminalIcon";

const PrerequisitesSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <BadgeCheckIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Prerequisites</h2>
        </div>

        <div className="grid gap-4">
          <div className="bg-gray-900 border border-blue-500 rounded-lg p-5">
            <div className="flex items-start space-x-4">
              <GithubIcon className="text-blue-400 shrink-0" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  GitHub Repository
                </h3>
                <p className="text-gray-400">
                  Your Next.js project pushed to GitHub
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-purple-500 rounded-lg p-5">
            <div className="flex items-start space-x-4">
              <RocketIcon className="text-purple-400 shrink-0" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vercel Account
                </h3>
                <p className="text-gray-400 mb-3">Free account at vercel.com</p>
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <span>Visit Vercel</span>
                  <ExternalLinkIcon width={16} height={16} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-green-500 rounded-lg p-5">
            <div className="flex items-start space-x-4">
              <TerminalIcon className="text-green-400 shrink-0" width={24} height={24} />
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vercel CLI
                </h3>
                <p className="text-gray-400">
                  Optional but recommended for local testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrerequisitesSection;
