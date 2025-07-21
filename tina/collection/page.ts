import type { Collection, Template } from 'tinacms';
import { heroBlockSchema } from '@/components/blocks/hero';
import { contentBlockSchema } from '@/components/blocks/content';
import { testimonialBlockSchema } from '@/components/blocks/testimonial';
import { featureBlockSchema } from '@/components/blocks/features';
import { videoBlockSchema } from '@/components/blocks/video';
import { calloutBlockSchema } from '@/components/blocks/callout';
import { statsBlockSchema } from '@/components/blocks/stats';
import { ctaBlockSchema } from '@/components/blocks/call-to-action';

export const layoutBlockSchema: Template = {
  name: 'columLayout',
  label: 'Column Layout',
  ui: {
    previewSrc: '/blocks/hero.png',
  },
  fields: [
    {
      type: 'object',
      label: 'Components',
      name: 'components',
      list: true,
      ui: {
        visualSelector: true,
      },
      templates: [
        {
          name: 'featureCard',
          label: 'Feature Card',
          ui: {
            previewSrc: '/blocks/hero.png',
          },
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'string',
            }
          ],
        },
        {
          name: 'productCard',
          label: 'Product Card',
          ui: {
            previewSrc: '/blocks/hero.png',
          },
          fields: [
            {
              name: 'title',
              label: 'Title',
              type: 'string',
            },
            {
              name: 'subtitle',
              label: 'Subtitle',
              type: 'string',
            }
          ],
        }
      ],
    },
    {
      type: 'string',
      label: 'Background',
      name: 'background',
    },
  ],
};

const Page: Collection = {
  label: 'Pages',
  name: 'page',
  path: 'content/pages',
  format: 'mdx',
  ui: {
    router: ({ document }) => {
      const filepath = document._sys.breadcrumbs.join('/');
      if (filepath === 'home') {
        return '/';
      }
      return `/${filepath}`;
    },
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: [
        heroBlockSchema,
        calloutBlockSchema,
        featureBlockSchema,
        statsBlockSchema,
        ctaBlockSchema,
        contentBlockSchema,
        testimonialBlockSchema,
        videoBlockSchema,
        layoutBlockSchema,
      ],
    },
  ],
};

export default Page;
