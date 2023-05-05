import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2Component } from './module2.component';


let loader: HarnessLoader;


describe('Module2Component', () => {
	let component: Module2Component;
	let fixture: ComponentFixture<Module2Component>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [Module2Component]
		});
		fixture = TestBed.createComponent(Module2Component);
		loader = TestbedHarnessEnvironment.loader(fixture);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
