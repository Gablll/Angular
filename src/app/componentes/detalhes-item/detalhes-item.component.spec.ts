import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesItemComponent } from './detalhes-item.component';

describe('DetalhesItemComponent', () => {
  let component: DetalhesItemComponent;
  let fixture: ComponentFixture<DetalhesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalhesItemComponent]
    });
    fixture = TestBed.createComponent(DetalhesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
