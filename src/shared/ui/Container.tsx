import type { Children } from '@/types/children';

const Container = ({ children }: Children) => {
  return <div className="w-full h-full overflow-x-hidden px-2 md:px-4 lg:px-6">{children}</div>;
};

export default Container;
