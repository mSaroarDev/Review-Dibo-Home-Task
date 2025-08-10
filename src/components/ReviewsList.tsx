import { useStore } from "../hooks/useStore";
import type { ReviewData } from "../store/Store";
import ReviewCard from "./ReviewCard";
import { FaInbox, FaSearchengin } from "react-icons/fa";

interface ReviewsListProps {
  searchTerm: string;
}

const ReviewsList = ({ searchTerm }: ReviewsListProps) => {
  const { data } = useStore();

  const reviews: ReviewData[] = Array.isArray(data) ? data : [];
  
  const filteredReviews = reviews.filter((review) =>
    review.shopName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedReviews = [...filteredReviews].reverse();

  if (reviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex flex-col items-center justify-center">
          <FaInbox className="text-gray-400 text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No reviews yet</h3>
          <p className="text-gray-500">Be the first to share your experience!</p>
        </div>
      </div>
    );
  }

  if (searchTerm && filteredReviews.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="flex flex-col items-center justify-center">
          <FaSearchengin className="text-gray-400 text-6xl mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">No results found</h3>
          <p className="text-gray-500">
            No reviews found for "{searchTerm}". Try a different search term.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {searchTerm && (
        <div className="mb-4 text-center">
          <p className="text-gray-600">
            Found {filteredReviews.length} review{filteredReviews.length !== 1 ? 's' : ''} for "{searchTerm}"
          </p>
        </div>
      )}
      
      <div className="gap-2 grid grid-cols-1 md:grid-cols-2">
        {sortedReviews.map((review: ReviewData) => {
          const originalIndex = reviews.findIndex(
            (originalReview) => 
              originalReview.shopName === review.shopName && 
              originalReview.reviewText === review.reviewText &&
              originalReview.ratings === review.ratings
          );
          return (
            <ReviewCard
              key={`${originalIndex}-${review.shopName}`}
              index={originalIndex}
              data={review}
            />
          );
        })}
      </div>
    </>
  );
};

export default ReviewsList;