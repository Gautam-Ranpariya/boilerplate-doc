import FileTextIcon from "@components/icons/FileTextIcon";
import CodeBlock from "@components/ui/CodeBlock";
import CollapsibleSection from "@components/ui/CollapsibleSection";

const MeniFestSection = () => {
  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <FileTextIcon className="text-green-400" width={32} height={32} />
          <h2 className="text-3xl font-bold text-white">Manifest Setup</h2>
        </div>

        <div className="bg-linear-to-r from-green-900 to-teal-900 p-6 rounded-lg border border-green-500">
          <p className="text-gray-200">
            The Web App Manifest is a JSON file that tells the browser about
            your PWA and how it should behave when installed.
          </p>
        </div>

        <CollapsibleSection title="Create manifest.json" id="create-manifest">
          <p className="text-gray-300 mb-3">
            Create{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              public/manifest.json
            </code>
            :
          </p>
          <CodeBlock
            id="manifest"
            code={`{
    "name": "My Next.js PWA",
    "short_name": "NextPWA",
    "description": "A Progressive Web App built with Next.js",
    "theme_color": "#000000",
    "background_color": "#ffffff",
    "display": "standalone",
    "orientation": "portrait",
    "scope": "/",
    "start_url": "/",
    "icons": [
        {
          "src": "/icons/icon-72x72.png",
          "sizes": "72x72",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-96x96.png",
          "sizes": "96x96",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-128x128.png",
          "sizes": "128x128",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-144x144.png",
          "sizes": "144x144",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-152x152.png",
          "sizes": "152x152",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-384x384.png",
          "sizes": "384x384",
          "type": "image/png",
          "purpose": "maskable any"
        },
        {
          "src": "/icons/icon-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable any"
        }
    ]
}`}
          />
        </CollapsibleSection>

        <CollapsibleSection
          title="Link Manifest in _document.tsx"
          id="link-manifest"
        >
          <p className="text-gray-300 mb-3">
            Add the manifest link in{" "}
            <code className="bg-gray-900 px-2 py-1 rounded">
              pages/_document.tsx
            </code>
            :
          </p>
          <CodeBlock
            id="document"
            code={`import { Html, Head, Main, NextScript } from 'next/document';
      
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}`}
          />
        </CollapsibleSection>

        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700">
          <h3 className="text-xl font-semibold mb-3 text-purple-400">
            Manifest Properties Explained
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                name
              </div>
              <div className="text-gray-300">
                Full name shown during installation
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                short_name
              </div>
              <div className="text-gray-300">
                Name shown on home screen (12 chars max)
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                theme_color
              </div>
              <div className="text-gray-300">Browser toolbar color</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                background_color
              </div>
              <div className="text-gray-300">Splash screen background</div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                display
              </div>
              <div className="text-gray-300">
                standalone (full-screen) or browser
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-40 shrink-0 font-semibold text-blue-400">
                start_url
              </div>
              <div className="text-gray-300">URL to load when app opens</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeniFestSection;
