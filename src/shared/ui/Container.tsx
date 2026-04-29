import type { Children } from '@/types/children';

const Container = ({ children }: Children) => {
  return <div className="w-full h-full overflow-x-hidden px-[16px] md:px-[24px] lg:px-[32px]">{children}</div>;
};

export default Container;
