import MobileDetect from 'mobile-detect';

export function isMobile(): boolean {
	const mobileDetect = new MobileDetect(navigator.userAgent);
	return mobileDetect.mobile() !== null;
}
