import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {TableModule} from "primeng/table";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {MenuModule} from "primeng/menu";
import {Button, ButtonDirective, ButtonModule} from "primeng/button";
import {DialogModule} from "primeng/dialog";
import {InputTextModule} from "primeng/inputtext";
import {NgForOf, NgIf} from "@angular/common";
import {ToastModule} from "primeng/toast";
import { ConfirmPopupModule} from "primeng/confirmpopup";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ConfirmationService, MessageService} from "primeng/api";
import {Durumlar} from "../../enum/Durumlar";
import {BasvuruForm} from "../../models/BasvuruForm";
import {BasvuruFormService} from "../../services/basvuruForm.service";
import {FiltreleComponent} from "../filtrele/filtrele.component";


@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    RouterLink,
    TableModule,
    DropdownModule,
    FormsModule,
    MenuModule,
    Button,
    DialogModule,
    ButtonDirective,
    InputTextModule,
    NgIf,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    ButtonModule,
    NgForOf, HttpClientModule, FiltreleComponent
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers:[ConfirmationService,MessageService,BasvuruFormService]
})
export class TableComponent implements OnInit{

  openCvLink(cvLink: string) {
    window.open(cvLink, '_blank');
  }
  openLinkedInLink(linkedinLink: string) {
    window.open(linkedinLink, '_blank');
  }

  openGithubLink(githubLink: string) {
    window.open(githubLink, '_blank');
  }

  seviye2: any[] = [];

