import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VulnerabilitesListComponent } from './vulnerabilites-list.component';

describe('VulnerabilitesListComponent', () => {
  let component: VulnerabilitesListComponent;
  let fixture: ComponentFixture<VulnerabilitesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VulnerabilitesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VulnerabilitesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
