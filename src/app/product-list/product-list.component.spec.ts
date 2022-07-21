import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from "@angular/platform-browser";
import { ProductServiceService } from '../product-service.service'

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let dbg: DebugElement;
  let prdService: ProductServiceService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductListComponent],
      imports: [FormsModule],
      providers: [ProductServiceService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    prdService = TestBed.get(ProductServiceService)
    component = fixture.componentInstance;
    dbg = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test Filter Product List (Async)',async (() => {
    component.searchText = 't';
    let productSpy = spyOn(prdService, 'filterProductList').withArgs('t').and.callThrough();

    component.filterProductList({});

    productSpy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      const value = dbg.query(By.css('#item_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);

    })
  }))

  it('test Filter Product List (Fake Async)', fakeAsync (() => {
    component.searchText = 't';
    let productSpy = spyOn(prdService, 'filterProductList').withArgs('t').and.callThrough();

    component.filterProductList({});

    tick();
    
       fixture.detectChanges();
      const value = dbg.query(By.css('#item_0')).nativeElement.innerText;
      expect(value).toContain(component.searchText);

  }))
});
