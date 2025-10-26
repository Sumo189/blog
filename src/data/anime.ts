// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "明日方舟：黎明前奏",
		status: "watching",
		rating: 9.1,
		cover: "https://gcore.jsdelivr.net/gh/Sumo189/cdn@main/lmqz.webp",
		description:
			"为躲避无规律发生的天灾，大多数泰拉人生活在移动城市中。天灾过后会留下蕴藏巨大能量的源石，这在给予文明飞跃进步的同时，也引发了极具传染性的不治之症——矿石病。致力于解决天灾与矿石病带来的诸多问题，罗德岛积极游走于泰拉的各个角落。同时自称“为感染者争夺基本权利”的整合运动，正在引发前所未闻的大规模暴动……",
		episodes: "8 episodes",
		year: "2022",
		genre: ["末日", "科幻"],
		studio: "鹰角网络",
		link: "https://www.bilibili.com/bangumi/play/ss43058",
		progress: 2,
		totalEpisodes: 8,
		startDate: "2022-10",
		endDate: "2022-10",
	},
	{
		title: "明日方舟：冬隐归路",
		status: "watching",
		rating: 8.8,
		cover: "https://gcore.jsdelivr.net/gh/Sumo189/cdn@main/dygl.webp",
		description:
			"矿石病——那是会让人体逐渐结晶化直至死亡的不治之症。  罗德岛制药公司为研制出治疗矿石病的特效药物，并为解决天灾与矿石病带来的各种问题与争端、改善感染者的处境而不断采取着行动。为阻止感染者组织整合运动的暴行，罗德岛与炎国城市龙门签订协议，为实现各自的目标而共同行动着。在经历了与米莎和碎骨的战斗之后，阿米娅无法接受现实，独自消沉着。而在另一边，罗德岛向分城废墟派遣的侦察小队，注意到了废城中出现的特异现象……",
		episodes: "8 episodes",
		year: "2023",
		genre: ["战斗", "科幻"],
		studio: "鹰角网络",
		link: "https://www.bilibili.com/bangumi/play/ep775826",
		progress: 1,
		totalEpisodes: 8,
		startDate: "2023-10",
		endDate: "2023-11",
	},
];

export default localAnimeList;
