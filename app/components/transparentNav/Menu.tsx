'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

import { useIsMounted } from '../../utils/hooks/use-is-mounted';

export default function Menu() {
  const mounted = useIsMounted();

  return (
    <nav className="    hidden items-center justify-between md:flex">
      <ul className="mx-12 hidden flex-wrap md:flex">
        {NAV_LINKS.map((item) => (
          <li key={item.key}>
            <Link href={item.path} className="px-5 capitalize text-white">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {mounted ? (
        <>
          <button className="mx-2 px-4 py-2 buttonPurple font-medium text-center rounded-md">
            Buy Ticket
          </button>
        </>
      ) : null}
    </nav>
  );
}
