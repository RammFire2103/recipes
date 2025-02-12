export const RecipeImage = ({ src, alt }: { src: string; alt: string }) => {
  return <img className="recipe-image" src={src} alt={alt} />;
};
