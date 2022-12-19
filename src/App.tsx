import { AddNewItem } from "./AddNewItem";
import { Column } from "./Column";
import { AppContainer } from "./styles";
import { useAppState } from "./state/AppStateContext";

export function App() {
  const { lists } = useAppState();

  return (
    <AppContainer>
      {lists.map((list) => (
        <Column text={list.text} key={list.id} id={list.id} />
      ))}
      <AddNewItem
        toggleButtonText="+ Add new list"
        onAdd={() => console.log("Item created")}
      />
    </AppContainer>
  );
}
