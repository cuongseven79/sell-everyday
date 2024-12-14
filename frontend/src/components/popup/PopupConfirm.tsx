interface PopupConfirmProps {
  title?: string;
  prefixCls?: string;
  message?: string;
  onConfirm: (confirm: boolean) => void;
}

const PopupConfirm = ({
  title = "",
  prefixCls = "",
  message = "",
  onConfirm = () => false,
}: PopupConfirmProps) => {
  return (
    <div
      className={`${prefixCls} border shadow-sm bg-white w-[300px] absolute top-1/4 right-1/3 p-5 rounded-lg`}
    >
      <div>
        <h2 className="text-[25px]">{title}</h2>
        <p>{message || "Are you sure?"}</p>
      </div>
      <div className="flex justify-center items-center gap-10 mt-5">
        <button
          onClick={() => onConfirm(true)}
          className="bg-[#FFD200] shadow-lg p-3 rounded-md outline-none w-1/2 font-semibold"
        >
          Sure
        </button>
        <button
          onClick={() => onConfirm(false)}
          className="bg-[#6a6a72] shadow-lg p-3 rounded-md outline-none w-1/2 font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PopupConfirm;
