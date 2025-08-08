type Props = { value: string; onChange: (v: string) => void };

const SearchBar = ({ value, onChange }: Props) => {
  return (
    <div className="w-full max-w-xl animate-scale-in">
      <label className="sr-only" htmlFor="search">Search products</label>
      <input
        id="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search products..."
        className="w-full h-12 rounded-md border border-border bg-background px-4 text-base outline-none focus:ring-2 focus:ring-ring/50 transition-shadow"
      />
    </div>
  );
};

export default SearchBar;
