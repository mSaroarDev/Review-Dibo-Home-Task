import { createContext, useContext } from "react"

type Inputs = {
  shopName: string;
  reviewText: string;
  ratings?: number;
}

export type ReviewData = {
  shopName: string;
  reviewText: string;
  ratings: number;
}

type StoreContextType = {
  data: ReviewData[];
  updateData: (newData: string) => void;
  formData: Inputs;
  setFormData: (data: Inputs) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  handleEdit: (index: number, updatedReview: ReviewData) => void;
  handleDelete: (index: number) => void;
  selectedRatings: number;
  setSelectedRatings: (ratings: number) => void;
  isEdit: boolean;
  setIsEdit: (isEdit: boolean) => void;
  editingIndex: number | null;
  setEditingIndex: (index: number | null) => void;
  resetAll: () => void;
};

export const StoreContext = createContext<StoreContextType | null>(null);

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}