import { forwardRef, ReactElement } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "../ui/button";

type MainButtonProps = {
  text: string;
  form?: string;
  isLoading?: boolean;
  action?: () => void;
  isSubmitable?: boolean;
  disabled?: boolean;
  width?: "full_width" | string;
  dataLoadingText?: string;
  variant?: "primary" | "secondary";
  classes?: string;
  iconRoute?: string;
  rightIconRoute?: string;
  rightIconClass?: string;
  iconComponent?: ReactElement;
  rightIconComponent?: ReactElement;
  size?: "small" | "normal" | "large";
};

const MainButton = forwardRef<HTMLButtonElement, MainButtonProps>(
  (
    {
      text,
      isLoading = false,
      form,
      action,
      disabled = false,
      isSubmitable,
      width,
      dataLoadingText = "Please wait ...",
      variant = "primary",
      classes,
      iconRoute,
      rightIconRoute,
      rightIconClass = "w-[24px] h-[24px]",
      iconComponent,
      rightIconComponent,
      size = "normal",
    },
    ref
  ) => {
    const propWidth =
      width === "full_width" ? "w-full" : width ? width : "w-[9.25rem]";

    const isSecondaryVariant = variant !== "primary";

    const size_height =
      size === "normal"
        ? "h-[3.68754rem]"
        : size === "large"
        ? "h-[3.75rem]"
        : "h-[2.625rem]";

    const variant_hover =
      variant === "primary" ? "hover:bg-primary" : "hover:bg-secondary";

    return !isLoading ? (
      <Button
        form={form}
        className={`${
          isSecondaryVariant ? " text-white  bg-secondary" : "bg-superGray"
        } text-white shadow-xl ${propWidth} md:${propWidth} text-[1.125rem] font-[500]  select-none rounded-[0.625rem] hover:opacity-90 ${variant_hover} ${size_height} ${classes}`}
        onClick={!disabled ? action : () => undefined}
        type={isSubmitable ? "submit" : "button"}
        ref={ref}
        disabled={disabled}
      >
        {iconRoute && (
          <img
            src={iconRoute}
            alt="left button icon"
            className="w-[24px] h-[24px]"
          />
        )}
        {iconRoute && <span>&nbsp;</span>}
        {iconComponent}
        {iconComponent && <span>&nbsp;</span>}
        {text}
        {rightIconRoute && <span>&nbsp;</span>}
        {rightIconRoute && (
          <img
            src={rightIconRoute}
            alt="right button icon"
            className={rightIconClass}
          />
        )}
        {rightIconComponent}
      </Button>
    ) : (
      <Button
        className={`bg-background text-white ${propWidth} md:${propWidth} select-none rounded-[0.625rem] cursor-not-allowed ${size_height} ${
          classes ? classes : ""
        }`}
        ref={ref}
        disabled
      >
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        {dataLoadingText}
      </Button>
    );
  }
);

// Assigned display name
MainButton.displayName = "MainButton";

export default MainButton;
