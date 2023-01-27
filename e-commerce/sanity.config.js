import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import product from './schemas/product'
import banner from './schemas/banner'
import footer from './schemas/footer'

export default defineConfig({
  name: 'default',
  title: 'e-commerce',

  projectId: 'bj0g7ogq',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes.concat([product, banner, footer]),
  },
})
