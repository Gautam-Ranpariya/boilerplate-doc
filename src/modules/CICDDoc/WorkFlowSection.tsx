import PlayIcon from "@components/icons/PlayIcon";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const WorkFlowSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <PlayIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            How It Works in Practice
          </h2>
        </div>

        <CollapsibleSection
          title="Scenario 1: Creating a Pull Request"
          id="scenario-pr"
        >
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>
              <strong>Developer creates a PR</strong> targeting the main branch
            </li>
            <li>
              <strong>Build job runs:</strong> Checks code quality (Prettier,
              ESLint) and builds the app
            </li>
            <li>
              <strong>Test job runs:</strong> Executes all Jest tests
            </li>
            <li>
              <strong>Auto-assign job runs:</strong> Automatically assigns
              @Ka-ran123 as reviewer
            </li>
            <li>
              <strong>Status checks appear:</strong> PR shows ✅ or ❌ for each
              job
            </li>
          </ol>

          <div className="mt-4 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              The developer can see all status checks directly on the pull
              request page.
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Scenario 2: PR Approval & Deployment"
          id="scenario-approval"
        >
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>
              <strong>@Ka-ran123 reviews the PR</strong> and approves it
            </li>
            <li>
              <strong>Deploy job triggers:</strong> Automatically starts
              deployment process
            </li>
            <li>
              <strong>Smart caching:</strong> Restores build artifacts if
              available
            </li>
            <li>
              <strong>Vercel deployment:</strong> Deploys to production
              environment
            </li>
            <li>
              <strong>Success comment:</strong> Bot posts deployment success
              message with duration
            </li>
            <li>
              <strong>Notify job:</strong> Logs final status
            </li>
          </ol>

          <div className="mt-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              ✅ The entire process is automated after approval - no manual
              intervention needed!
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection
          title="Scenario 3: Push to Main Branch"
          id="scenario-push"
        >
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>
              <strong>Direct push to main:</strong> Triggers build and test jobs
            </li>
            <li>
              <strong>Quality checks:</strong> Ensures code meets standards
            </li>
            <li>
              <strong>No auto-assign:</strong> Skips reviewer assignment (not a
              PR)
            </li>
            <li>
              <strong>No deployment:</strong> Deploy job only runs on PR
              approval
            </li>
          </ol>

          <div className="mt-4 bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              ⚠️ Direct pushes to main are validated but not deployed
              automatically.
            </p>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default WorkFlowSection;