  form = new BasvuruForm();
  yeni: any;
  veri: any[] = [];
  data: any[] = [];
  formData1: any[] = [
    {
      id: 1,
      adSoyad: "Ahmet Yılmaz",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070758",
      cvLink: "https://drive.google.com/file/d/1/example",
      email: "ahmetyilmaz@gmail.com",
      githubLink: "https://github.com/ahmetyilmaz",
      sinif: "4. Sınıf",
      departman: "Frontend Geliştirme",
      tarih: "25/07/2024",
      linkedinLink: "https://www.linkedin.com/in/ahmetyilmaz",
      programlamaDil: "'Java','JavaScript','Python'",
      dilSeviye: "'4','3','4'",
      universite: "İstanbul Teknik Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 2,
      adSoyad: "Mehmet Kaya",
      bolum: "Yazılım Mühendisliği",
      telefon: "5301234567",
      cvLink: "https://drive.google.com/file/d/2/example",
      email: "mehmetkaya@gmail.com",
      githubLink: "https://github.com/mehmetkaya",
      sinif: "3. Sınıf",
      departman: "Backend Geliştirme",
      tarih: "20/07/2024",
      linkedinLink: "https://www.linkedin.com/in/mehmetkaya",
      programlamaDil: "'C#','SQL','Python'",
      dilSeviye: "'5','4','3'",
      universite: "Boğaziçi Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 3,
      adSoyad: "Elif Demir",
      bolum: "Bilgisayar Bilimleri",
      telefon: "5349876543",
      cvLink: "https://drive.google.com/file/d/3/example",
      email: "elifdemir@gmail.com",
      githubLink: "https://github.com/elifdemir",
      sinif: "2. Sınıf",
      departman: "Mobil Geliştirme",
      tarih: "22/07/2024",
      linkedinLink: "https://www.linkedin.com/in/elifdemir",
      programlamaDil: "'Kotlin','Swift','Dart'",
      dilSeviye: "'4','4','3'",
      universite: "Orta Doğu Teknik Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 4,
      adSoyad: "Ayşe Çelik",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5397654321",
      cvLink: "https://drive.google.com/file/d/4/example",
      email: "aysecelik@gmail.com",
      githubLink: "https://github.com/aysecelik",
      sinif: "1. Sınıf",
      departman: "Veri Bilimi",
      tarih: "23/07/2024",
      linkedinLink: "https://www.linkedin.com/in/aysecelik",
      programlamaDil: "'R','Python','SQL'",
      dilSeviye: "'4','4','3'",
      universite: "Ege Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 5,
      adSoyad: "Burak Öz",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5326789012",
      cvLink: "https://drive.google.com/file/d/5/example",
      email: "burakoz@gmail.com",
      githubLink: "https://github.com/burakoz",
      sinif: "4. Sınıf",
      departman: "DevOps",
      tarih: "24/07/2024",
      linkedinLink: "https://www.linkedin.com/in/burakoz",
      programlamaDil: "'Bash','Python','Docker'",
      dilSeviye: "'5','4','4'",
      universite: "Yıldız Teknik Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 6,
      adSoyad: "Canan Aydın",
      bolum: "Yazılım Mühendisliği",
      telefon: "5312345678",
      cvLink: "https://drive.google.com/file/d/6/example",
      email: "canan.aydin@gmail.com",
      githubLink: "https://github.com/cananaydin",
      sinif: "3. Sınıf",
      departman: "Yapay Zeka",
      tarih: "21/07/2024",
      linkedinLink: "https://www.linkedin.com/in/cananaydin",
      programlamaDil: "'Python','TensorFlow','Keras'",
      dilSeviye: "'5','4','4'",
      universite: "Koç Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 7,
      adSoyad: "Deniz Kara",
      bolum: "Bilgisayar Bilimleri",
      telefon: "5309876543",
      cvLink: "https://drive.google.com/file/d/7/example",
      email: "denizkara@gmail.com",
      githubLink: "https://github.com/denizkara",
      sinif: "2. Sınıf",
      departman: "Siber Güvenlik",
      tarih: "26/07/2024",
      linkedinLink: "https://www.linkedin.com/in/denizkara",
      programlamaDil: "'C','Python','Assembly'",
      dilSeviye: "'4','4','3'",
      universite: "İzmir Yüksek Teknoloji Enstitüsü",
      durum: "Kabul"
    },
    {
      id: 8,
      adSoyad: "Ebru Taş",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5398765432",
      cvLink: "https://drive.google.com/file/d/8/example",
      email: "ebru.tas@gmail.com",
      githubLink: "https://github.com/ebrutas",
      sinif: "1. Sınıf",
      departman: "Oyun Geliştirme",
      tarih: "28/07/2024",
      linkedinLink: "https://www.linkedin.com/in/ebrutas",
      programlamaDil: "'C#','Unity','Python'",
      dilSeviye: "'4','3','4'",
      universite: "Hacettepe Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 9,
      adSoyad: "Fatih Yıldırım",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5387654321",
      cvLink: "https://drive.google.com/file/d/9/example",
      email: "fatih.yildirim@gmail.com",
      githubLink: "https://github.com/fatihyildirim",
      sinif: "4. Sınıf",
      departman: "Veri Tabanı Yönetimi",
      tarih: "27/07/2024",
      linkedinLink: "https://www.linkedin.com/in/fatihyildirim",
      programlamaDil: "'SQL','Java','Python'",
      dilSeviye: "'5','4','4'",
      universite: "Selçuk Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 10,
      adSoyad: "Gizem Şahin",
      bolum: "Yazılım Mühendisliği",
      telefon: "5376543210",
      cvLink: "https://drive.google.com/file/d/10/example",
      email: "gizem.sahin@gmail.com",
      githubLink: "https://github.com/gizemsahin",
      sinif: "3. Sınıf",
      departman: "Makine Öğrenmesi",
      tarih: "29/07/2024",
      linkedinLink: "https://www.linkedin.com/in/gizemsahin",
      programlamaDil: "'Python','R','Matlab'",
      dilSeviye: "'5','4','4'",
      universite: "Sabancı Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 11,
      adSoyad: "Ahmet Kaya",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070751",
      cvLink: "https://www.linkedin.com/in/ahmetkaya",
      email: "ahmetkaya@gmail.com",
      githubLink: "https://github.com/ahmetkaya",
      sinif: "3. Sınıf",
      departman: "Frontend Geliştirme",
      tarih: "01/07/2024",
      linkedinLink: "https://www.linkedin.com/in/ahmetkaya",
      programlamaDil: "JavaScript, TypeScript",
      dilSeviye: "B1, B2",
      universite: "Orta Doğu Teknik Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 12,
      adSoyad: "Elif Yılmaz",
      bolum: "Yazılım Mühendisliği",
      telefon: "5372070752",
      cvLink: "https://www.linkedin.com/in/elif",
      email: "elifyilmaz@gmail.com",
      githubLink: "https://github.com/elif",
      sinif: "2. Sınıf",
      departman: "Backend Geliştirme",
      tarih: "02/07/2024",
      linkedinLink: "https://www.linkedin.com/in/elif",
      programlamaDil: "Java, Python",
      dilSeviye: "C1, B2",
      universite: "İstanbul Teknik Üniversitesi",
      durum: "Yedek"
    },
    {
      id:13,
      adSoyad: "Mehmet Öz",
      bolum: "Bilgisayar Bilimleri",
      telefon: "5372070753",
      cvLink: "https://www.linkedin.com/in/mehmetoz",
      email: "mehmetoz@gmail.com",
      githubLink: "https://github.com/mehmetoz",
      sinif: "4. Sınıf",
      departman: "Veri Bilimi",
      tarih: "03/07/2024",
      linkedinLink: "https://www.linkedin.com/in/mehmetoz",
      programlamaDil: "Python, R",
      dilSeviye: "B2, C1",
      universite: "Boğaziçi Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 14,
      adSoyad: "Ayşe Demir",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070754",
      cvLink: "https://www.linkedin.com/in/aysedemir",
      email: "aysedemir@gmail.com",
      githubLink: "https://github.com/aysedemir",
      sinif: "1. Sınıf",
      departman: "Mobil Uygulama Geliştirme",
      tarih: "04/07/2024",
      linkedinLink: "https://www.linkedin.com/in/aysedemir",
      programlamaDil: "Kotlin, Swift",
      dilSeviye: "A2, B1",
      universite: "Ege Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 15,
      adSoyad: "Ali Veli",
      bolum: "Elektrik Elektronik Mühendisliği",
      telefon: "5372070755",
      cvLink: "https://www.linkedin.com/in/aliveli",
      email: "aliveli@gmail.com",
      githubLink: "https://github.com/aliveli",
      sinif: "2. Sınıf",
      departman: "Robotik",
      tarih: "05/07/2024",
      linkedinLink: "https://www.linkedin.com/in/aliveli",
      programlamaDil: "C++, Python",
      dilSeviye: "B1, B2",
      universite: "Yıldız Teknik Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 16,
      adSoyad: "Zeynep Çelik",
      bolum: "Yazılım Mühendisliği",
      telefon: "5372070756",
      cvLink: "https://www.linkedin.com/in/zeynepcelik",
      email: "zeynepcelik@gmail.com",
      githubLink: "https://github.com/zeynepcelik",
      sinif: "3. Sınıf",
      departman: "Veritabanı Yönetimi",
      tarih: "06/07/2024",
      linkedinLink: "https://www.linkedin.com/in/zeynepcelik",
      programlamaDil: "SQL, PL/SQL",
      dilSeviye: "B2, C1",
      universite: "Hacettepe Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 17,
      adSoyad: "Mustafa Kemal",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070757",
      cvLink: "https://www.linkedin.com/in/mustafakemal",
      email: "mustafakemal@gmail.com",
      githubLink: "https://github.com/mustafakemal",
      sinif: "1. Sınıf",
      departman: "Yapay Zeka",
      tarih: "07/07/2024",
      linkedinLink: "https://www.linkedin.com/in/mustafakemal",
      programlamaDil: "Python, TensorFlow",
      dilSeviye: "C1, C2",
      universite: "Ankara Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 18,
      adSoyad: "Fatma Kılıç",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070758",
      cvLink: "https://www.linkedin.com/in/fatmakilic",
      email: "fatmakilic@gmail.com",
      githubLink: "https://github.com/fatmakilic",
      sinif: "4. Sınıf",
      departman: "Siber Güvenlik",
      tarih: "08/07/2024",
      linkedinLink: "https://www.linkedin.com/in/fatmakilic",
      programlamaDil: "Python, Bash",
      dilSeviye: "B2, C1",
      universite: "Marmara Üniversitesi",
      durum: "Yedek"
    },
    {
      id: 19,
      adSoyad: "Emre Aslan",
      bolum: "Yazılım Mühendisliği",
      telefon: "5372070759",
      cvLink: "https://www.linkedin.com/in/emreaslan",
      email: "emreaslan@gmail.com",
      githubLink: "https://github.com/emreaslan",
      sinif: "2. Sınıf",
      departman: "Web Geliştirme",
      tarih: "09/07/2024",
      linkedinLink: "https://www.linkedin.com/in/emreaslan",
      programlamaDil: "HTML, CSS, JavaScript",
      dilSeviye: "A2, B1",
      universite: "Dokuz Eylül Üniversitesi",
      durum: "Kabul"
    },
    {
      id: 20,
      adSoyad: "Hakan Yıldırım",
      bolum: "Bilgisayar Bilimleri",
      telefon: "5372070760",
      cvLink: "https://www.linkedin.com/in/hakanyildirim",
      email: "hakanyildirim@gmail.com",
      githubLink: "https://github.com/hakanyildirim",
      sinif: "3. Sınıf",
      departman: "Bilgisayar Ağları",
      tarih: "10/07/2024",
      linkedinLink: "https://www.linkedin.com/in/hakanyildirim",
      programlamaDil: "C, C++",
      dilSeviye: "B1, B2",
      universite: "İzmir Yüksek Teknoloji Enstitüsü",
      durum: "Yedek"
    },
    {
      id: 21,
      adSoyad: "Selin Aksoy",
      bolum: "Bilgisayar Mühendisliği",
      telefon: "5372070761",
      cvLink: "https://www.linkedin.com/in/selinaksoy",
      email: "selinaksoy@gmail.com",
      githubLink: "https://github.com/selinaksoy",
      sinif: "1. Sınıf",
      departman: "Oyun Geliştirme",
      tarih: "11/07/2024",
      linkedinLink: "https://www.linkedin.com/in/selinaksoy",
      programlamaDil: "C#, Unity",
      dilSeviye: "A2, B1",
      universite: "Bilkent Üniversitesi",
      durum: "Kabul"
    },

  ];



