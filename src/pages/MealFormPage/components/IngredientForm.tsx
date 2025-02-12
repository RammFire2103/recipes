interface IngredientFormProps {
  amount: string;
}

export const IngredientForm = ({ amount }: IngredientFormProps) => {
  return (
    <div className="ingredient-form">
      <input
        className="ingredient-input"
        type="text"
        defaultValue={amount}
        placeholder="Enter amount"
      />
    </div>
  );
};
