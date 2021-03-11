/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PurchaseComponent } from './purchase.component';

let component: PurchaseComponent;
let fixture: ComponentFixture<PurchaseComponent>;

describe('Purchase component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PurchaseComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PurchaseComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});