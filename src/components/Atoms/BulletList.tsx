import bulletStyles from "@app/styles/BulletList.module.css";
import {
  Children,
  Fragment,
  HTMLAttributes,
  PropsWithChildren,
  ReactComponentElement,
  ReactHTMLElement,
} from "react";

type BulletListChild =
  | ReactComponentElement<typeof BulletPoint>
  | ReactHTMLElement<HTMLLIElement>;

type BulletListProps = {
  children?: BulletListChild[] | BulletListChild;
};

const isBulletPoint = (
  child: BulletListChild
): child is ReactComponentElement<typeof BulletPoint> => {
  return "displayName" in child && child.displayName === "BulletPoint";
};

const BulletList: React.FC<BulletListProps> = ({ children = [] }) => {
  const transformedChildren = Children.map(children, (child, index) => (
    //index as key is fine for SSG-rendered non-interactive lists
    <Fragment key={index}>
      {isBulletPoint(child) ? (
        child
      ) : (
        <BulletPoint {...child.props} key={index}>
          {child.props.children}
        </BulletPoint>
      )}
    </Fragment>
  ));

  return <ul className={bulletStyles.bullets}>{transformedChildren}</ul>;
};

type BulletPointProps = PropsWithChildren<
  JSX.IntrinsicAttributes & HTMLAttributes<HTMLLIElement>
>;

export const BulletPoint = ({ children, ...props }: BulletPointProps) => {
  return (
    <li className={bulletStyles.bullet} {...props}>
      {children}
    </li>
  );
};

export const BulletLessBullet = ({ children, ...props }: BulletPointProps) => {
  return (
    <li className={bulletStyles.noBullet} {...props}>
      {children}
    </li>
  );
};

export default BulletList;
