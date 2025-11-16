import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import TerminalIcon from "@components/icons/TerminalIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const TroubleshootSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TriangleAlertIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Troubleshooting Guide
          </h2>
        </div>

        <CollapsibleSection title="Build Failures" id="build-failures">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                TypeScript Errors
              </h4>
              <p className="text-gray-300 text-sm">
                Fix type issues before deployment. Run{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  npm run build
                </code>{" "}
                locally first.
              </p>
            </div>
            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Dependency Issues
              </h4>
              <p className="text-gray-300 text-sm">
                Ensure{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  package-lock.json
                </code>{" "}
                is committed and up to date.
              </p>
            </div>
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Environment Variables
              </h4>
              <p className="text-gray-300 text-sm">
                Check all required variables are set in Vercel Dashboard.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Authentication Problems" id="auth-problems">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">Invalid Token</h4>
              <p className="text-gray-300 text-sm">
                Regenerate token and update GitHub secrets.
              </p>
            </div>
            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">Wrong IDs</h4>
              <p className="text-gray-300 text-sm">
                Verify org/project IDs from{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  .vercel/project.json
                </code>
              </p>
            </div>
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Permissions
              </h4>
              <p className="text-gray-300 text-sm">
                Ensure token has deployment permissions.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Deployment Issues" id="deploy-issues">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">Timeout</h4>
              <p className="text-gray-300 text-sm">
                Optimize build process or increase timeout settings.
              </p>
            </div>
            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Size Limits
              </h4>
              <p className="text-gray-300 text-sm">
                Check for large files or dependencies that can be optimized.
              </p>
            </div>
            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Runtime Errors
              </h4>
              <p className="text-gray-300 text-sm">
                Test thoroughly before deployment using local build.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <div className="bg-gray-900 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400 flex items-center space-x-2">
            <TerminalIcon width={24} height={24} />
            <span>Debug Commands</span>
          </h3>
          <CodeBlock
            id="debug-cmds"
            code={`# Check Vercel CLI version
npx vercel --version

# List your projects
npx vercel ls

# Check deployment status
npx vercel inspect

# View deployment logs
npx vercel logs [deployment-url]`}
          />
        </div>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center space-x-2">
            <BadgeCheckIcon width={24} height={24} />
            <span>Success Indicators</span>
          </h3>
          <p className="text-gray-300 mb-3">
            You'll know everything is working when:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Green checkmarks appear on GitHub commits</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Vercel dashboard shows successful deployments</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Your app is accessible at the Vercel URL</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Preview deployments work for feature branches</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Environment variables are properly configured</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TroubleshootSection;