  visible: boolean = false;


  showDialog(data: any) {
    this.yeni = data
    console.log(this.yeni)
    this.seviye2.push(this.yeni)
    console.log(this.seviye2)
    this.visible = true;
  }

  constructor(private messageService: MessageService, private confirmationService: ConfirmationService,private basvuruFormService:BasvuruFormService,private httpClient: HttpClient) {

  }


  ngOnInit() {
    this.dataget()
  }

  dataget() {
    this.basvuruFormService.getAll().subscribe((data: any) => {
      console.log(data)
      this.veri = data.data;
      console.log(this.veri)
      console.log(Durumlar.RET)
    })

  }

  mailGonder(durum: Durumlar, id: number) {
    this.basvuruFormService.updateStatus(id,durum).subscribe(res=>{
      console.log(res);
      this.messageService.add({ severity:'success',detail: 'Mail Gönderildi!'});

    })

  }


  confirm1(event: Event, data: any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Başvuruyu Reddetmeyi Onaylıyor Musunuz?',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Evet',
      rejectLabel: 'Hayır',
      acceptIcon: "none",
      rejectIcon: "none",
      header: 'Bilgilendirme',
      rejectButtonStyleClass: "p-button-text p-button-danger",
      acceptButtonStyleClass: "p-button-text p-button-primary",
      accept: () => {
        data.durum = "Ret"; // Durumu güncelle
        this.mailGonder(data.durum, data.id);
      },
    });
  }


  confirm2(event: Event,data:any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Başvuruyu Havuza Almayı Onaylıyor Musunuz?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: " p-button-text p-button-text ",
      rejectButtonStyleClass: " p-button-danger p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: 'Evet',
      rejectLabel: 'Hayır',
      header: 'Bilgilendirme',

      accept: () => {
        data.durum = "Yedek"; // Durumu güncelle
        this.mailGonder(data.durum, data.id);
      },
    });
  }

  confirm3(event: Event,data:any) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Başvuruyu Kabul Etmeyi Onaylıyor Musunuz?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: "p-button-success p-button-text",
      rejectButtonStyleClass: "p-button-danger p-button-text",
      acceptIcon: "none",
      rejectIcon: "none",
      acceptLabel: 'Evet',
      rejectLabel: 'Hayır',
      header: 'Bilgilendirme',

      accept: () => {

        data.durum = "Kabul"; // Durumu güncelle
        this.mailGonder(data.durum, data.id);
      },

    });
  }


  dialogTemizle() {
    this.seviye2 = [];
  }


}
