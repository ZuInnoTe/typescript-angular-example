import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { provideRouter } from '@angular/router';
import { Module2Component } from './module2.component';

describe('Module2Component', () => {
	let component: Module2Component;
	let fixture: ComponentFixture<Module2Component>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			imports: [Module2Component],
			providers: [provideRouter([])]
		}).compileComponents();
		fixture = TestBed.createComponent(Module2Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
