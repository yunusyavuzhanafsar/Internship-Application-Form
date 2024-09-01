import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreleComponent } from './filtrele.component';

describe('FiltreleComponent', () => {
  let component: FiltreleComponent;
  let fixture: ComponentFixture<FiltreleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltreleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
