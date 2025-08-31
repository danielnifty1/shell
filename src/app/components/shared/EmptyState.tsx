import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No Data",
  description = "There is nothing to display here.",
}) => {
  return (
    <div className="flex flex-col items-center h-full justify-center text-center py-10 px-4 bg-gray-100 rounded-lg">
      <div className="text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 9.75h4.5m-2.25 0v4.5m-7.5-2.25a9 9 0 1118 0 9 9 0 01-18 0z"
          />
        </svg>
      </div>
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p className="text-sm text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default EmptyState;
