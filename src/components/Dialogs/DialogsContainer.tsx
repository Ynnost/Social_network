import { store } from "../../Redux/store";
import {
  sendNewMessageBodyActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import { PropsStateType } from "../../App";

const DialogsConteiner = (props: PropsStateType) => {
  let dialog = store.getState().dialogsPage;
  const onChangeText = (newMessageBoody: string) => {
    props.store.dispatch(updateNewMessageBodyActionCreator(newMessageBoody));
  };

  const addMessage = () => {
    props.store.dispatch(sendNewMessageBodyActionCreator());
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
