import { HiStar } from 'react-icons/hi';

export const ProductReviews = ({ rate, count }) => {
  const totalRating = 5;
  const userRateCounting = Math.floor(rate);
  const pluralize = (count, { one, many }) => {
    return `${count} ${count > 1 ? many : one}`;
  };

  return (
    <section className="flex items-center justify-center">
      {Array(totalRating)
        .fill('_')
        .map((_, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= userRateCounting
                  ? 'transition-colos text-black'
                  : 'transition-colors text-zinc-400'
              }
            >
              <HiStar size="30"></HiStar>
            </button>
          );
        })}

      <span className="ml-4">
        {pluralize(userRateCounting, {
          one: 'Star',
          many: 'Stars',
        })}
      </span>
      <span className="ml-4">({count} Reviwes)</span>
    </section>
  );
};
