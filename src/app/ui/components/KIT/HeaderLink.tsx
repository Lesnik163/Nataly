import Link from 'next/link';
import React from 'react';

type HeaderLinkProps = {
  text: string;
  href: string;
};

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
  return (
    <div
      className='header_link z-10 flex h-[86%] w-[152px] items-center'
      tabIndex={0}
    >
      <Link href={href} tabIndex={-1} className='mx-auto px-[4px]'>
        {text}
      </Link>
    </div>
  );
};

export default HeaderLink;
