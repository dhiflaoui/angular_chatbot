import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaDialogComponent } from './cha-dialog.component';

describe('ChaDialogComponent', () => {
  let component: ChaDialogComponent;
  let fixture: ComponentFixture<ChaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
