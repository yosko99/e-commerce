interface IImage {
  alt: string;
  link: string;
  title: string;
}

interface IImageGroup {
  images: IImage[];
  view_type: string;
  variation_value?: string;
}

export default IImageGroup;
