import AppShell from "@/components/AppShell"
import { Box, Grid, Heading, HStack, Text, VStack } from "@chakra-ui/react"

const summaryCards = [
	{
		title: "Upcoming section event",
		value: "Dinner on Sunday",
		description: "Section A is planning a shared common room dinner.",
	},
	{
		title: "Cleaning duty",
		value: "Kitchen check on Thursday",
		description: "Your group is assigned surfaces, bins, and floor.",
	},
	{
		title: "Latest announcements",
		value: "2 new updates",
		description: "One maintenance notice and one social event update.",
	},
]

export default function DashboardPage() {
	return (
		<AppShell
			title="Dashboard"
			description="This is the main landing page for residents. "
		>
			<VStack align="stretch" gap={6}>
				<Grid
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={4}
				>
					{summaryCards.map((card) => (
						<Box
							key={card.title}
							bg="#f8f9fb"
							border="1px solid #d8e3dc"
							borderRadius="22px"
							p={5}
						>
							<Text fontSize="sm" color="#65746b" mb={3}>
								{card.title}
							</Text>
							<Heading size="md" mb={2}>
								{card.value}
							</Heading>
							<Text color="#516057">{card.description}</Text>
						</Box>
					))}
				</Grid>

				<Box
					bg="#f8fbff"
					border="1px solid #deefff"
					borderRadius="24px"
					p={6}
				>
					<HStack justify="space-between" align="flex-start" gap={4}>
						<Box>
							<Heading size="md" mb={2}>
								PARTYYY
							</Heading>
							<Text color="#57655d" maxW="620px">
								Party on the 3rd floor @ 21:00!
							</Text>
						</Box>
					</HStack>
				</Box>
			</VStack>
		</AppShell>
	)
}

export const Component = DashboardPage
