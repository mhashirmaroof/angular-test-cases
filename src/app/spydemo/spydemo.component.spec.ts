import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpydemoComponent } from './spydemo.component';
import { MockespyserviceService } from '../mockespyservice.service'

describe('SpydemoComponent', () => {
  let component: SpydemoComponent;
  let fixture: ComponentFixture<SpydemoComponent>;
  let mokespy: MockespyserviceService;
  let demofetchdata;
  let demolist;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpydemoComponent ],
      providers: [MockespyserviceService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpydemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    mokespy = TestBed.get(MockespyserviceService)

    demofetchdata = jasmine.createSpy('fetchdata');
    demofetchdata('dummy data fetched');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[Mock Spy] method called', () => {
    let mock = spyOn(mokespy, 'getValue');
    component.ngOnInit();
    expect(mokespy).toHaveBeenCalled();
  });
});
