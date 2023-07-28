import IImageGroup from './IImageGroup';
import IVariationAttribute from './IVariationAttribute';

interface Master {
  orderable: boolean;
  price: number;
  master_id: string;
}

interface Variant {
  variation_values: {
    color?: string;
    size?: string;
    width?: string;
    accessorySize?: string;
  };
  price: number;
  product_id: string;
  orderable: boolean;
}

interface IProduct {
  _id: { $oid: string };
  price_max?: number;
  c_tabDescription?: string;
  c_isNewtest?: boolean;
  c_isNew?: boolean;
  c_tabDetails?: string;
  c_styleNumber?: string;
  page_keywords?: string;
  page_description?: string;
  page_title?: string;
  name: string;
  price: number;
  variation_attributes?: IVariationAttribute[];
  id: string;
  currency: string;
  master?: Master;
  primary_category_id: string;
  image_groups: IImageGroup[];
  short_description: string;
  orderable: boolean;
  variants?: Variant[];
  type?: { master?: boolean; item?: boolean; option?: boolean; set?: boolean };
  long_description: string;
  c_isSale?: boolean;
}

export default IProduct;
