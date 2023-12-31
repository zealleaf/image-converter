import {Dictionary} from '@/lib/dictionary';
import {siteConfig} from './siteConfig';

export const getTopNavLinks = (t: Dictionary) => [
  {
    title: t['Top nav pixel'],
    href: t['Top nav pixel path'],
  },
  {
    title: 'github',
    href: siteConfig.repoUrl,
  },
  {
    title: 'twitter',
    href: siteConfig.twitterUrl,
  },
];
