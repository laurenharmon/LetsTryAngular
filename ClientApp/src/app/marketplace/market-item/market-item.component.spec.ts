/// <reference path="../../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { MarketItemComponent } from './market-item.component';

let component: MarketItemComponent;
let fixture: ComponentFixture<MarketItemComponent>;

describe('market-item component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ MarketItemComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(MarketItemComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});