type SearchChipProps = {
  icon: string;
  text: string;
  onClick: () => void;
};

export default function SearchChip({
  icon,
  text,
  onClick,
}: SearchChipProps) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-3 rounded-full bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-500 transition font-medium cursor-pointer"
    >
      {icon} {text}
    </button>
  );
}