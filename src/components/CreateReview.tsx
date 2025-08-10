import { FaRegStar, FaStar, FaStoreAlt, FaPenAlt } from "react-icons/fa";
import { useStore } from "../hooks/useStore";
import PrimaryButton from "./_core/Button";
import Input from "./_core/Inputs";
import Label from "./_core/Label";

const CreateReview = () => {
  const { formData, setFormData, handleSubmit, handleChange, selectedRatings, setSelectedRatings, isEdit, resetAll } = useStore();

  const handleChangeRatings = (value: number) => {
    setSelectedRatings(value);
    setFormData({
      ...formData,
      ratings: value,
    });
  }

  return (
    <div className="p-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          {isEdit ? (
            <>
              <FaPenAlt className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-800">Edit Review</h3>
            </>
          ) : (
            <>
              <FaStoreAlt className="text-blue-600 text-2xl" />
              <h3 className="text-2xl font-bold text-gray-800">Add New Review</h3>
            </>
          )}
        </div>
        <p className="text-gray-600">
          {isEdit ? "Update your review details" : "Share your experience with others"}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="shopName" className="text-sm font-medium text-gray-700">
            Shop Name
          </Label>
          <Input
            type="text"
            name="shopName"
            placeholder="Enter the shop or business name"
            value={formData.shopName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="reviewText" className="text-sm font-medium text-gray-700">
            Your Review
          </Label>
          <textarea
            name="reviewText"
            placeholder="Share your experience, what did you like or dislike?"
            value={formData.reviewText}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
          />
        </div>

        <div className="space-y-3">
          <Label htmlFor="ratings" className="text-sm font-medium text-gray-700">
            Rating
          </Label>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                  <button
                    key={ratingValue}
                    type="button"
                    onClick={() => handleChangeRatings(ratingValue)}
                    className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {ratingValue <= selectedRatings ? (
                      <FaStar size={24} className="text-yellow-400 hover:text-yellow-500 transition-colors" />
                    ) : (
                      <FaRegStar size={24} className="text-gray-300 hover:text-yellow-400 transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>
            {selectedRatings > 0 && (
              <span className="text-sm text-gray-600 ml-2">
                ({selectedRatings}/5 stars)
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
          <button
            type="button"
            onClick={() => {
              resetAll();
              (document.getElementById('my_modal_3') as HTMLDialogElement)?.close();
            }}
            className="btn btn-ghost"
          >
            Cancel
          </button>
          <PrimaryButton 
            type="submit" 
            className="btn btn-primary px-8"
          >
            {isEdit ? "Update Review" : "Submit Review"}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default CreateReview;