// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Homepage documents */
interface HomepageDocumentData {
  /**
   * text field in *Homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  text: prismic.RichTextField;
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices2[]
   * - **Tab**: Hero Grid
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices2: prismic.SliceZone<HomepageDocumentDataSlices2Slice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = TopBarSlice;
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlices2Slice = ImageTileSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;
/** Content for Navigation documents */
interface NavigationDocumentData {
  /**
   * Nav item field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  nav_item: prismic.GroupField<Simplify<NavigationDocumentDataNavItemItem>>;
}
/**
 * Item in Navigation → Nav item
 *
 */
export interface NavigationDocumentDataNavItemItem {
  /**
   * label field in *Navigation → Nav item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_item[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * href field in *Navigation → Nav item*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.nav_item[].href
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  href: prismic.LinkField;
}
/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<NavigationDocumentData>,
    "navigation",
    Lang
  >;
/** Content for Page documents */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Page → Slice Zone*
 *
 */
type PageDocumentDataSlicesSlice = EmbedSlice;
/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;
/** Content for settings documents */
interface SettingsDocumentData {
  /**
   * Donate Link field in *settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.donate_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  donate_link: prismic.LinkField;
  /**
   * Enable Top Bar field in *settings*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: settings.enable_top_bar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/boolean
   *
   */
  enable_top_bar: prismic.BooleanField;
  /**
   * Top Bar field in *settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_bar[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/group
   *
   */
  top_bar: prismic.GroupField<Simplify<SettingsDocumentDataTopBarItem>>;
}
/**
 * Item in settings → Top Bar
 *
 */
export interface SettingsDocumentDataTopBarItem {
  /**
   * Label field in *settings → Top Bar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_bar[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * Button Text field in *settings → Top Bar*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_bar[].button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_text: prismic.KeyTextField;
  /**
   * Link field in *settings → Top Bar*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.top_bar[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;
export type AllDocumentTypes =
  | HomepageDocument
  | NavigationDocument
  | PageDocument
  | SettingsDocument;
/**
 * Primary content in Embed → Primary
 *
 */
interface EmbedSliceDefaultPrimary {
  /**
   * Embed_link field in *Embed → Primary*
   *
   * - **Field Type**: Embed
   * - **Placeholder**: *None*
   * - **API ID Path**: embed.primary.embed_link
   * - **Documentation**: https://prismic.io/docs/core-concepts/embed
   *
   */
  embed_link: prismic.EmbedField;
}
/**
 * Default variation for Embed Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<EmbedSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Embed*
 *
 */
type EmbedSliceVariation = EmbedSliceDefault;
/**
 * Embed Shared Slice
 *
 * - **API ID**: `embed`
 * - **Description**: `Embed`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type EmbedSlice = prismic.SharedSlice<"embed", EmbedSliceVariation>;
/**
 * Item in ImageTile → Items
 *
 */
export interface ImageTileSliceDefaultItem {
  /**
   * cover field in *ImageTile → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: image_tile.items[].cover
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  cover: prismic.ImageField<never>;
  /**
   * label field in *ImageTile → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: image_tile.items[].label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * link field in *ImageTile → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: image_tile.items[].link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for ImageTile Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTileSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<ImageTileSliceDefaultItem>
>;
/**
 * Slice variation for *ImageTile*
 *
 */
type ImageTileSliceVariation = ImageTileSliceDefault;
/**
 * ImageTile Shared Slice
 *
 * - **API ID**: `image_tile`
 * - **Description**: `ImageTile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImageTileSlice = prismic.SharedSlice<
  "image_tile",
  ImageTileSliceVariation
>;
/**
 * Primary content in TopBar → Primary
 *
 */
interface TopBarSliceDefaultPrimary {
  /**
   * Label field in *TopBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_bar.primary.label
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  label: prismic.KeyTextField;
  /**
   * Button Text field in *TopBar → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: top_bar.primary.button_text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button_text: prismic.KeyTextField;
  /**
   * Link field in *TopBar → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: top_bar.primary.link
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  link: prismic.LinkField;
}
/**
 * Default variation for TopBar Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopBarSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<TopBarSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *TopBar*
 *
 */
type TopBarSliceVariation = TopBarSliceDefault;
/**
 * TopBar Shared Slice
 *
 * - **API ID**: `top_bar`
 * - **Description**: `TopBar`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TopBarSlice = prismic.SharedSlice<"top_bar", TopBarSliceVariation>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      HomepageDocumentDataSlices2Slice,
      HomepageDocument,
      NavigationDocumentData,
      NavigationDocumentDataNavItemItem,
      NavigationDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PageDocument,
      SettingsDocumentData,
      SettingsDocumentDataTopBarItem,
      SettingsDocument,
      AllDocumentTypes,
      EmbedSliceDefaultPrimary,
      EmbedSliceDefault,
      EmbedSliceVariation,
      EmbedSlice,
      ImageTileSliceDefaultItem,
      ImageTileSliceDefault,
      ImageTileSliceVariation,
      ImageTileSlice,
      TopBarSliceDefaultPrimary,
      TopBarSliceDefault,
      TopBarSliceVariation,
      TopBarSlice,
    };
  }
}
