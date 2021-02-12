import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GetMyProfitilePage } from './get-my-profitile.page';

describe('GetMyProfitilePage', () => {
  let component: GetMyProfitilePage;
  let fixture: ComponentFixture<GetMyProfitilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetMyProfitilePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GetMyProfitilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
