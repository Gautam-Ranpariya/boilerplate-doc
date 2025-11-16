import BadgeCheckIcon from "@components/icons/BadgeCheckIcon";
import RocketIcon from "@components/icons/RocketIcon";
import ShieldIcon from "@components/icons/ShieldIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const DeploymentSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <RocketIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Deployment</h2>
        </div>

        <div className="bg-linear-to-r from-green-900 to-teal-900 p-6 rounded-lg border border-green-500">
          <p className="text-gray-200">
            Deploy your PWA to make it accessible to users worldwide.
          </p>
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
                HTTPS Required
              </h4>
              <p className="text-gray-300">
                PWAs require HTTPS to function. Service workers will not
                register over HTTP (except localhost).
              </p>
            </div>
          </div>
        </div>

        <CollapsibleSection title="Deploy to Vercel" id="deploy-vercel">
          <CodeBlock
            id="vercel-deploy"
            code={`# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod`}
          />

          <div className="mt-4 bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-4">
            <p className="text-gray-300 text-sm">
              Vercel automatically provides HTTPS for all deployments
            </p>
          </div>
        </CollapsibleSection>

        <CollapsibleSection title="Deploy to Netlify" id="deploy-netlify">
          <CodeBlock
            id="netlify-deploy"
            code={`# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy

# Deploy to production
netlify deploy --prod`}
          />
        </CollapsibleSection>

        <CollapsibleSection title="Post-Deployment Checklist" id="post-deploy">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">Verify HTTPS is working</span>
            </div>
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">
                Test installation on multiple devices
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">
                Run Lighthouse audit on production URL
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">
                Check service worker registration
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">Test offline functionality</span>
            </div>
            <div className="flex items-center space-x-2">
              <BadgeCheckIcon
                width={18}
                height={18}
                className="text-green-400"
              />
              <span className="text-gray-300">
                Verify manifest loads correctly
              </span>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </>
  );
};

export default DeploymentSection;
