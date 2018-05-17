export class AvisMasterRequest {
    nom_etud: string;
    prenom_etud: string;
    mail_etud: string;
    promotion_etud: number;
    partage: boolean;

    id_statut: number;
    id_formation: number;

    note_campus: number;
    note_formation: number;
    note_general: number;
    commentaire:string;

    public constructor(){
        this.nom_etud = "";
        this.prenom_etud = "";
        this.mail_etud = "";
        this.promotion_etud = 2000;
        this.partage = false;

        this.id_statut = 0;
        this.id_formation = 0;

        this.note_campus = 3;
        this.note_formation = 3;
        this.note_general = 3;
        this.commentaire = "";

    }

};