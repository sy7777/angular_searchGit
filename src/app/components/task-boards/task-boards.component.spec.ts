import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBoardsComponent } from './task-boards.component';

describe('TaskBoardsComponent', () => {
  let component: TaskBoardsComponent;
  let fixture: ComponentFixture<TaskBoardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBoardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
