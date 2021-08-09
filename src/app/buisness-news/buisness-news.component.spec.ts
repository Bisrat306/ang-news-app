import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessNewsComponent } from './buisness-news.component';

describe('BuisnessNewsComponent', () => {
  let component: BuisnessNewsComponent;
  let fixture: ComponentFixture<BuisnessNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuisnessNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
