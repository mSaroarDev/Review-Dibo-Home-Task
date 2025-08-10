import { useState, type ReactNode } from "react";
import { StoreContext } from "../hooks/useStore";

export type ReviewData = {
  shopName: string;
  reviewText: string;
  ratings: number;
}

type Inputs = {
  shopName: string;
  reviewText: string;
  ratings?: number;
}

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const localData = localStorage.getItem("data");

  if (localData === null) {
    localStorage.setItem("data", JSON.stringify([]));
  }

  const [data, setData] = useState(JSON.parse(localData || '[]'));
  const [selectedRatings, setSelectedRatings] = useState<number>(0);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const updateData = (newData: string) => {
    const parsedData = JSON.parse(newData);
    setData(parsedData);
    localStorage.setItem("data", JSON.stringify(parsedData));
  }

  const [formData, setFormData] = useState<Inputs>({
    shopName: "",
    reviewText: "",
    ratings: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isEdit && editingIndex !== null) {
      const updatedReview = {
        shopName: formData.shopName,
        reviewText: formData.reviewText,
        ratings: formData.ratings || 0,
      };
      handleEdit(editingIndex, updatedReview);
    } else {
      if (formData.shopName.trim() === "" || formData.reviewText.trim() === "") {
        alert("Please fill in all fields.");
        return;
      }
      const newReview = {
        shopName: formData.shopName,
        reviewText: formData.reviewText,
        ratings: formData.ratings || 0,
      };
      const updatedData = [...data, newReview];
      updateData(JSON.stringify(updatedData));

    }

    resetAll();
    (document.getElementById('my_modal_3') as HTMLDialogElement)?.close();
  }

  const handleEdit = (index: number, updatedReview: ReviewData) => {
    console.log("index", index);
    console.log("data", updatedReview);

    const updatedData = data.map((review: ReviewData, i: number) =>
      i === index ? updatedReview : review
    );
    updateData(JSON.stringify(updatedData));
  };

  const handleDelete = (index: number) => {
    if (window.confirm("Are you sure?") === false) return;

    const remainingData = data.filter((_: ReviewData, i: number) => i !== index);
    updateData(JSON.stringify(remainingData));
  };

  const resetAll = () => {
    setFormData({
      shopName: "",
      reviewText: "",
      ratings: 0,
    });
    setSelectedRatings(0);
    setIsEdit(false);
    setEditingIndex(null);
  };


  return (
    <StoreContext.Provider
      value={{
        data,
        updateData,
        formData,
        setFormData,
        handleChange,
        handleSubmit,
        handleEdit,
        handleDelete,
        selectedRatings,
        setSelectedRatings,
        isEdit,
        setIsEdit,
        editingIndex,
        setEditingIndex,
        resetAll
      }}>
      {children}
    </StoreContext.Provider>
  )
};
