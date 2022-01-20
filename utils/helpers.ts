import clsx from 'clsx';
import { Color, themeProps, Space } from '../components/Theme';

export const getColor = (colorKey: Color) => themeProps.colors[colorKey];

export const getSpacing = (spaceKey: Space) => themeProps.space[spaceKey];

function isDocsPath(location: any) {
  const { pathname } = location;
  return (
    pathname.includes('/overview/') ||
    pathname.includes('/concepts/') ||
    pathname.includes('/kata-ml/') ||
    pathname.includes('/nl-studio/') ||
    pathname.includes('/cms-studio/') ||
    pathname.includes('/deployment-guide/') ||
    pathname.includes('/channels/') ||
    pathname.includes('/modules/')
  );
}

/** Workaround for activeClassName: https://github.com/gatsbyjs/gatsby/issues/7737 */
export const isActive =
  (exact = false, additionalClassnames?: string) =>
  ({ isPartiallyCurrent, isCurrent, location }: any) => {
    if (exact) {
      return isCurrent || isDocsPath(location) ? { className: clsx(additionalClassnames, 'active') } : {};
    }

    return isPartiallyCurrent ? { className: clsx(additionalClassnames, 'active') } : {};
  };
