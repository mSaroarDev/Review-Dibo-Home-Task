import { useStore } from "../../hooks/useStore";

interface PrimaryModalProps {
  modalId?: string;
  children: React.ReactNode;
}

const PrimaryModal = ({
  modalId = "my_modal_3",
  children
}: PrimaryModalProps) => {

  const {resetAll} = useStore();

  return (
    <>
      <dialog 
        id={modalId} 
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box max-w-2xl shadow-2xl">
          <form method="dialog">
            <button onClick={resetAll} className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-gray-100">
              ✕
            </button>
          </form>
          <div className="mt-2">
            {children}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={resetAll}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PrimaryModal;