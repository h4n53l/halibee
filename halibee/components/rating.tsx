import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { StarIcon } from "@heroicons/react/solid";

const Rate = ({ count, rating, color, onRating }) => {
  const [hoverRating, setHoverRating] = useState(0);

  const getColor = (index) => {
    if (hoverRating >= index) {
      return color.filled;
    } else if (!hoverRating && rating >= index) {
      return color.filled;
    }

    return color.unfilled;
  };

  const starRating = useMemo(() => {
    return Array(count)
      .fill(0)
      .map((_, i) => i + 1)
      .map((idx) => (
        <StarIcon
          key={idx}
          className="cursor-pointer"
          onClick={() => onRating(idx)}
          style={{ color: getColor(idx) }}
          onMouseEnter={() => setHoverRating(idx)}
          onMouseLeave={() => setHoverRating(0)}
        />
      ));
  }, [count, rating, hoverRating]);

  return (
    <div className="mt-3 flex flex-row items-start">
      <p className="font-bold text-sm uppercase">Your Rating: &nbsp;</p>
      <div className="flex flex-row items-start w-40 h-40">{starRating}</div>
    </div>
  );
};

Rate.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  onChange: PropTypes.func,
  color: {
    filled: PropTypes.string,
    unfilled: PropTypes.string,
  },
};

Rate.defaultProps = {
  count: 5,
  rating: 0,
  color: {
    filled: "#FAAA20",
    unfilled: "#E0F4FF",
  },
};

export default Rate;
