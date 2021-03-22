/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PurchaseItemComponent } from './purchase-item.component';

let component: PurchaseItemComponent;
let fixture: ComponentFixture<PurchaseItemComponent>;

describe('purchase-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PurchaseItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PurchaseItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});