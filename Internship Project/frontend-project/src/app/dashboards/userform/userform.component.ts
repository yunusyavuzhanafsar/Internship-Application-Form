import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {InputMaskModule} from "primeng/inputmask";
import {RadioButtonModule} from "primeng/radiobutton";
import {TableModule} from "primeng/table";
import {Button} from "primeng/button";
import {NgForOf, NgIf} from "@angular/common";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {KeyFilterModule} from "primeng/keyfilter";
import {BasvuruFormService} from "../../services/basvuruForm.service";
import {BasvuruFormRequest} from "../../Request/BasvuruFormRequest";
import {HttpClientModule} from "@angular/common/http";
import {Siniflar} from "../../enum/siniflar.enums";
import {Departmanlar} from "../../enum/departmanlar.enums";
import {Tarihler} from "../../enum/tarihler.enums";
import {Seviyeler} from "../../enum/seviyeler.enums";
import {Diller} from "../../enum/diller.enums";


let basvuruForm;


@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [
    RouterLink,
    CheckboxModule,
    FormsModule,
    InputTextModule,
    InputMaskModule,
    RadioButtonModule,
    TableModule,
    Button,
    NgIf,
    NgForOf,
    ConfirmDialogModule,
    ToastModule,
    KeyFilterModule,
    HttpClientModule
  ],
  templateUrl:  './userform.component.html',
  styleUrl: './userform.component.css',
  providers:[ConfirmationService,MessageService,BasvuruFormService ]
})
export class UserformComponent  implements OnInit{
  selectedCategory: any = null;
  categories: any[] | undefined
  selectedDates: any | undefined;
  accepted: any;
  accepted2: any;
  ratingsMap: { [key: string]: any } = {};



  sorgulamaTuruList = Object.entries(Siniflar).filter(e => !isNaN(e[0] as any)).map(e => ({
    name: e[1].toString(),
    id: Number(e[0])
  }))
  departmanTuruList = Object.entries(Departmanlar).filter(e => !isNaN(e[0] as any)).map(e => ({
    name: e[1].toString(),
    id: Number(e[0])
  }))
  seviyelerList = Object.entries(Seviyeler).filter(e => !isNaN(e[0] as any)).map(e => ({
    name: e[1].toString(),
    id: Number(e[0])
  }))
  dillerList = Object.entries(Diller).filter(e => !isNaN(e[0] as any)).map(e => ({
    name: e[1].toString(),
    id: Number(e[0])
  }))

  basvuruForm=new BasvuruFormRequest();
  selectedDates2: any;

  ngOnInit( ) {
    this.categories = [
      { name: '2.sınıf', key: 'A' },
      { name: '3.sınıf', key: 'M' },
      { name: '4.sınıf', key: 'P' },
      { name: 'Mezun', key: 'R' }

    ];

    console.log(this.sorgulamaTuruList)
    console.log(this.departmanTuruList)

    this.selectedCategory = this.categories[1];

  }
  selectedCategories: any[] =[];
  departmanlar: any[] = [];
  checkboxButtonGoster: boolean = false;
  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private basvuruFormService:BasvuruFormService) {}



  denemeeee(language: any, rakam: any) {
    console.log('language',language)
    console.log('rakam',rakam)
    console.log('ratingsMap',this.ratingsMap)
  }


  kaydet(){
    if(!this.basvuruForm.adSoyad){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz1!' });
    }
    else if(!this.basvuruForm.email){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen geçerli bir email giriniz2!' });
    }
    else if(!this.basvuruForm.telefon){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz3!' });
    }
    else if(!this.basvuruForm.universite){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz4!' });
    }
    else if(!this.basvuruForm.bolum){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz5!' });
    }
    else if(!this.basvuruForm.sinif){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz6!' });
    }
    else if(!this.basvuruForm.cvLink){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz7!' });
    }
      else if(!this.selectedCategories){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz!' });
    }
    else if(!this.ratingsMap){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz8!' });
    }
    else if(!this.selectedDates && !this.selectedDates2){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Lütfen gerekli alanları doldurunuz9!' });
    }



    else{
      if(this.selectedDates){
        this.basvuruForm.tarih = Tarihler.BIRINCI_GRUP
      }
      if (this.selectedDates2){
        this.basvuruForm.tarih = Tarihler.IKINCI_GRUP
      }
      if(this.selectedDates  && this.selectedDates2){
        this.basvuruForm.tarih = Tarihler.UCUNCU_GRUP
      }
      if(this.selectedCategories.length > 0){
        for(let a of this.selectedCategories){
          this.basvuruForm.departmanlar.push(a)
        }
      }


      if(this.basvuruForm.sinif){
        this.basvuruForm.sinif=this.basvuruForm.sinif.id;
      }


      if(this.ratingsMap){
        this.basvuruForm.dil = Object.keys(this.ratingsMap).map(key => ({
          dil: key as unknown as Diller, // DillerEnum'a dönüştürülmelidir
          seviyeler: this.ratingsMap[key] as Seviyeler // SeviyelerEnum'a dönüştürülmelidir
        }));
      }
      console.log(this.basvuruForm)
      this.basvuruFormService.kaydet(this.basvuruForm).subscribe((data:any)=>{
        this.formTemizle()
        console.log('Kayıt Başarılı!')
      })
    }


  }



  confirm1($event: MouseEvent) {


    this.confirmationService.confirm({
      target: $event.target as EventTarget,
      message: 'Bu işlemle tüm sorulardaki cevaplarınız kaldırılacak. İşlem geri alınamaz.',
      header: 'Form temizlensin mi?',
      icon: 'pi pi-exclamation-triangle',
      acceptIcon:"none",
      rejectIcon:"none",
      acceptLabel:"Formu temizle",
      rejectLabel:"İptal",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
        console.log('Form temizlendi');

        this.formTemizle()
      },

    });
  }

 denemeee2(category2: any){
    if (category2.id === Departmanlar.DIGER) {
      this.checkboxButtonGoster = this.selectedCategories.some(category => category.id === Departmanlar.DIGER);
    }
    this.denemeMethod();
  }
  denemeMethod() {
    console.log(this.selectedCategories)
    this.departmanlar.push(this.selectedCategories)
    console.log(this.departmanlar)
  }

  formTemizle() {
    for (let key in this.ratingsMap) {
      if (this.ratingsMap.hasOwnProperty(key)) {
        this.ratingsMap[key] = null;
      }
    }
    this.basvuruForm.adSoyad = null;
    this.basvuruForm.email = null;
    this.basvuruForm.telefon = null;
    this.basvuruForm.universite = null;
    this.basvuruForm.bolum = null;
    this.basvuruForm.sinif = null;
    this.basvuruForm.linkedinLink = null;
    this.basvuruForm.githubLink = null;
    this.basvuruForm.cvLink= null;
    this.selectedDates=null;
    this.selectedDates2 = null;
    this.selectedCategories=[]
    //this.basvuruForm.departmanlar = null;
    this.basvuruForm.dil = [];
    this.basvuruForm.tarih = null;
    this.accepted = null;
    this.accepted2 = null;
  }
}









