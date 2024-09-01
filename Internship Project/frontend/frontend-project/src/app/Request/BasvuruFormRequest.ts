import {Departmanlar} from "../enum/departmanlar.enums";

export class BasvuruFormRequest {
  id!: number;
  adSoyad!: null;
  email!: null;
  telefon!: null;
  universite!: null;
  bolum!: null;
  sinif: any;
  linkedinLink!: null;
  githubLink!: null;
  cvLink!: null;
  departmanlar: Departmanlar[]=[];
  dil!: any[];
  tarih: any;
  accepted: null | undefined;
  accepted2: null | undefined;
}
