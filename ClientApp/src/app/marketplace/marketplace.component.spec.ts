/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MarketplaceComponent } from './marketplace.component';

let component: MarketplaceComponent;
let fixture: ComponentFixture<MarketplaceComponent>;

describe('marketplace component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MarketplaceComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MarketplaceComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});