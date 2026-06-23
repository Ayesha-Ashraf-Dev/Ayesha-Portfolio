import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  image: string;
  date: string;
  title: string;
}

export default function BlogCard({ image, date, title }: BlogCardProps) {
  return (
    <div
      className="swiper-slide mb-10"
      style={{ backgroundColor: "rgba(0, 0, 0, 0)", width: "284.5px", marginRight: "24px" }}
    >
      <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
        <Link href="#!">
          <Image
            alt="Blog"
            className="w-full h-56.5 object-cover"
            src={image}
            width={284}
            height={226}
          />
          <div className="m-6">
            <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">{date}</p>
            <p className="text-[14px] xs:text-lg font-medium text-[#333333]">{title}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}