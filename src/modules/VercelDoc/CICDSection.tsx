import ActivityIcon from "@components/icons/ActivityIcon";
import CodeIcon from "@components/icons/CodeIcon";
import RocketIcon from "@components/icons/RocketIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const CICDSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <ActivityIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            CI/CD Pipeline Configuration
          </h2>
        </div>

        <div className="bg-linear-to-r from-green-900 to-teal-900 p-6 rounded-lg border border-green-500">
          <p className="text-gray-200">
            Your project includes a pre-configured workflow at{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              .github/workflows/ci.yml
            </code>
          </p>
        </div>

        <CollapsibleSection
          title="View Workflow Configuration"
          id="workflow-config"
        >
          <CodeBlock
            id="workflow"
            code={`name: CI/CD Pipeline
      
      on:
        push:
          branches: [ main, develop ]
        pull_request:
          branches: [ main ]
      
      jobs:
        test:
          runs-on: ubuntu-latest
          steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version: '18'
                cache: 'npm'
            
            - run: npm ci
            - run: npm run lint
            - run: npm run format:ci
            - run: npm run build
            - run: npm run test:ci
      
        deploy:
          needs: test
          runs-on: ubuntu-latest
          if: github.ref == 'refs/heads/main'
          steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                node-version: '18'
                cache: 'npm'
            
            - run: npm ci
            - run: npm run build
            
            - uses: amondnet/vercel-action@v25
              with:
                vercel-token: \${{ secrets.VERCEL_TOKEN }}
                vercel-org-id: \${{ secrets.VERCEL_ORG_ID }}
                vercel-project-id: \${{ secrets.VERCEL_PROJECT_ID }}
                vercel-args: '--prod'`}
          />
        </CollapsibleSection>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900 border border-blue-500 rounded-lg p-5">
            <h4 className="font-semibold text-blue-400 mb-3 flex items-center space-x-2">
              <CodeIcon width={20} height={20} />
              <span>Test Stage</span>
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• ESLint checks for code standards</li>
              <li>• Prettier ensures consistent style</li>
              <li>• Build verification</li>
              <li>• Jest + React Testing Library</li>
            </ul>
          </div>

          <div className="bg-gray-900 border border-purple-500 rounded-lg p-5">
            <h4 className="font-semibold text-purple-400 mb-3 flex items-center space-x-2">
              <RocketIcon width={20} height={20} />
              <span>Deploy Stage</span>
            </h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Only runs on main branch</li>
              <li>• Production build optimization</li>
              <li>• Automated Vercel deployment</li>
              <li>• Automatic HTTPS enabled</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
          <h4 className="font-semibold text-blue-400 mb-3">
            Automatic Triggers:
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li>
              • <strong>Push to main:</strong> Full production deployment
            </li>
            <li>
              • <strong>Push to develop:</strong> Preview deployment
            </li>
            <li>
              • <strong>Pull Requests:</strong> Preview deployments for review
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CICDSection;
