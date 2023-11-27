import { connect } from "react-redux";
import {
  sendNewMessageBodyActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../Redux/DialogsReducer";
import { DialogsType} from "../../Redux/store";
import Dialogs from "./Dialogs";
import { AppRootStateType } from "../../Redux/reduxStore";
import { Dispatch } from "redux";



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

const DialogsConteiner = connect(
  mapStateToProps,
  mapDicpatchToProps
)(Dialogs);

export default DialogsConteiner;
