import Link from 'next/link';
import React from 'react';
import './headerLink.css';

type HeaderLinkProps = {
  text: string;
  href: string;
};

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
  return (
    <div
      className='header-link z-100 hidden h-[86%] w-[152px] items-center lg:flex'
      tabIndex={0}
    >
      <Link href={href} tabIndex={-1} className='mx-auto px-[4px]'>
        {text}
      </Link>
    </div>
  );
};

export default HeaderLink;
