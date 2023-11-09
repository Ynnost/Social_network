import {
  sendNewMessageBodyActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/DialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";

const DialogsConteiner = () => {
  // let dialog = store.getState().dialogsPage;
  // const onChangeText = (newMessageBoody: string) => {
  //   props.store.dispatch(updateNewMessageBodyActionCreator(newMessageBoody));
  // };

  // const addMessage = () => {
  //   props.store.dispatch(sendNewMessageBodyActionCreator());
  // };

  return (
    <StoreContext.Consumer>{(store)=>{
       let state = store.getState().dialogsPage;
       const onChangeText = (newMessageBoody: string) => {
         store.dispatch(
           updateNewMessageBodyActionCreator(newMessageBoody)
         );
       };

       const addMessage = () => {
         store.dispatch(sendNewMessageBodyActionCreator());
       };
      return (
        <Dialogs
          updateNewMessageBody={onChangeText}
          sendNewMessageBody={addMessage}
          dialogs={state.dialogs}
          message={state.message}
          newMessageBoody={state.newMessageBoody}
        />
      );
    }}
      
    </StoreContext.Consumer>
  );
};

export default DialogsConteiner;
