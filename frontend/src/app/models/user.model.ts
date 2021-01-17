export class User{ 
  prenom: string;
  nom: string;
 email: string;
   departement:string;
  pseudo:string;
 motDePasse:string;

constructor(
  email,    
  motDePasse,
  prenom,
       nom,
   departement,
     pseudo
    ){
this.prenom=prenom;
this.nom=nom;
this.email=email;
this.departement=departement
this.pseudo=pseudo;
this.motDePasse=motDePasse;

};
  
  
  }

