import SettingsIcon from "@components/icons/SettingsIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const PipelineSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <SettingsIcon className="text-orange-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            CI/CD Pipeline Configuration
          </h2>
        </div>

        <div className="bg-linear-to-r from-orange-900 to-red-900 p-6 rounded-lg border border-orange-500">
          <p className="text-gray-200">
            Create a file at{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              .github/workflows/ci.yml
            </code>{" "}
            with the complete pipeline configuration
          </p>
        </div>

        <CollapsibleSection title="Trigger Events" id="triggers">
          <CodeBlock
            id="trigger-events"
            code={`on:
push:
branches: [main]

pull_request:
types: [opened, reopened, ready_for_review, synchronize]
branches: [main]
    
pull_request_review:
types: [submitted]
branches: [main]`}
          />

          <div className="mt-4 grid gap-3">
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-3">
              <p className="text-gray-300">
                <strong className="text-blue-400">push:</strong> Runs on direct
                commits to main branch
              </p>
            </div>
            <div className="bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-3">
              <p className="text-gray-300">
                <strong className="text-purple-400">pull_request:</strong> Runs
                when PRs are opened, reopened, or updated
              </p>
            </div>
            <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-3">
              <p className="text-gray-300">
                <strong className="text-green-400">pull_request_review:</strong>{" "}
                Runs when a review is submitted
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Environment Variables" id="env-vars">
          <CodeBlock
            id="env"
            code={`env:
    NODE_VERSION: 20
      
permissions:
    contents: write
    pull-requests: write
    actions: read`}
          />

          <div className="mt-4 space-y-2 text-gray-300 text-sm">
            <p>
              •{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">
                NODE_VERSION: 20
              </code>{" "}
              - Node.js version for all jobs
            </p>
            <p>
              •{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">permissions</code>{" "}
              - Required access levels for GitHub Actions
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Job 1: Build" id="job-build">
          <CodeBlock
            id="build-job"
            code={`build:
        runs-on: ubuntu-latest
      
        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
      
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: \${{ env.NODE_VERSION }}
              cache: 'yarn'
      
          - name: Install dependencies
            run: yarn install --frozen-lockfile
      
          - name: Prettier check
            run: yarn run format:ci
      
          - name: ESLint check
            run: yarn run lint
      
          - name: Build Next.js
            run: yarn run build`}
          />

          <div className="mt-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-2">
              What This Job Does:
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>✅ Checks out the code</li>
              <li>✅ Sets up Node.js with Yarn caching</li>
              <li>✅ Installs dependencies with locked versions</li>
              <li>✅ Runs Prettier to check code formatting</li>
              <li>✅ Runs ESLint to check code quality</li>
              <li>✅ Builds the Next.js application</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Job 2: Test" id="job-test">
          <CodeBlock
            id="test-job"
            code={`test:
        runs-on: ubuntu-latest
        needs: [build]
      
        steps:
          - name: Checkout repository
            uses: actions/checkout@v4
      
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: \${{ env.NODE_VERSION }}
              cache: 'yarn'
      
          - name: Install dependencies
            run: yarn install --frozen-lockfile
      
          - name: Run tests
            run: yarn run test:ci`}
          />

          <div className="mt-4 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-2">
              What This Job Does:
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>✅ Depends on the build job (runs only if build succeeds)</li>
              <li>✅ Runs Jest test suite with coverage</li>
              <li>✅ Ensures all tests pass before deployment</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Job 3: Auto-Assign Reviewer" id="job-assign">
          <CodeBlock
            id="assign-job"
            code={`auto-assign:
        runs-on: ubuntu-latest
        needs: [build, test]
        if: github.event_name == 'pull_request'
      
        steps:
          - name: Assign Ka-ran123 as reviewer
            uses: actions/github-script@v7
            with:
              github-token: \${{ secrets.GITHUB_TOKEN }}
              script: |
                const prNumber = context.payload.pull_request.number;
                const prAuthor = context.payload.pull_request.user.login;
              
                // Replace Reviewer with 'Ka-ran123'
                if (prAuthor === 'Ka-ran123') {
                  console.log("Skipping (self-review not allowed).");
                } else {
                  await github.rest.pulls.requestReviewers({
                    owner: context.repo.owner,
                    repo: context.repo.repo,
                    pull_number: prNumber,
                    reviewers: ['Ka-ran123'] // Replace Reviewer with 'Ka-ran123'
                  });
                }`}
          />

          <div className="mt-4 bg-purple-900 bg-opacity-30 border border-purple-500 rounded-lg p-4">
            <h4 className="font-semibold text-purple-400 mb-2">
              What This Job Does:
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>✅ Runs only on pull request events</li>
              <li>✅ Automatically assigns @Ka-ran123 as reviewer</li>
              <li>✅ Skips assignment if PR author is Ka-ran123</li>
              <li>✅ Uses GitHub API to request review</li>
            </ul>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Job 4: Deploy" id="job-deploy">
          <CodeBlock
            id="deploy-job"
            code={`deploy:
        runs-on: ubuntu-latest
        if: github.event_name == 'pull_request_review' && 
            github.event.review.state == 'approved' && 
            github.event.review.user.login == 'Ka-ran123'
      
        steps:
          - name: Record deployment start time
            run: echo "DEPLOY_START_TIME=$(date +%s)" >> $GITHUB_ENV
      
          - name: Checkout PR branch
            uses: actions/checkout@v4
            with:
              ref: \${{ github.event.pull_request.head.sha }}
      
          - name: Setup Node.js
            uses: actions/setup-node@v4
            with:
              node-version: \${{ env.NODE_VERSION }}
              cache: 'yarn'
      
          - name: Deploy to Vercel
            run: |
              npx vercel deploy --prod --yes --token \${{ secrets.VERCEL_TOKEN }}
      
          - name: Comment deployment success
            uses: actions/github-script@v7
            with:
              github-token: \${{ secrets.GITHUB_TOKEN }}
              script: |
                await github.rest.issues.createComment({
                  issue_number: context.issue.number,
                  owner: context.repo.owner,
                  repo: context.repo.repo,
                  body: '🚀 **Deployment Successful!**'
                })`}
          />

          <div className="mt-4 bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-2">
              What This Job Does:
            </h4>
            <ul className="space-y-1 text-gray-300 text-sm">
              <li>✅ Runs only when PR is approved by @Ka-ran123</li>
              <li>✅ Records deployment start time for metrics</li>
              <li>✅ Checks out the PR branch code</li>
              <li>✅ Deploys to Vercel production</li>
              <li>✅ Posts success comment on the PR</li>
            </ul>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default PipelineSection;
