import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MusiquesPage } from './musiques.page';

describe('MusiquesPage', () => {
  let component: MusiquesPage;
  let fixture: ComponentFixture<MusiquesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MusiquesPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MusiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
