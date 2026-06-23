import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/Icons";

interface PortfolioCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function PortfolioCard({
  image,
  title,
  subtitle,
  description,
}: PortfolioCardProps) {
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <Image alt={subtitle} src={image} width={424} height={300} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 text-xs font-medium">{title}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">{subtitle}</p>
        <p
          className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
        >
          {description}
        </p>
        <Link
          href="#!"
          className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          Case Study
          <span className="ms-1 xs:ms-3">
            <ArrowRightIcon />
          </span>
        </Link>
      </div>
    </div>
  );
}