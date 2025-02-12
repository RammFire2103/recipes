export const RecipeInstructions = ({ steps }: { steps: string[] }) => {
  console.log(steps);
  return (
    <div className="recipe-instructions">
      <h2>Instructions</h2>
      <ol>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
    </div>
  );
};
