import ExternalLinkIcon from "@components/icons/ExternalLinkIcon";
import GithubIcon from "@components/icons/GithubIcon";
import KeyIcon from "@components/icons/KeyIcon";
import RocketIcon from "@components/icons/RocketIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import ShieldIcon from "@components/icons/ShieldIcon";

const TokenSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <KeyIcon className="text-yellow-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Vercel Token Generation
          </h2>
        </div>

        <div className="bg-linear-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-500">
          <h3 className="text-xl font-semibold mb-3 text-white">
            Create Personal Access Token
          </h3>
          <ol className="space-y-2 text-gray-200 list-decimal list-inside">
            <li>Go to Vercel Tokens Page</li>
            <li>Click "Create Token"</li>
            <li>
              Provide name:{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">
                nextjs-boilerplate-ci
              </code>
            </li>
            <li>Set expiration (recommended: 1 year for CI/CD)</li>
            <li>
              Select scope: <strong>Full Account</strong>
            </li>
            <li>
              <strong>Copy the token immediately</strong> - it won't be shown
              again!
            </li>
          </ol>
          <div className="mt-4">
            <a
              href="https://vercel.com/account/tokens"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-purple-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Create Token</span>
              <ExternalLinkIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="bg-red-900 bg-opacity-30 border border-red-500 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <ShieldIcon
              className="text-red-400 shrink-0 mt-1"
              width={24}
              height={24}
            />
            <div>
              <h4 className="font-semibold text-red-400 mb-2">
                Security Best Practice
              </h4>
              <p className="text-gray-300">
                Store this token securely and never commit it to your
                repository. We'll add it to GitHub Secrets in the next step.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h4 className="font-semibold text-blue-400 mb-3">
            Where This Token Is Used:
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <GithubIcon width={18} height={18} className="text-blue-400" />
              <span>
                <strong>GitHub Actions:</strong> Authenticates CI/CD pipeline
                with Vercel
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <RocketIcon width={18} height={18} className="text-purple-400" />
              <span>
                <strong>Automated Deployments:</strong> Enables push-to-deploy
                workflow
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <SettingsIcon width={18} height={18} className="text-green-400" />
              <span>
                <strong>Build Process:</strong> Allows CI to build and deploy
                your app
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TokenSection;
