interface AttributeValue {
  orderable: boolean;
  name: string;
  value: string;
}

interface IVariationAttribute {
  values: AttributeValue[];
  id: string;
  name: string;
}

export default IVariationAttribute;
