import { ComponentProps } from 'react';

type TableProps = ComponentProps<'table'> & {};

export function Table({ ...props }: TableProps) {
  return (
    <div className="border border-white/10 rounded-lg">
      <table {...props} className="w-full" />
    </div>
  );
}
