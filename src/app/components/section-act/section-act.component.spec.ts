import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionActComponent } from './section-act.component';

describe('SectionActComponent', () => {
  let component: SectionActComponent;
  let fixture: ComponentFixture<SectionActComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionActComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionActComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
