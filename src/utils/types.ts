export type Category = {
  id: number;
  name: string;
  level: number;
  parentId: number | null;
  position: number;
  imagePath: string | null;
};
export interface CategoryItemProps {
  item: Category;
  onPress: (id: number, parentId: number) => void;
}
export interface FilterBoxProps {
  title?: string;
  onPress: () => void;
  enable: boolean;
}
