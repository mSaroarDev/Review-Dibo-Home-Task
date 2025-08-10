import { useStore } from "../hooks/useStore";
import { FaStar, FaEdit, FaTrash, FaStoreAlt } from "react-icons/fa";

interface ReviewData {
  shopName: string;
  reviewText: string;
  ratings: number;
};

interface ReviewCardProps {
  data: ReviewData;
  index: number;
}

const ReviewCard = ({ data, index }: ReviewCardProps) => {
  const { handleDelete, setIsEdit, setFormData, setSelectedRatings, setEditingIndex } = useStore();

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "text-yellow-400" : "text-gray-300"}
        size={16}
      />
    ));
  };

  return (
    <div className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 pb-2 px-3 border border-gray-100 h-full flex flex-col items-start justify-center">
      <div className="w-full">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <FaStoreAlt className="text-blue-600" size={20} />
          </div>
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-1">{data?.shopName}</h3>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(data?.ratings)}
              </div>
              <span className="text-sm text-gray-500">({data?.ratings}/5)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 leading-relaxed line-clamp-2">{data?.reviewText}</p>
      </div>
      </div>

      <div className="w-full flex items-center justify-end gap-3 pt-1 border-t border-gray-100">
        <button 
          onClick={() => {
            setIsEdit(true);
            setFormData({
              shopName: data.shopName,
              reviewText: data.reviewText,
              ratings: data.ratings,
            });
            setSelectedRatings(data.ratings);
            setEditingIndex(index);
            (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()
          }}
          className="btn btn-sm btn-outline btn-info gap-2 hover:scale-105 transition-transform"
        >
          <FaEdit size={12} />
          Edit
        </button>
        
        <button 
          onClick={() => handleDelete(index)}
          className="btn btn-sm btn-outline btn-error gap-2 hover:scale-105 transition-transform"
        >
          <FaTrash size={12} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;