import RulesApi, { type HouseRule } from "@/api/rules"
import AppShell from "@/components/AppShell"
import { Box, Grid, Heading, Spinner, Text, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function RulesPage() {
	const [rules, setRules] = useState<HouseRule[]>([])
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		async function loadRules() {
			try {
				const data = await RulesApi.getAll()
				setRules(data)
			} catch {
				setError("Could not load house rules.")
			} finally {
				setIsLoading(false)
			}
		}

		void loadRules()
	}, [])

	return (
		<AppShell
			title="House rules"
			description="Find shared rules, emergency notes, and important dorm information in one place."
		>
			{isLoading ? (
				<Spinner />
			) : error ? (
				<Text color="#9b2c2c">{error}</Text>
			) : (
				<Grid
					templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
					gap={4}
				>
					{rules.map((rule) => (
						<Box
							key={rule.id}
							bg="white"
							border="1px solid #dce5df"
							borderRadius="22px"
							p={5}
						>
							<VStack align="stretch" gap={2}>
								<Text fontSize="sm" color="#718176">
									{rule.category}
								</Text>
								<Heading size="md">{rule.title}</Heading>
								<Text color="#506057">{rule.body}</Text>
								<Text fontSize="sm" color="#718176">
									Updated {rule.updatedAt}
								</Text>
							</VStack>
						</Box>
					))}
				</Grid>
			)}
		</AppShell>
	)
}

export const Component = RulesPage
