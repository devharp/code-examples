import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvwebComponent } from './tvweb.component';

describe('TvwebComponent', () => {
  let component: TvwebComponent;
  let fixture: ComponentFixture<TvwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvwebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
