import AppShell from "@/components/AppShell"
import { Box, Heading, Text, VStack } from "@chakra-ui/react"

const duties = [
	// To be replaced by real tasks/duties
	"Week 18: Corridor 2 handles the kitchen.",
	"Week 19: Corridor 3 handles the lounge and recycling area.",
	"Week 20: Corridor 4 handles the kitchen and hallway floors.",
]

export default function CleaningPage() {
	return (
		<AppShell
			title="Cleaning"
			description="This page shows the cleaning schedules and tasks"
		>
			<VStack align="stretch" gap={4}>
				{duties.map((duty) => (
					<Box
						key={duty}
						bg="white"
						border="1px solid #dce5df"
						borderRadius="22px"
						p={5}
					>
						<Heading size="sm" mb={2}>
							Weekly duty
						</Heading>
						<Text color="#506057">{duty}</Text>
					</Box>
				))}
			</VStack>
		</AppShell>
	)
}

export const Component = CleaningPage
