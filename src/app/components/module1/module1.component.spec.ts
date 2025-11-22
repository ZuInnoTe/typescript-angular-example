import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { Module1Component } from './module1.component';

describe('Module1Component', () => {
	let component: Module1Component;
	let fixture: ComponentFixture<Module1Component>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [Module1Component],
			providers: [provideRouter([])]
		}).compileComponents();
		fixture = TestBed.createComponent(Module1Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
