import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyBioComponent } from './my-bio.component';

describe('MyBioComponent', () => {
  let component: MyBioComponent;
  let fixture: ComponentFixture<MyBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
