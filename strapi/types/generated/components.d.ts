import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksBenefits extends Schema.Component {
  collectionName: 'components_blocks_benefits';
  info: {
    displayName: 'Benefits';
    icon: 'check';
    description: '';
  };
  attributes: {
    sectionId: Attribute.String;
    benefitCard: Attribute.Component<'elements.benefit-card', true>;
  };
}

export interface BlocksContact extends Schema.Component {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.String;
    form: Attribute.Component<'elements.form'>;
  };
}

export interface BlocksFaq extends Schema.Component {
  collectionName: 'components_blocks_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'question';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.String;
    questions: Attribute.Relation<
      'blocks.faq',
      'oneToMany',
      'api::question.question'
    >;
    linkButton: Attribute.Component<'elements.button-link'>;
    sectionId: Attribute.String;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    icon: 'grid';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    linkPrimary: Attribute.Component<'elements.button-link'>;
    images: Attribute.Media & Attribute.Required;
    sectionId: Attribute.String;
    linkSecondary: Attribute.Component<'elements.button-link'>;
  };
}

export interface BlocksMap extends Schema.Component {
  collectionName: 'components_blocks_maps';
  info: {
    displayName: 'Map';
    icon: 'pinMap';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Content: Attribute.Text;
    phoneNumber: Attribute.String;
    email: Attribute.Email;
    location: Attribute.String;
    sectionId: Attribute.String;
  };
}

export interface BlocksNews extends Schema.Component {
  collectionName: 'components_blocks_news';
  info: {
    displayName: 'News';
    icon: 'layer';
  };
  attributes: {
    sectionId: Attribute.String;
    heading: Attribute.String;
  };
}

export interface BlocksOverview extends Schema.Component {
  collectionName: 'components_blocks_overviews';
  info: {
    displayName: 'Overview';
    icon: 'layout';
    description: '';
  };
  attributes: {
    sectionId: Attribute.String;
    row: Attribute.Component<'elements.overview-row', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    Name: Attribute.String;
    Description: Attribute.String;
  };
}

export interface BlocksSponsors extends Schema.Component {
  collectionName: 'components_blocks_sponsors';
  info: {
    displayName: 'Sponsors';
    icon: 'shoppingCart';
  };
  attributes: {
    sectionId: Attribute.String;
    sponsors: Attribute.Relation<
      'blocks.sponsors',
      'oneToMany',
      'api::sponsor.sponsor'
    >;
  };
}

export interface ElementsBenefitCard extends Schema.Component {
  collectionName: 'components_elements_benefit_cards';
  info: {
    displayName: 'Benefit Card';
    icon: 'magic';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['default', 'secondary', 'outline']> &
      Attribute.DefaultTo<'default'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'cube';
  };
  attributes: {
    Image: Attribute.Media;
    Heading: Attribute.String;
    Description: Attribute.Text;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    header: Attribute.String;
    description: Attribute.String;
    input: Attribute.Component<'elements.input', true>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ElementsOverviewRow extends Schema.Component {
  collectionName: 'components_elements_overview_rows';
  info: {
    displayName: 'Overview Row';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
    subTitle: Attribute.String;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 30;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

export interface UtilityStringArray extends Schema.Component {
  collectionName: 'components_utility_string_arrays';
  info: {
    displayName: 'String Array';
    icon: 'archive';
  };
  attributes: {
    value: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'blocks.benefits': BlocksBenefits;
      'blocks.contact': BlocksContact;
      'blocks.faq': BlocksFaq;
      'blocks.hero': BlocksHero;
      'blocks.map': BlocksMap;
      'blocks.news': BlocksNews;
      'blocks.overview': BlocksOverview;
      'blocks.pricing': BlocksPricing;
      'blocks.sponsors': BlocksSponsors;
      'elements.benefit-card': ElementsBenefitCard;
      'elements.button-link': ElementsButtonLink;
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.input': ElementsInput;
      'elements.overview-row': ElementsOverviewRow;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'utility.string-array': UtilityStringArray;
    }
  }
}
