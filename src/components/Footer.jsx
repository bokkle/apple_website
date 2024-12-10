import { footerLinks } from '../constants';

const Footer = () => {
  return (
    <footer className="px-5 py-5 sm:px-10">
      <div className="screen-max-width">
        <div className="">
          <p className="text-gray text-xs font-semibold">
            More ways to shop:{' '}
            <span className="text-blue underline">Find an Apple Store</span> or{' '}
            <span className="text-blue underline">other retailer</span> near
            you.
          </p>
          <p className="text-gray text-xs font-semibold">
            Or call 123-456-7890
          </p>
        </div>
        <div className="my-5 h-[1px] w-full bg-neutral-700" />
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <p className="text-gray text-xs font-semibold">
            Copyright 2024 Apply Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="text-gray text-xs font-semibold">
                {link}{' '}
                {i !== footerLinks - 1 && <span className="mx-2"> | </span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
