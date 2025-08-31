"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumb({
  featuredImage,
}: {
  featuredImage: string;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment);

  const getBreadcrumbName = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <div
      className="relative w-full h-64 bg-cover bg-center"
      style={{
        backgroundImage: "url(" + featuredImage + ")",
      }}
    >
      <div className="absolute inset-0  " />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <nav className="flex items-center space-x-2 text-white">
          <Link href="/" className="hover:text-gray-300 transition-colors">
            Home
          </Link>
          {segments.map((segment, index) => (
            <div key={segment} className="flex items-center">
              <span className="mx-2">/</span>
              {index === segments.length - 1 ? (
                <span className="font-semibold">
                  {getBreadcrumbName(segment)}
                </span>
              ) : (
                <Link
                  href={`/${segments.slice(0, index + 1).join("/")}`}
                  className="hover:text-gray-300 transition-colors"
                >
                  {getBreadcrumbName(segment)}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
