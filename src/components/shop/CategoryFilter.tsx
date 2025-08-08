import { categories } from "@/data/products";
import { Button } from "@/components/ui/button";

type Props = { active: string; onSelect: (c: string) => void };

const CategoryFilter = ({ active, onSelect }: Props) => {
  return (
    <div id="categories" className="flex flex-wrap gap-2">
      {categories.map((c) => (
        <Button
          key={c}
          variant={active === c ? "default" : "soft"}
          size="sm"
          onClick={() => onSelect(c)}
        >
          {c}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilter;
