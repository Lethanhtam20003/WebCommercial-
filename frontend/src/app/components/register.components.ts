import { Component, ElementRef, ViewChild } from '@angular/core';
import { selectorName } from '../constant/selectorName';
import { Button } from 'primeng/button';
import { FloatLabel } from 'primeng/floatlabel';
import { FormsModule } from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { Password } from 'primeng/password';
import { LabelConstants } from '../constant/label.constants';
import { ErrorMessageConstants } from '../constant/error-message.constants';
import { NgClass } from '@angular/common';
import { RouteLink } from '../constant/route-link';
import { RouterLink } from '@angular/router';

@Component({
	selector: selectorName.registerComponent,
	standalone: true,
	imports: [
		Button,
		FloatLabel,
		FormsModule,
		InputText,
		Password,
		NgClass,
		RouterLink,
	],
	template: `
		<div
			class="h-screen flex items-start justify-center pt-10 bg-white max-w-full"
		>
			<form class="bg-white border border-gray-200 drop-shadow-2xl p-10">
				<div class=" flex justify-center font-bold pb-10 text-[30px]">
					{{ Label.register }}
				</div>
				<div class="card flex justify-center flex-col w-100">
					<div class="flex flex-col justify-center pb-5">
						<p-floatlabel variant="on">
							<input
								#usernameInput
								pInputText
								pSize="large"
								class="w-full"
								id="{{ usernameInputId }}"
								[(ngModel)]="username"
								autocomplete="on"
								name="{{ usernameInputId }}"
							/>
							<label
								[ngClass]="{ '!text-black': usernameIsFocused }"
								for="{{ usernameInputId }}"
								>{{ Label.username }}</label
							>
						</p-floatlabel>
						@if (username == null || username == '') {
							<small class="block mt-1 text-sm text-red-500 pl-1"
								>{{ ErrorMessage.pleaseEnterUsername }}
							</small>
						} @else if (username.length < 3) {
							<small class="block mt-1 text-sm text-red-500 pl-1"
								>{{ ErrorMessage.usernameHasAtLeast3Characters }}
							</small>
						}
					</div>
					<div class="flex flex-col justify-center pb-5">
						<p-floatlabel variant="on">
							<input
								#emailInput
								pInputText
								pSize="large"
								class="w-full"
								id="{{ emailInputId }}"
								[(ngModel)]="email"
								autocomplete="on"
								name="{{ emailInputId }}"
							/>
							<label
								[ngClass]="{ '!text-black': emailIsFocused }"
								for="{{ emailInputId }}"
								>{{ Label.email }}</label
							>
						</p-floatlabel>
						@if (email == null || email == '') {
							<small class="block mt-1 text-sm text-red-500 pl-1"
								>{{ ErrorMessage.pleaseEnterEmail }}
							</small>
						} @else if (!isValidEmail(email)) {
							<small class="block mt-1 text-sm text-red-500 pl-1">
								{{ ErrorMessage.emailIsNotValid }}
							</small>
						}
					</div>
					<div class="flex flex-col justify-center pb-5">
						<p-floatlabel variant="on" class="w-full">
							<p-password
								[(ngModel)]="password"
								class="w-full"
								size="large"
								[toggleMask]="true"
								[feedback]="false"
								inputId="on_label"
								name="{{ passwordInputId }}"
								(onFocus)="setFocus('password', true)"
								(onBlur)="setFocus('password', false)"
							/>
							<label
								[ngClass]="{ 'text-black': passwordIsFocused }"
								for="{{ passwordInputId }}"
							>
								{{ Label.password }}
							</label>
						</p-floatlabel>
						@if (password == null || password == '') {
							<small class="block mt-1 text-sm text-red-500 pl-3"
								>{{ ErrorMessage.pleaseEnterPassword }}
							</small>
						} @else if (password.length < 8 || password.length > 30) {
							<small class="block mt-1 text-sm text-red-500 pl-3"
								>{{
									ErrorMessage.passwordHasAtLeast8CharactersAndSmallerThan30
								}}
							</small>
						}
					</div>
					<div class="flex flex-col justify-center">
						<p-floatlabel variant="on" class="w-full">
							<p-password
								[(ngModel)]="retypePassword"
								class="w-full"
								size="large"
								[toggleMask]="true"
								[feedback]="false"
								inputId="on_label"
								name="{{ retypePasswordInputId }}"
								(onFocus)="setFocus('retypePassword', true)"
								(onBlur)="setFocus('retypePassword', false)"
							/>
							<label
								[ngClass]="{ 'text-black': retypePasswordIsFocused }"
								for="{{ retypePasswordInputId }}"
								>{{ Label.retypePassword }}</label
							>
						</p-floatlabel>
						@if (password.trim() !== retypePassword.trim()) {
							<small class="block mt-1 text-sm text-red-500 pl-3"
								>{{ ErrorMessage.retypePasswordMustBeSame }}
							</small>
						}
					</div>
					<div class="card flex gap-4 pt-4">
						<p-button
							label="{{ Label.register }}"
							[style]="{
								'background-color': 'black',
								'border-color': 'black',
								'border-radius': '0px',
							}"
						/>
					</div>
					<div class="card flex flex-row gap-1 pt-2">
						<p class="text-center text-sm">{{ Label.ifUHaveAnAccount }}</p>
						<a
							routerLink="/{{ RouteLink.loginRoute }}"
							class="text-center text-sm text-[#0096FF]"
						>
							{{ Label.returnToLogin }}
						</a>
					</div>
				</div>
			</form>
		</div>
	`,
	styles: `
		::ng-deep .p-button:hover {
			background-color: #ff4500 !important;
			border-color: #ff4500 !important;
		}

		/* 1. Mobile (sm) styles */
		@media (min-width: 320px) and (max-width: 640px) {
			::ng-deep {
				.p-password {
					height: 44.1px !important;
				}
				p-button {
					.p-button-icon-only {
						width: 25px;
						height: 25px;

						span {
							font-size: 18px;
						}
					}

					button {
						span {
							font-size: 10px;
						}
					}
				}
			}

			form {
				width: 280px;

				div {
					font-size: 25px;

					div {
						display: flex;
						flex-direction: column;
						width: 200px;

						p,
						a {
							font-size: 10px;
						}

						a {
							color: #0096ff;
						}
					}

					.p-floatlabel,
					small {
						font-size: 10px;
						width: 200px;

						input {
							font-size: 15px;
						}

						label {
							font-size: 10px;
						}
					}
				}
			}
		}

		/* 2. Mobile (sm) styles */
		@media (max-width: 640px) {
			.p-floatlabel {
				font-size: 0.875rem;
			}
			.p-button {
				width: 100%;
			}
		}

		/* 3. Tablet (md) styles */
		@media (min-width: 640px) and (max-width: 1024px) {
			.p-floatlabel {
				font-size: 1rem;
			}
			.p-button {
				width: auto;
			}
		}

		/* 4. Desktop (lg) styles */
		@media (min-width: 1024px) {
			.p-floatlabel {
				font-size: 1.125rem;
			}
			.p-button {
				width: auto;
			}
			::ng-deep {
				p-button {
					.p-button-icon-only {
						width: 45px;
						height: 45px;

						span {
							font-size: 35px;
						}
					}
				}
			}
		}
	`,
})
export class RegisterComponent {
	/*
	 * @description: value for username and password in input
	 * */
	username: string = '';
	password: string = '';
	retypePassword: string = '';
	email: string = '';

