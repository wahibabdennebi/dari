export class adsModel {
    id_ad:number;
    image:string;
	 title:string;
    description:string;
	price:number;
    adress:string;
	 area:number;
	 room:number ;
     creationdate:Date;
     type_ads:Type_ads;
     category:Category;
     city:City

}
enum Category {
    apartement,house,field,commerciel_permises,office,parking_space,others

}
enum City {
    Bizerte,Beja,Jendouba,Kef,Siliana,Zaghouan,Ariana,Ben_arous,Tunis,
    Mannouba,Nabeul,Sousse,Mounastir,Mahdia,Kasserine,Gafsa,Sfax,Gabes,
    Tataouin,Medennine,Touzuer,Kebeli,Sidi_bouzid
    }
enum Type_ads {
        buy,rent
    }
