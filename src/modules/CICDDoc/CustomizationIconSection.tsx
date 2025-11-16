import CodeIcon from "@components/icons/CodeIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const CustomizationIconSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <CodeIcon className="text-purple-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Customization Guide</h2>
        </div>

        <CollapsibleSection
          title="Change Reviewer Username"
          id="change-reviewer"
        >
          <p className="text-gray-300 mb-4">
            To use a different reviewer, update these locations in{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">ci.yml</code>:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">
                1. Auto-assign job condition:
              </h4>
              <CodeBlock
                id="custom-assign"
                code={`if (prAuthor === 'YOUR_USERNAME') {
// Replace 'Ka-ran123' with your username`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-purple-400 mb-2">
                2. Reviewers array:
              </h4>
              <CodeBlock
                id="custom-reviewers"
                code={`reviewers: ['YOUR_USERNAME']
// Replace 'Ka-ran123' with your username`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                3. Deploy job condition:
              </h4>
              <CodeBlock
                id="custom-deploy"
                code={`if: ... && github.event.review.user.login == 'YOUR_USERNAME'
// Replace 'Ka-ran123' with your username`}
              />
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Modify Node.js Version" id="change-node">
          <p className="text-gray-300 mb-3">
            To use a different Node.js version, update the environment variable:
          </p>
          <CodeBlock
            id="node-version"
            code={`env:
NODE_VERSION: 18  # Change to your desired version`}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Switch from Yarn to NPM" id="switch-npm">
          <p className="text-gray-300 mb-4">
            To use NPM instead of Yarn, make these changes:
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">
                1. Cache configuration:
              </h4>
              <CodeBlock
                id="npm-cache"
                code={`- name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ env.NODE_VERSION }}
          cache: 'npm'  # Change from 'yarn' to 'npm'`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-purple-400 mb-2">
                2. Install command:
              </h4>
              <CodeBlock
                id="npm-install"
                code={`- name: Install dependencies
        run: npm ci  # Change from 'yarn install --frozen-lockfile'`}
              />
            </div>

            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                3. All run commands:
              </h4>
              <CodeBlock
                id="npm-run"
                code={`- run: npm run format:ci   # Change from 'yarn run'
      - run: npm run lint
      - run: npm run build
      - run: npm run test:ci`}
              />
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Add Deployment Timeout" id="add-timeout">
          <p className="text-gray-300 mb-3">
            To prevent long-running deployments, add a timeout:
          </p>
          <CodeBlock
            id="timeout"
            code={`deploy:
        runs-on: ubuntu-latest
        timeout-minutes: 15  # Add this line
        if: ...`}
          />
        </CollapsibleSection>
      </div>
    </>
  );
};

export default CustomizationIconSection;
