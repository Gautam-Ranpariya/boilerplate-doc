import CodeIcon from "@components/icons/CodeIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const TestingSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <CodeIcon className="text-purple-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Testing Your Setup</h2>
        </div>

        <CollapsibleSection title="Local Testing" id="local-test">
          <p className="text-gray-300 mb-3">
            Before pushing to production, test locally:
          </p>
          <CodeBlock
            id="test-local"
            code={`# Build and test locally
npm run build
npm run test
      
# Test Vercel deployment locally
npx vercel --prod`}
          />
        </CollapsibleSection>

        <CollapsibleSection title="First Deployment" id="first-deploy">
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>Make a small change to your project</li>
            <li>Commit and push to the main branch</li>
            <li>Monitor the deployment</li>
          </ol>

          <CodeBlock
            id="git-push"
            code={`git add .
git commit -m "feat: initial deployment setup"
git push origin main`}
          />

          <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4 mt-4">
            <h4 className="font-semibold text-blue-400 mb-2">
              Monitor Deployment:
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>
                • <strong>GitHub Actions:</strong> Check the "Actions" tab
              </li>
              <li>
                • <strong>Vercel Dashboard:</strong> Monitor deployment progress
              </li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default TestingSection;
