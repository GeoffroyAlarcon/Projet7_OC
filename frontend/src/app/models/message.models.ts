import { User } from './user.model';

export class Message {
  private _id: number;
  private _datePost: Number;
  private _user: User;
  private _messageParent: Message;
  private _contenu: String;
  private _titre: String;

  constructor() {}

  public get datePost(): Number {
    return this._datePost;
  }

  public set datePost(v: Number) {
    this._datePost = v;
  }

  public get user(): User {
    return this._user;
  }

  public set user(v: User) {
    this._user = v;
  }
  public get contenu(): String {
    return this._contenu;
  }

  public set contenu(v: String) {
    this._contenu = v;
  }
  public get titre(): String {
    return this._titre;
  }

  public set titre(v: String) {
    this._titre = v;
  }
  public get messageParent(): Message {
    return this._messageParent;
  }

  public set messageParent(v: Message) {
    this._messageParent = v;
  }
}
