import Description from "./Description";
import Heading from "./Heading";

const InnerLayout = ({
  title,
  children,
  isFullWidth = false,
}: CommonTypes.IInnerLayoutProps) => {
  return (
    <>
      <div className="flex flex-col my-4 gap-2">
        {isFullWidth ? children : <Description>{children}</Description>}
      </div>
    </>
  );
};

export default InnerLayout;
