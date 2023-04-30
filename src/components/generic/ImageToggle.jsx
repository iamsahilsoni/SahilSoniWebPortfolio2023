import { useState } from "react";

function ImageToggle({ primaryImageUrl, secondaryImageUrl }) {
  const [isPrimary, setIsPrimary] = useState(true);

  const handleMouseEnter = () => {
    setIsPrimary(false);
  };

  const handleMouseLeave = () => {
    setIsPrimary(true);
  };

  return (
    <div
      className="container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img
        src={isPrimary ? primaryImageUrl : secondaryImageUrl}
        alt="Toggleable "
        className="display-pic"
      />
    </div>
  );
}

export default ImageToggle;
