import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleRulesComponent } from './modale-rules.component';

describe('ModaleRulesComponent', () => {
  let component: ModaleRulesComponent;
  let fixture: ComponentFixture<ModaleRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModaleRulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModaleRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
