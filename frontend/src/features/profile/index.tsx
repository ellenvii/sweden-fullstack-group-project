import AppShell from "@/components/AppShell"
import { Box, Grid, Heading, Text } from "@chakra-ui/react"

const profileCards = [
	{
		title: "Resident",
		value: "Student Name",
		description: "This can later come from auth or the user profile API.",
	},
	{
		title: "Room",
		value: "Building A, Room 305",
		description:
			"Useful for maintenance, section information, and cleaning assignments.",
	},
	{
		title: "Contact",
		value: "student@example.com",
		description:
			"A natural place for emergency contact or move-out details later.",
	},
]

export default function ProfilePage() {
	return (
		<AppShell
			title="Resident profile"
			description="Use this page for room information, contact details, and account-level settings related to student housing."
		>
			<Grid
				templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
				gap={4}
			>
				{profileCards.map((card) => (
					<Box
						key={card.title}
						bg="white"
						border="1px solid #dce5df"
						borderRadius="22px"
						p={5}
					>
						<Text fontSize="sm" color="#718176" mb={2}>
							{card.title}
						</Text>
						<Heading size="md" mb={2}>
							{card.value}
						</Heading>
						<Text color="#506057">{card.description}</Text>
					</Box>
				))}
			</Grid>
		</AppShell>
	)
}

export const Component = ProfilePage
