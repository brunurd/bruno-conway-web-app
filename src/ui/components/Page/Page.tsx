import { ReactNode } from 'react';
import { PageStyle } from './Page.styles';

const Page = ({ children }: { children: ReactNode }) => {
  return <PageStyle>{children}</PageStyle>;
};

export { Page };
