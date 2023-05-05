import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1Component } from './module1.component';

let loader: HarnessLoader;

describe('Module1Component', () => {
	let component: Module1Component;
	let fixture: ComponentFixture<Module1Component>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Module1Component]
		});
		fixture = TestBed.createComponent(Module1Component);
		loader = TestbedHarnessEnvironment.loader(fixture);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
