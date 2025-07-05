import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";

const SkeletonWrapper = ({
  children, 
  className,
  count,
  color2,
  width,
  height,
  color1,
  borderRadius,
}) => {
  const {loading}= useSelector(({loading})=> loading);
  
  if (loading) {
    return (
          <Skeleton
            borderRadius={borderRadius}
            className={`${className}`}
            enableAnimation
            count={count}
            baseColor={color1}
            highlightColor={color2}
            width={width}
            height={height}
          />
    );
  }
  return children;
};

export default SkeletonWrapper;
