interface ContactInfoProps {
  icon: "location" | "envelope" | "phone";
  label: string;
  value: string;
}

export default function ContactInfo({ icon, label, value }: ContactInfoProps) {
  const icons = {
    location: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="location-dot"
        className="svg-inline--fa fa-location-dot text-lg md:text-xl text-picto-primary"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 384 512"
      >
        <path
          fill="currentColor"
          d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
        />
      </svg>
    ),
    envelope: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="envelope"
        className="svg-inline--fa fa-envelope text-lg md:text-xl text-picto-primary"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
        />
      </svg>
    ),
    phone: (
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="phone"
        className="svg-inline--fa fa-phone text-lg md:text-xl text-picto-primary"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill="currentColor"
          d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
        />
      </svg>
    ),
  };

  return (
    <div className="max-w-84 p-3 md:p-3.75 lg:p-6 flex xs:not-odd:my-3 rounded-[10px] bg-white hover:scale-[1] duration-450 cursor-pointer hover:shadow-[0px_0px_37px_5px_rgba(0,_0,_0,_0.1)] shadow-gray-200 max-sm:mx-auto">
      <div className="h-10 md:h-12 aspect-square bg-[#EDD8FF80] center rounded-[4px]">
        {icons[icon]}
      </div>
      <div className="ms-3.25">
        <p className="text-[12px] md:text-[14px] text-[#424E60] font-normal">{label}</p>
        <p className="text-[14px] md:text-[16px] text-[#132238] font-medium">{value}</p>
      </div>
    </div>
  );
}