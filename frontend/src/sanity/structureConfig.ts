import type { StructureResolver } from 'sanity/structure' // <-- Correct for newer versions

export const deskStructure: StructureResolver = S =>
	S.list().title('Content').items(S.documentTypeListItems())
