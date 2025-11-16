import SettingsIcon from '@components/icons/SettingsIcon'
import CollapsibleSection from '../../shared/components/ui/CollapsibleSection'
import JestGuideCodeBlock from '../../shared/components/ui/CodeBlock'

const ManualSection = () => {
  return (
    <>
      <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <SettingsIcon className="text-purple-400" width={32} height={32} />
                    <h2 className="text-3xl font-bold text-white">Manual Integration</h2>
                  </div>

                  <CollapsibleSection title="Step 1: Install Jest" id="install-jest">
                    <JestGuideCodeBlock
                      id="install"
                      code={`# Using npm
npm install --save-dev jest

# Using yarn
yarn add --dev jest`}
                    />
                  </CollapsibleSection>

                  <CollapsibleSection title="Step 2: Install Additional Dependencies" id="install-deps">
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-300 mb-2">For React projects:</p>
                        <JestGuideCodeBlock 
                          id="react-deps"
                          code={`npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event`}
                        />
                      </div>
                      <div>
                        <p className="text-gray-300 mb-2">For TypeScript projects:</p>
                        <JestGuideCodeBlock 
                          id="ts-deps"
                          code={`npm install --save-dev @types/jest ts-jest`}
                        />
                      </div>
                    </div>
                  </CollapsibleSection>

                  <CollapsibleSection title="Step 3: Configure Jest" id="config-jest">
                    <p className="text-gray-300 mb-3">Create <code className="bg-gray-900 px-2 py-1 rounded">jest.config.js</code> in your project root:</p>
                    <JestGuideCodeBlock 
                      id="config"
                      code={`module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  moduleNameMapper: {
    '\\\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/index.js',
  ],
  
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
  ],
};`}
                    />
                  </CollapsibleSection>

                  <CollapsibleSection title="Step 4: Create Setup File" id="setup-file">
                    <p className="text-gray-300 mb-3">Create <code className="bg-gray-900 px-2 py-1 rounded">jest.setup.js</code>:</p>
                    <JestGuideCodeBlock 
                      id="setup"
                      code={`import '@testing-library/jest-dom';

global.console = {
  ...console,
  error: jest.fn(),
  warn: jest.fn(),
};`}
                    />
                  </CollapsibleSection>

                  <CollapsibleSection title="Step 5: Update package.json" id="package-json">
                    <JestGuideCodeBlock 
                      id="scripts"
                      code={`{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:verbose": "jest --verbose"
  }
}`}
                    />
                  </CollapsibleSection>
                </div>
    </>
  )
}

export default ManualSection
