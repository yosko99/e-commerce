interface ISubcategory {
  id: string;
  image: string;
  name: string;
  page_description: string;
  page_title: string;
  parent_category_id: string;
  c_showInMenu: boolean;
  categories?: ISubcategory[];
}

export default ISubcategory;
