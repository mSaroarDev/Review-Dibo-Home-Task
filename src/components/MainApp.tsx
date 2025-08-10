import PrimaryModal from "./_core/PrimaryModal";
import CreateReview from "./CreateReview";
import ReviewsList from "./ReviewsList";
import { FaPlus, FaStar, FaSearch } from "react-icons/fa";
import { useState } from "react";

const MainApp = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FaStar className="text-yellow-500 text-3xl mr-2" />
            <h1 className="text-4xl font-bold text-gray-800">ReviewApp</h1>
            <FaStar className="text-yellow-500 text-3xl ml-2" />
          </div>
          <p className="text-gray-600 text-lg">Share your experiences and discover great places</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by store name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <button
            onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()}
            className="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
          >
            <FaPlus className="text-sm" />
            Add New Review
          </button>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Recent Reviews</h2>
          <ReviewsList searchTerm={searchTerm} />
        </div>

        <PrimaryModal modalId="my_modal_3">
          <CreateReview />
        </PrimaryModal>
      </main>
    </div>
  );
};

export default MainApp;