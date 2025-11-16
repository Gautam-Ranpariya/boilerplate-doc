import CodeIcon from "@components/icons/CodeIcon";
import GithubIcon from "@components/icons/GithubIcon";
import GlobeIcon from "@components/icons/GlobeIcon";
import SettingsIcon from "@components/icons/SettingsIcon";
import TriangleAlertIcon from "@components/icons/TriangleAlertIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const LocalConfigSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <SettingsIcon className="text-purple-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">
            Local Vercel Configuration
          </h2>
        </div>

        <CollapsibleSection title="Install Vercel CLI" id="install-cli">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-blue-400 mb-2">
                Option A: Global Installation
              </h4>
              <CodeBlock id="install-global" code="npm install -g vercel" />
            </div>
            <div>
              <h4 className="font-semibold text-green-400 mb-2">
                Option B: Use NPX (Recommended)
              </h4>
              <CodeBlock id="install-npx" code="npx vercel" />
            </div>
            <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
              <p className="text-gray-300">
                <strong className="text-blue-400">Pro Tip:</strong> Using{" "}
                <code className="bg-gray-900 px-2 py-1 rounded">
                  npx vercel
                </code>{" "}
                ensures you always use the latest version without global
                installation.
              </p>
            </div>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Login to Vercel" id="login-vercel">
          <CodeBlock id="vercel-login" code="npx vercel login" />
          <p className="text-gray-300 mt-3 mb-2">
            Choose your preferred authentication method:
          </p>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center space-x-2">
              <GithubIcon width={16} height={16} className="text-purple-400" />
              <span>
                <strong>GitHub:</strong> Seamless integration with your
                repositories
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <CodeIcon width={16} height={16} className="text-orange-400" />
              <span>
                <strong>GitLab:</strong> For GitLab users
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <GlobeIcon width={16} height={16} className="text-blue-400" />
              <span>
                <strong>Email:</strong> Direct email authentication
              </span>
            </li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Link Your Project" id="link-project">
          <p className="text-gray-300 mb-3">
            Navigate to your project directory and run:
          </p>
          <CodeBlock
            id="link-cmd"
            code={`cd your-nextjs-project
npx vercel link`}
          />

          <h4 className="font-semibold text-purple-400 mt-4 mb-2">
            Configuration Prompts:
          </h4>
          <ol className="space-y-3 text-gray-300 list-decimal list-inside">
            <li>
              <strong>Scope Selection:</strong> Choose your personal account for
              protected deployments
            </li>
            <li>
              <strong>Project Setup:</strong> Select "Create a new project" or
              "Link to existing project"
            </li>
            <li>
              <strong>Project Name:</strong> Choose a memorable name (e.g.,{" "}
              <code className="bg-gray-900 px-2 py-1 rounded">
                nextjs-typescript-boilerplate
              </code>
              )
            </li>
          </ol>
        </CollapsibleSection>

        <CollapsibleSection title="Verify Configuration" id="verify-config">
          <p className="text-gray-300 mb-3">
            After linking, check the generated configuration:
          </p>
          <CodeBlock id="cat-config" code="cat .vercel/project.json" />

          <p className="text-gray-300 mt-4 mb-2">
            <strong>Expected Output:</strong>
          </p>
          <CodeBlock
            id="config-output"
            code={`{
    "orgId": "your-org-id-here",
    "projectId": "your-project-id-here"
}`}
          />

          <div className="bg-yellow-900 bg-opacity-30 border border-yellow-500 rounded-lg p-4 mt-4">
            <div className="flex items-start space-x-3">
              <TriangleAlertIcon
                className="text-yellow-400 shrink-0 mt-1"
                width={20}
                height={20}
              />
              <div>
                <p className="text-yellow-400 font-semibold mb-1">
                  Important Security Note
                </p>
                <p className="text-gray-300">
                  The{" "}
                  <code className="bg-gray-900 px-2 py-1 rounded">
                    .vercel/project.json
                  </code>{" "}
                  file is local only and should never be committed to version
                  control.
                </p>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default LocalConfigSection;
