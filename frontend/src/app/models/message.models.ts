import { User } from './user.model';

export class Message {
  private _id: Number;
  private _messageDate: Number;
  private _user: User;
  private _messageParent: Message;
  private _contenu: any;
  private _titre: String;

  constructor() {}

  public get messageDate(): Number {
    return this._messageDate;
  }

  public set messageDate(v: Number) {
    this._messageDate = v;
  }

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
    this._user = v;
  }
  public get contenu(): any {
    return this._contenu;
  }

  public set contenu(v: any) {
    this._contenu = v;
  }
  public get titre(): String {
    return this._titre;
  }

  public set titre(v: String) {
    this._titre = v;
  }
  public get messageParent(): Message
   {
    return this._messageParent;
  }

  public set messageParent(v: Message) {
    this._messageParent = v;
  }


public get id() : Number {
  return this._id;
}

public set id(v : Number) {
  this._id = v;
}



}
