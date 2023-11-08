import {
  DispatchActionType,
  StoreType,
  store,
} from "../../Redux/store";
import {
  sendNewMessageBodyActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";


export type DialogConteinerType = {
  store: StoreType;
  dispatch: (action: DispatchActionType) => void;
};

const DialogsConteiner = (props: DialogConteinerType) => {

  let dialog = store.getState().dialogsPage
  const onChangeText = (newMessageBoody: string) => {
    props.dispatch(updateNewMessageBodyActionCreator(newMessageBoody));
  };

  const addMessage = () => {
    props.dispatch(sendNewMessageBodyActionCreator());
  };

  return (
    <Dialogs
      updateNewMessageBody={onChangeText}
      sendNewMessageBody={addMessage}
      dialogs={dialog.dialogs}
      message={dialog.message}
      newMessageBoody={dialog.newMessageBoody}
    />
  );
};

export default DialogsConteiner;
