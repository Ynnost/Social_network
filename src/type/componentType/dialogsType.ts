export type DialogsType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody: string;
};

export type DialogsItemType = {
  id: string;
  name: string;
  to: string;
};

export type MessagesType = {
  id: string;
  message: string;
};