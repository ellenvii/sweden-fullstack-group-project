export type HouseRule = {
	id: number
	title: string
	body: string
	category: string
	sortOrder: number
	updatedAt: string
}

const rules: HouseRule[] = [
	{
		id: 1,
		title: "Quiet hours",
		body: "Keep noise low between 22:00 and 07:00, especially in corridors and shared kitchens.",
		category: "Shared living",
		sortOrder: 1,
		updatedAt: "2026-04-20",
	},
	{
		id: 2,
		title: "Kitchen reset",
		body: "Wash dishes, wipe counters, and remove old food from shared surfaces after cooking.",
		category: "Kitchen",
		sortOrder: 2,
		updatedAt: "2026-04-20",
	},
	{
		id: 3,
		title: "Maintenance issues",
		body: "Report leaks, broken appliances, or safety concerns to the landlord as soon as possible.",
		category: "Important info",
		sortOrder: 3,
		updatedAt: "2026-04-20",
	},
]

class RulesApi {
	async getAll() {
		// Later: return axios.get<HouseRule[]>("/api/rules").then((res) => res.data)
		return rules.sort((a, b) => a.sortOrder - b.sortOrder)
	}
}

export default new RulesApi()
