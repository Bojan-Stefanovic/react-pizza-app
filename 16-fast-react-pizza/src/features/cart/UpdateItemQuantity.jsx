/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-2">
      <Button
        type="round"
        onClick={() => dispatch(decreaseItemQuantity(pizzId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increaseItemQuantity(pizzId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
