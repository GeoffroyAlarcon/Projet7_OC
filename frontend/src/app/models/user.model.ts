export class User {
  private _id: number;
  private _prenom: string;
  private _nom: string;
  private _email: string;
  private _departement: string;
  private _pseudo: string;
  private _motDePasse: string;
  private _administrateur: Number;
  constructor() {}

  public get id(): number {
    return this._id;
  }

  public set id(v: number) {
    this._id = v;
  }

  public get nom(): string {
    return this._nom;
  }

  public set nom(v: string) {
    this._nom = v;
  }

  public get prenom(): string {
    return this._prenom;
  }

  public set prenom(v: string) {
    this._prenom = v;
  }

  public get email(): string {
    return this._email;
  }

  public set email(v: string) {
    this._email = v;
  }
  public get motDePasse(): string {
    return this._motDePasse;
  }
  public get administrateur(): Number {
    return this._administrateur;
  }

  public set administrateur(v: Number) {
    this._administrateur = v;
  }
  public set motDePasse(v: string) {
    this._motDePasse = v;
  }
  public get pseudo(): string {
    return this._pseudo;
  }

  public set pseudo(v: string) {
    this._pseudo = v;
  }
  public get departement(): string {
    return this._departement;
  }

  public set departement(v: string) {
    this._departement = v;
  }
}