	/*
	 * @description: id for username and password input
	 * */
	readonly usernameInputId: string = 'username';
	readonly passwordInputId: string = 'password';
	readonly retypePasswordInputId: string = 'retypePassword';
	readonly emailInputId: string = 'email';

	/*
	 * @description: state for username and password input
	 * */
	usernameIsFocused: boolean = false;
	passwordIsFocused: boolean = false;
	retypePasswordIsFocused: boolean = false;
	emailIsFocused: boolean = false;

	/*
	 * @description: set focus for username input
	 * */
	@ViewChild('usernameInput') usernameInput!: ElementRef;
	@ViewChild('emailInput') emailInput!: ElementRef;
	ngAfterViewInit() {
		if (this.usernameInput) {
			this.usernameInput.nativeElement.addEventListener('focus', () => {
				this.setFocus('username', true);
			});
			this.usernameInput.nativeElement.addEventListener('blur', () => {
				this.setFocus('username', false);
			});
		}
		if (this.emailInput) {
			this.emailInput.nativeElement.addEventListener('focus', () => {
				this.setFocus('email', true);
			});
			this.emailInput.nativeElement.addEventListener('blur', () => {
				this.setFocus('email', false);
			});
		}
	}

	/*
	 * @description: event handler set focus for input
	 * */
	setFocus(field: string, isFocused: boolean) {
		if (field === 'username') {
			this.usernameIsFocused = isFocused;
		} else if (field === 'email') {
			this.emailIsFocused = isFocused;
		} else if (field === 'password') {
			this.passwordIsFocused = isFocused;
		} else if (field === 'retypePassword') {
			this.retypePasswordIsFocused = isFocused;
		}
	}

	/*
	 * @description: validate email format
	 * */
	isValidEmail(email: string): boolean {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	protected readonly Label = LabelConstants;
	protected readonly ErrorMessage = ErrorMessageConstants;
	protected readonly RouteLink = RouteLink;
}
