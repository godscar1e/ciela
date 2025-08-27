import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'template',
  title: 'Template',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title', maxLength: 80},
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'category',
      type: 'string',
      options: {
        list: ['Web', 'Mobile', 'Presentations', 'UI Kits'],
      },
    }),
    defineField({
      name: 'price',
      type: 'number',
    }),
    defineField({
      name: 'demoUrl',
      type: 'url',
    }),
    defineField({
      name: 'buyUrl',
      type: 'url',
    }),
    defineField({
      name: 'highlightWord',
      type: 'string',
      description: 'Слово в заголовке, которое подсветим фиолетовым',
    }),
  ],
})
