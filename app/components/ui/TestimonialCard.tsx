interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="swiper-slide" style={{ width: "856px", marginRight: "30px" }}>
      <div className="flex flex-col h-full">
        <div className="text-center mx-auto">
          <p className="text-xs sm:text-[14px] md:text-[18px] pb-5 sm:pb-10 md:pb-14 max-w-144.25 text-soft-dark">
            {quote}
          </p>
        </div>
        <div className="text-center">
          <p className="text-[14px] sm:text-lg font-medium pb-6">“{quote}”</p>
          <div className="mx-auto">
            <p className="text-[14px] sm:text-[16px] md:text-lg font-medium mb-2">{author}</p>
            <p className="text-[14px] md:text-[16px] font-light">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}