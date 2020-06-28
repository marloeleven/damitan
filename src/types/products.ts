export interface IItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image_1: string;
  image_1_title: string;
  image_2: string;
  image_2_title: string;
  image_3: string;
  image_3_title: string;
  tags: string;
  disable: number;
}

export type IList = IItem[];
