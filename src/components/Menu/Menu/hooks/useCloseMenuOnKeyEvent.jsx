import { useCallback } from "react";
import useKeyEvent from "../../../../hooks/useKeyEvent";

const KEYS = ["Escape", "ArrowLeft"];

export default function useCloseMenuOnKeyEvent(hasOpenSubMenu, onCloseMenu, ref, onClose, isSubMenu) {
  const onEscapeOrLeftArrowClick = useCallback(
    event => {
      const isArrowLeftClick = event.key === "ArrowLeft";

      if (isArrowLeftClick && !isSubMenu) {
        return;
      }

      if (hasOpenSubMenu) return false;
      onCloseMenu();
      if (onClose) {
        onClose();
        event.preventDefault();
        event.stopPropagation();
      }
    },
    [onClose, hasOpenSubMenu, onCloseMenu]
  );

  useKeyEvent({
    keys: KEYS,
    callback: onEscapeOrLeftArrowClick,
    ref
  });
}
