import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBenefits extends Struct.ComponentSchema {
  collectionName: 'components_blocks_benefits';
  info: {
    description: '';
    displayName: 'Benefits';
    icon: 'check';
  };
  attributes: {
    benefitCard: Schema.Attribute.Component<'elements.benefit-card', true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface BlocksContact extends Struct.ComponentSchema {
  collectionName: 'components_blocks_contacts';
  info: {
    displayName: 'Contact';
    icon: 'phone';
  };
  attributes: {
    description: Schema.Attribute.String;
    form: Schema.Attribute.Component<'elements.form', false>;
    heading: Schema.Attribute.String;
  };
}

export interface BlocksFaq extends Struct.ComponentSchema {
  collectionName: 'components_blocks_faqs';
  info: {
    description: '';
    displayName: 'FAQ';
    icon: 'question';
  };
  attributes: {
    description: Schema.Attribute.String;
    linkButton: Schema.Attribute.Component<'elements.button-link', false>;
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'grid';
  };
  attributes: {
    heading: Schema.Attribute.String;
    images: Schema.Attribute.Media<'images', true> & Schema.Attribute.Required;
    linkPrimary: Schema.Attribute.Component<'elements.button-link', false>;
    linkSecondary: Schema.Attribute.Component<'elements.button-link', false>;
    sectionId: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksMap extends Struct.ComponentSchema {
  collectionName: 'components_blocks_maps';
  info: {
    description: '';
    displayName: 'Map';
    icon: 'pinMap';
  };
  attributes: {
    Content: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    location: Schema.Attribute.String;
    phoneNumber: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlocksNews extends Struct.ComponentSchema {
  collectionName: 'components_blocks_news';
  info: {
    displayName: 'News';
    icon: 'layer';
  };
  attributes: {
    heading: Schema.Attribute.String;
    sectionId: Schema.Attribute.String;
  };
}

export interface BlocksOverview extends Struct.ComponentSchema {
  collectionName: 'components_blocks_overviews';
  info: {
    description: '';
    displayName: 'Overview';
    icon: 'layout';
  };
  attributes: {
    row: Schema.Attribute.Component<'elements.overview-row', true>;
    sectionId: Schema.Attribute.String;
  };
}

export interface BlocksPricing extends Struct.ComponentSchema {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    Description: Schema.Attribute.String;
    Name: Schema.Attribute.String;
  };
}

export interface BlocksSponsors extends Struct.ComponentSchema {
  collectionName: 'components_blocks_sponsors';
  info: {
    displayName: 'Sponsors';
    icon: 'shoppingCart';
  };
  attributes: {
    sectionId: Schema.Attribute.String;
    sponsors: Schema.Attribute.Relation<'oneToMany', 'api::sponsor.sponsor'>;
  };
}

export interface ElementsBenefitCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_benefit_cards';
  info: {
    description: '';
    displayName: 'Benefit Card';
    icon: 'magic';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    description: '';
    displayName: 'Button Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['default', 'secondary', 'outline']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
    icon: 'cube';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    Heading: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    button: Schema.Attribute.Component<'elements.button-link', false>;
    description: Schema.Attribute.String;
    header: Schema.Attribute.String;
    input: Schema.Attribute.Component<'elements.input', true>;
  };
}

export interface ElementsInput extends Struct.ComponentSchema {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    inputType: Schema.Attribute.String;
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
  };
}

export interface ElementsNewsRedirectButton extends Struct.ComponentSchema {
  collectionName: 'components_elements_news_redirect_buttons';
  info: {
    displayName: 'News Redirect Button';
  };
  attributes: {
    name: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsOverviewRow extends Struct.ComponentSchema {
  collectionName: 'components_elements_overview_rows';
  info: {
    description: '';
    displayName: 'Overview Row';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 220;
        minLength: 150;
      }>;
    metaImage: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'shared.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UtilityLesson extends Struct.ComponentSchema {
  collectionName: 'components_utility_lessons';
  info: {
    displayName: 'Lesson';
    icon: 'clock';
  };
  attributes: {
    endDate: Schema.Attribute.Time;
    startDate: Schema.Attribute.Time;
  };
}

export interface UtilityStringArray extends Struct.ComponentSchema {
  collectionName: 'components_utility_string_arrays';
  info: {
    displayName: 'String Array';
    icon: 'archive';
  };
  attributes: {
    value: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
      'elements.news-redirect-button': ElementsNewsRedirectButton;
      'elements.overview-row': ElementsOverviewRow;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
      'utility.lesson': UtilityLesson;
      'utility.string-array': UtilityStringArray;
    }
  }
}
