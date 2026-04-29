import AppShell from "@/components/AppShell"
import { Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"

const announcements = [
	// to be replaced by actual announcements
	{
		title: "Water shutdown in Building C",
		meta: "Facilities team • Today",
		body: "Hot water testing will affect showers between 10:00 and 12:00.",
	},
	{
		title: "Common room movie night",
		meta: "Resident board • Wednesday",
		body: "A social event post is a good example of non-urgent communication this page can hold.",
	},
	{
		title: "Elevator maintenance",
		meta: "Housing office • Friday",
		body: "The main elevator will be inspected between 09:00 and 11:00.",
	},
]

export default function AnnouncementsPage() {
	return (
		<AppShell
			title="Announcements"
			description="This page will be a housing notice board - maintenance, events, etc. "
		>
			<VStack align="stretch" gap={4}>
				{announcements.map((announcement) => (
					<Box
						key={announcement.title}
						bg="white"
						border="1px solid #dce5df"
						borderRadius="22px"
						p={5}
					>
						<HStack
							justify="space-between"
							align="flex-start"
							mb={3}
							gap={4}
						>
							<Box>
								<Heading size="md">
									{announcement.title}
								</Heading>
								<Text mt={2} color="#6a7a71">
									{announcement.meta}
								</Text>
							</Box>
						</HStack>
						<Text color="#506057">{announcement.body}</Text>
					</Box>
				))}
			</VStack>
		</AppShell>
	)
}

export const Component = AnnouncementsPage
