import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouteLink } from '../../constant/route-link';
import { LabelConstants } from '../../constant/label.constants';
import { selectorName } from '../../constant/selectorName';

@Component({
	selector: selectorName.footer,
	template: `
		<footer class="bg-[#141d22] text-gray-700">
			<!-- Footer Top -->
			<div class="py-12 border-b border-gray-200">
				<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div>
							<!-- Logo & Description -->
							<div class="mb-4">
								<a href="{{ RouteLink.homeRoute }}">
									<img
										ngSrc="{{ logo2 }}"
										alt="#"
										class="h-10"
										width="120"
										height="10"
									/>
								</a>
							</div>
							<p class="text-sm text-white mb-4">
								{{ Label.description }}
							</p>
							<p class="text-sm font-semibold text-white">
								{{ Label.callUs }}
								<br />
								<span class="text-[#FF4500] text-xl"
									><a href="tel:123456789">{{ Label.hotLinePhoneNum }}</a></span
								>
							</p>
						</div>

						<div>
							<!-- Information Links -->
							<h4 class="text-lg font-semibold mb-4 text-white">
								{{ Label.information }}
							</h4>
							<ul class="space-y-2 text-sm text-white">
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.aboutUs
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{ Label.faqs }}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.termAndCondition
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.contactUs
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{ Label.help }}</a>
								</li>
							</ul>
						</div>

						<div>
							<!-- Customer Service Links -->
							<h4 class="text-lg font-semibold mb-4 text-white">
								{{ Label.customerService }}
							</h4>
							<ul class="space-y-2 text-sm text-white">
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.paymentMethods
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.moneyBack
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{ Label.return }}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.shipping
									}}</a>
								</li>
								<li>
									<a href="#" class="hover:text-blue-500">{{
										Label.privacyPolicy
									}}</a>
								</li>
							</ul>
						</div>

						<div>
							<!-- Contact & Social -->
							<h4 class="text-lg font-semibold mb-4 text-white">
								{{ Label.getInTouch }}
							</h4>
							<ul class="text-sm mb-4 space-y-2 text-white">
								<li>{{ Label.numberAndStreet }}</li>
								<li>{{ Label.cityAndCountry }}</li>
								<li>{{ Label.email }}</li>
								<li>{{ Label.organizationPhoneNumber }}</li>
							</ul>
							<div class="flex space-x-3">
								<a href="#" class="text-gray-500 hover:text-blue-500"
									><i class="ti-facebook"></i
								></a>
								<a href="#" class="text-gray-500 hover:text-blue-500"
									><i class="ti-twitter"></i
								></a>
								<a href="#" class="text-gray-500 hover:text-blue-500"
									><i class="ti-flickr"></i
								></a>
								<a href="#" class="text-gray-500 hover:text-blue-500"
									><i class="ti-instagram"></i
								></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	`,
	styleUrl: 'footer.component.scss',
	imports: [NgOptimizedImage],
	standalone: true,
})
export class FooterComponent {
	logo2: string = 'assets/images/shop/logo2.png';
	protected readonly RouteLink = RouteLink;
	protected readonly Label = LabelConstants;
}
