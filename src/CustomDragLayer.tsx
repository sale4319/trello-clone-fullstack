import { useDragLayer } from "react-dnd";
import { Column } from "./Column";
import { useAppState } from "./state/AppStateContext";
import { CustomDragLayerContainer, DragPreviewWrapper } from "./styles";

export const CustomDragLayer = () => {
  const { draggedItem } = useAppState();
  const { currentOffest } = useDragLayer((monitor) => ({
    currentOffest: monitor.getSourceClientOffset(),
  }));
  return draggedItem && currentOffest ? (
    <CustomDragLayerContainer>
      <DragPreviewWrapper position={currentOffest}>
        <Column id={draggedItem.id} text={draggedItem.text} isPreview></Column>
      </DragPreviewWrapper>
    </CustomDragLayerContainer>
  ) : null;
};
