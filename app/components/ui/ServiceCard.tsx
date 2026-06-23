interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="p-4 xs:p-8 bg-white hover:shadow-xl h-auto shadow-gray-300 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden">
      <p className="bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] false"></p>
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 pb-4">{title}</p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-700">{description}</p>
      </div>
    </div>
  );
}