/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { PictureUploadComponent } from './picture-upload.component';

let component: PictureUploadComponent;
let fixture: ComponentFixture<PictureUploadComponent>;

describe('picture-upload component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PictureUploadComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(PictureUploadComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});