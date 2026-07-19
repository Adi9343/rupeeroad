type InfoCardProps = {
  title: string;
  value: string;
};

export default function InfoCard({ title, value }: InfoCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-gray-500 text-sm">{title}</h3>

      <p className="text-3xl font-bold text-blue-700 mt-2">
        {value}
      </p>
    </div>
  );
}