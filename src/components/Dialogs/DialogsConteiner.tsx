import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { AppRootStateType } from "../../store/reduxStore";
import { Dispatch } from "redux";
import { DialogsType } from "../../type";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../store/action";

type MapStateToProps = {
  dialogsPage: DialogsType;
};

type MapDicpatchToPropsType = {
  updateNewMessageBody: (newMessageBoody: string) => void;
  sendNewMessageBody: () => void;
};

export type DialogsPagePropsType = MapStateToProps & MapDicpatchToPropsType;

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let mapDicpatchToProps = (dispatch: Dispatch): MapDicpatchToPropsType => {
  return {
    updateNewMessageBody: (newMessageBoody: string) => {
      dispatch(updateNewMessageBodyActionCreator(newMessageBoody));
    },
    sendNewMessageBody: () => {
      dispatch(sendNewMessageBodyActionCreator());
    },
  };
};

const DialogsConteiner = connect(mapStateToProps, mapDicpatchToProps)(Dialogs);

export default DialogsConteiner;
