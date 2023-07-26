import ISubcategory from './ISubcategory';

interface ICategory {
  _id: {
    $oid: string;
  };
  categories: ISubcategory[];
  id: string;
  name: string;
  page_description: string;
  page_title: string;
  parent_category_id: string;
  c_showInMenu: boolean;
}

export default ICategory;
