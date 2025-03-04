import { FaCheck, FaTimes } from 'react-icons/fa';

type FeatureRow = {
  label: string;
  value: string;
};

type FeatureTableProps = {
  title: string;
  features: FeatureRow[];
};

export default function FeatureTable({ title, features }: FeatureTableProps) {
  return (
    <div className="mb-6">
      <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
      <div className="bg-gray-50 rounded-xl overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 bg-gray-50">
                  {feature.label}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {feature.value === "✔" ? (
                    <span className="inline-flex items-center text-green-600">
                      <FaCheck className="mr-1" /> Incluido
                    </span>
                  ) : feature.value === "✘" ? (
                    <span className="inline-flex items-center text-red-600">
                      <FaTimes className="mr-1" /> No incluido
                    </span>
                  ) : (
                    feature.value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 