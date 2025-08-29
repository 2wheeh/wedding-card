import type { CenterTextData } from './text';

const bride = {
	name: '영수',
	fullName: '이영수',
	bankName: '국민은행',
	relationShip: '차녀',
	accountNumber: '041302-04-076530',
	father: {
		fullName: '이선배',
		bankName: '신한은행',
		accountNumber: '110-066-490900',
	},
	mother: {
		fullName: '전나영',
		bankName: '우리은행',
		accountNumber: '446-07-034995',
	},
};

const groom = {
	name: '원희',
	fullName: '이원희',
	bankName: '신한은행',
	relationShip: '외아들',
	accountNumber: '110-412-031248',
	father: {
		fullName: '이상학',
		bankName: '국민은행',
		accountNumber: '434701-01-194050',
	},
	mother: {
		fullName: '양경희',
		bankName: '국민은행',
		accountNumber: '439225-91-115604',
	},
};

const openGraph = {
	title: `${groom.name} ♥ ${bride.name} 결혼식 ✿'◡'✿`,
	description: `2025년 10월 12일 낮 3시`,
	image: '/og-img2.webp',
};

const date = new Date(2025, 9, 12, 15, 0);

const text = {
	invitation: {
		title: 'INVITATION',
		paragraphs: [
			{
				body: '서로의 반려자로서\n평생을 함께할 것을 맹세하는 날,\n깊어가는 가을의 풍성한 결실처럼\n저희 두 사람의 새로운 시작과\n앞날의 소중한 첫걸음을\n따뜻한 마음으로\n지켜봐 주시고 축복해 주시면\n감사하겠습니다.',
			},
		],
	},
	schedule: {
		paragraphs: [
			{
				subTitle: '2025년 10월 12일 일요일 낮 3시\n소노펠리체 컨벤션 3층 다이아몬드홀',
			},
		],
	},
	location: {
		title: 'LOCATION',
		paragraphs: [
			{
				body: '소노펠리체 컨벤션 3층 다이아몬드홀\n서울 강남구 테헤란로87길 22 도심공항터미널 3층',
			},
		],
	},
	transportation: {
		paragraphs: [
			{
				subTitle: '버스',
				body: '한국무역센터삼성역\n146, 333, 341',
			},
			{
				subTitle: '지하철',
				body: '2호선 삼성역 5번 출구\n9호선 봉은사역 7번 출구',
			},
			{
				subTitle: '주차안내',
				body: '한국도심공항 터미널 주차장',
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
	lagitude: 37.5096322564759,
	longitude: 127.059443354483,
	links: [
		{
			text: '카카오맵',
			image: '/icons/icon-kakao-map.webp',
			href: `https://kko.kakao.com/f8BgPM965l`,
			mobileOnly: false,
		},
		{
			text: '네이버지도',
			image: '/icons/icon-naver-map.webp',
			href: 'https://naver.me/5VmQvsvf',
			mobileOnly: false,
		},
		{
			text: '티맵',
			image: '/icons/icon-tmap.png',
			href: 'tmap://search?name=%EC%86%8C%EB%85%B8%ED%8E%A0%EB%A6%AC%EC%B2%B4%20%EC%BB%A8%EB%B2%A4%EC%85%98',
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
