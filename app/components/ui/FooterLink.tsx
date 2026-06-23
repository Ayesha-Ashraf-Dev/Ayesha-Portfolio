interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLink({ href, children }: FooterLinkProps) {
  return (
    <a className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px]" href={href}>
      {children}
      <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
    </a>
  );
}