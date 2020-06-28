import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcatComponent } from './listcat.component';

describe('ListcatComponent', () => {
  let component: ListcatComponent;
  let fixture: ComponentFixture<ListcatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
