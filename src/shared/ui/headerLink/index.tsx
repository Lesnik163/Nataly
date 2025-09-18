'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import './headerLink.css';

type HeaderLinkProps = {
  text: string;
  href: string;
};

const HeaderLink = ({ text, href }: HeaderLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <div
      className={`header-link h-[86%] w-[152px] items-center lg:flex ${isActive ? 'active' : ''}`}
    >
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        className='mx-auto px-[4px] text-inherit no-underline'
      >
        {text}
      </Link>
    </div>
  );
};

export default HeaderLink;
