import BadgeCheckIcon from "@components/icons/BadgeCheckIcon"
import RocketIcon from "@components/icons/RocketIcon"
import JestGuideCodeBlock from "../../shared/components/ui/CodeBlock"

const QuickStartSection = () => {
  return (
    <>
      <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <RocketIcon className="text-blue-400" width={32} height={32} />
                    <h2 className="text-3xl font-bold text-white">Quick Start</h2>
                  </div>

                  <div className="bg-linear-to-r from-green-900 to-blue-900 p-6 rounded-lg border border-green-500 mb-6">
                    <h3 className="text-xl font-semibold mb-3">Using Boilerplate</h3>
                    <p className="text-gray-200">Get started in minutes with our pre-configured setup!</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-400">Step 1: Clone Repository</h3>
                      <JestGuideCodeBlock 
                        id="clone"
                        code={`git clone https://github.com/Gautam-Ranpariya/nextjs-starter-tests
cd nextjs-starter-tests
npm install`}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-400">Step 2: Run Tests</h3>
                      <JestGuideCodeBlock 
                        id="run-tests"
                        code={`# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage`}
                      />
                    </div>

                    <div className="bg-green-900 bg-opacity-30 border border-green-500 rounded-lg p-6">
                      <div className="flex items-start space-x-3">
                        <BadgeCheckIcon className="text-green-400 shrink-0 mt-1" width={24} height={24} />
                        <div>
                          <h4 className="font-semibold text-green-400 mb-2">That's it!</h4>
                          <p className="text-gray-300">You're ready to start writing and running tests. All configurations are pre-set.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default QuickStartSection
