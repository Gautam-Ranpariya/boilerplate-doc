import CodeIcon from "@components/icons/CodeIcon"
import CollapsibleSection from "../../shared/components/ui/CollapsibleSection"
import JestGuideCodeBlock from "../../shared/components/ui/CodeBlock"

const WritingSection = () => {
  return (
    <>
      <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CodeIcon className="text-green-400" width={32} height={32} />
                    <h2 className="text-3xl font-bold text-white">Writing Tests</h2>
                  </div>

                  <CollapsibleSection title="Basic Test Example" id="basic-test">
                    <JestGuideCodeBlock 
                      id="basic"
                      code={`describe('Example Test Suite', () => {
  test('should add two numbers correctly', () => {
    const result = 2 + 2;
    expect(result).toBe(4);
  });

  test('should handle string concatenation', () => {
    const greeting = 'Hello' + ' ' + 'World';
    expect(greeting).toBe('Hello World');
  });
});`}
                    />
                  </CollapsibleSection>

                  <CollapsibleSection title="React Component Test" id="react-test">
                    <JestGuideCodeBlock 
                      id="component"
                      code={`import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders button with correct text', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});`}
                    />
                  </CollapsibleSection>

                  <div className="bg-blue-900 bg-opacity-30 border border-blue-500 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-3 text-blue-400">AAA Pattern</h3>
                    <p className="text-gray-300 mb-3">Follow the Arrange-Act-Assert pattern:</p>
                    <ul className="space-y-2 text-gray-300">
                      <li><strong className="text-blue-400">Arrange:</strong> Set up test data and conditions</li>
                      <li><strong className="text-green-400">Act:</strong> Execute the function or interaction</li>
                      <li><strong className="text-purple-400">Assert:</strong> Verify the expected outcome</li>
                    </ul>
                  </div>
                </div>
    </>
  )
}

export default WritingSection
