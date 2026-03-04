// Adjust the code in the StarBackground component to fix ESLint issues
import React from 'react';

interface StarBackgroundProps {
  color?: string; // Specify types using TypeScript
  size?: number;
}

const StarBackground: React.FC<StarBackgroundProps> = ({ color = 'white', size = 1 }) => {
  // Component logic here
  return <div>Star Background</div>;
};

export default StarBackground;