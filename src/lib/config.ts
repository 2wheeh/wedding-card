import type { CenterTextData } from './text';

const bride = {
	name: '마릴리',
	fullName: '마릴리',
	father: {
		fullName: '메타몽',
		bankName: '한국은행',
		accountNumber: '123456-00-123456',
	},
	mother: {
		fullName: '메타몽',
		bankName: '한국은행',
		accountNumber: '123456-00-123456',
	},
	bankName: '한국은행',
	accountNumber: '123456-00-123456',
};

const groom = {
	name: '데덴네',
	fullName: '데덴네',
	father: {
		fullName: '메타몽',
		bankName: '한국은행',
		accountNumber: '123456-00-123456',
	},
	mother: {
		fullName: '메타몽',
		bankName: '한국은행',
		accountNumber: '123456-00-123456',
	},
	bankName: '한국은행',
	accountNumber: '123456-00-123456',
};

const openGraph = {
	title: `${groom.name} ♥ ${bride.name} 결혼식 ✿'◡'✿`,
	description: `2025년 3월 30일 낮 12시 30분`,
	image: '/og-img.webp',
};

const date = new Date(2025, 2, 30, 12, 30);

const text = {
	invitation: {
		title: 'INVITATION',
		paragraphs: [
			{
				body: '서로의 반려자로서\n평생을 함께할 것을 맹세하는 날,\n꽃피는 봄의 따스한 기운 속에서\n저희 두 사람의 새로운 시작과\n앞날의 소중한 첫걸음을\n따뜻한 마음으로\n지켜봐 주시고 축복해 주시면\n감사하겠습니다.',
			},
		],
	},
	schedule: {
		paragraphs: [
			{
				subTitle: '2025년 3월 30일 일요일 낮 12시 30분\n아펠가모 반포 LL층 단독홀',
			},
		],
	},
	location: {
		title: 'LOCATION',
		paragraphs: [
			{
				body: '아펠가모 반포 LL층 단독홀\n서울 서초구 반포대로 235 효성빌딩 LL층',
			},
		],
	},
	transportation: {
		paragraphs: [
			{
				subTitle: '버스',
				body: '서울지방조달청.서울성모병원\n405, 740, 5413',
			},
			{
				subTitle: '지하철',
				body: '고속터미널역 5번 출구\n3호선, 7호선, 9호선',
			},
			{
				subTitle: '주차안내',
				body: '건물 내 B3-B5 2시간 무료주차',
			},
		],
	},
	wreath: {
		paragraphs: [
			{
				subTitle: '축하화환 안내',
				body: '화환은 정중히 사양합니다.\n좋은 마음만 감사히 받겠습니다.',
			},
		],
	},
	footer: {
		paragraphs: [
			{
				body: '응원하고 격려해주신 모든 분들께\n감사드리며\n행복하게 잘 살겠습니다.',
			},
		],
	},
} satisfies Record<string, CenterTextData>;

const map = {
	lagitude: 37.50084,
	longitude: 127.00795,
	links: [
		{
			text: '카카오맵',
			image: '/icons/icon-kakao-map.webp',
			href: `https://map.kakao.com/link/map/1807085957`,
			mobileOnly: false,
		},
		{
			text: '네이버지도',
			image: '/icons/icon-naver-map.webp',
			href: 'https://naver.me/xM2E86s2',
			mobileOnly: false,
		},
		{
			text: '티맵',
			image: '/icons/icon-tmap.png',
			href: 'tmap://search?name=%EC%95%84%ED%8E%A0%EA%B0%80%EB%AA%A8%20%EB%B0%98%ED%8F%AC',
			mobileOnly: true,
		},
	] satisfies {
		text: string;
		image: string;
		href: string;
		mobileOnly: boolean;
	}[],
};

export const config = {
	openGraph,
	bride,
	groom,
	date: new Date(date.toLocaleString('en-US', { timeZone: 'Asia/Seoul' })),
	text,
	map,
} as const;
