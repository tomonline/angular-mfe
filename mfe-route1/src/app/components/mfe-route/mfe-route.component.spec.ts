import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeRouteComponent } from './mfe-route.component';

describe('MfeRouteComponent', () => {
  let component: MfeRouteComponent;
  let fixture: ComponentFixture<MfeRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeRouteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MfeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
