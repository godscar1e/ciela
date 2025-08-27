'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' 
import { visionTool } from '@sanity/vision'

import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schemaTypes'
import { deskStructure } from './src/sanity/structureConfig'

export default defineConfig({
	basePath: '/studio',
	projectId,
	dataset,
	schema,
	plugins: [
		structureTool({ structure: deskStructure }), // <-- Updated to structureTool
		visionTool({ defaultApiVersion: apiVersion }),
	],
})
