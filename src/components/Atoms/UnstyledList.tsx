import styles from "@app/styles/UnstyledList.module.css";
import { HTMLAttributes } from "react";

type ListType = "ul" | "ol";

type UnstyledListProps<T extends ListType = "ul"> = {
  listType: T;
} & (T extends "ol"
  ? HTMLAttributes<HTMLElementTagNameMap["ol"]>
  : HTMLAttributes<HTMLElementTagNameMap["ul"]>);

const UnstyledList = <T extends ListType>({
  listType,
  children,
  ...props
}: UnstyledListProps<T>) => {
  const Tag = listType as ListType;
  return (
    <Tag className={styles.unstyledList} {...props}>
      {children}
    </Tag>
  );
};

export default UnstyledList;
