import React from 'react';
import { NAV_LINKS } from '@/constants';

function FooterNav() {
  return (
    <ul className="leading-8">
      {NAV_LINKS.map((link) => {
        return (
          <li>
            <a href={link.path} className="hover:text-blue-400">
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default FooterNav;
