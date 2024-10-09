import { ThemeProvider } from '@/wireframes/theme/theme-provider';
import React, { ReactNode } from 'react';

interface LayoutProps {
  header?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}

const DefaultLayout: React.FC<LayoutProps> = ({ header, children, footer }) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {header && <header>{header}</header>}
      <main>{children}</main>
      {footer && <footer>{footer}</footer>}
    </ThemeProvider>
  );
};

export default DefaultLayout;
