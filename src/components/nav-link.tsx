import { ComponentProps } from 'react';

type NavLinkProps = ComponentProps<'a'> & {
  children: string;
};

export function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-300">
      {children}
    </a>
  );
}
