import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import TerminalIcon from "@components/icons/TerminalIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const TroubleShootSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <TriangleAlertIcon className="text-red-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Troubleshooting Guide
          </h2>
        </div>

        <CollapsibleSection title="Build Failures" id="build-fail">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                TypeScript Errors
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Build fails with type errors
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Run{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  yarn build
                </code>{" "}
                locally to fix type issues before pushing
              </p>
            </div>

            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Linting Errors
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> ESLint check fails
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Run{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  yarn lint --fix
                </code>{" "}
                to auto-fix issues
              </p>
            </div>

            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Formatting Errors
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Prettier check fails
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Run{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  yarn format
                </code>{" "}
                to format code
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Test Failures" id="test-fail">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                Test Suite Fails
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> One or more tests fail
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Run{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">yarn test</code>{" "}
                locally to debug and fix failing tests
              </p>
            </div>

            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Timeout Issues
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Tests timeout in CI
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Increase timeout in Jest config or
                optimize slow tests
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Deployment Issues" id="deploy-fail">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                Invalid Vercel Token
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Deployment fails with authentication
                error
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Regenerate Vercel token and update
                GitHub secret
              </p>
            </div>

            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Missing Environment Variables
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Deployment succeeds but app fails at
                runtime
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Check Vercel dashboard and add
                required environment variables
              </p>
            </div>

            <div className="bg-gray-900 border border-yellow-500 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-400 mb-2">
                Build Timeout
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Deployment times out
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Optimize build process or increase
                timeout in workflow
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Auto-Assignment Issues" id="assign-fail">
          <div className="space-y-3">
            <div className="bg-gray-900 border border-red-500 rounded-lg p-4">
              <h4 className="font-semibold text-red-400 mb-2">
                Reviewer Not Assigned
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Auto-assign job runs but reviewer is not
                added
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Check if username is correct and user
                has repository access
              </p>
            </div>

            <div className="bg-gray-900 border border-orange-500 rounded-lg p-4">
              <h4 className="font-semibold text-orange-400 mb-2">
                Permission Denied
              </h4>
              <p className="text-gray-300 text-sm mb-2">
                <strong>Issue:</strong> Auto-assign fails with permission error
              </p>
              <p className="text-gray-300 text-sm">
                <strong>Solution:</strong> Ensure workflow has{" "}
                <code className="bg-gray-800 px-2 py-1 rounded">
                  pull-requests: write
                </code>{" "}
                permission
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-green-400 flex items-center space-x-2">
            <BadgeCheckIcon width={24} height={24} />
            <span>Success Indicators</span>
          </h3>
          <p className="text-gray-300 mb-3">
            You will know everything is working when:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>All status checks show green on PRs</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Reviewer is automatically assigned to new PRs</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Deployment triggers after approval</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Success comment appears on PR after deployment</span>
            </li>
            <li className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span>Your app is live and accessible</span>
            </li>
          </ul>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3 text-blue-400 flex items-center space-x-2">
            <TerminalIcon width={24} height={24} />
            <span>Debug Commands</span>
          </h3>
          <CodeBlock
            id="debug-cmds"
            code={`# Test locally before pushing
yarn lint
yarn format:ci
yarn build
yarn test

# View workflow logs
gh run list
gh run view [run-id]

# Check Vercel deployment
vercel logs [deployment-url]`}
          />
        </div>
      </div>
    </>
  );
};

export default TroubleShootSection;
