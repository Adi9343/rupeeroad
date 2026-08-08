type DownloadButtonProps = {
  onClick: () => void;
  text?: string;
};

export default function DownloadButton({
  onClick,
  text = "Download PDF Report",
}: DownloadButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-6 w-full rounded-xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-emerald-700"
    >
      📄 {text}
    </button>
  );
}