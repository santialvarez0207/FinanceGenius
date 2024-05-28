import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCommunityComponent } from './info-community.component';

describe('InfoCommunityComponent', () => {
  let component: InfoCommunityComponent;
  let fixture: ComponentFixture<InfoCommunityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCommunityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
