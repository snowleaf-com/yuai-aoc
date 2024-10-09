import styles from "@/components/organisms/Details/Pankuzu/Pankuzu.module.css";
import Link from "next/link";
import { FaCaretRight, FaHome } from "react-icons/fa";

interface Pankuzu {
  url: string;
  name: string;
}
interface Props {
  breadcrumbs: Pankuzu[];
}

const Pankuzu: React.FC<Props> = ({ breadcrumbs }) => {
  return (
    <div className={styles.pankuzu}>
      <ul>
        <li className={styles.breadcrumbItem}>
          <FaHome className={styles.homeIcon} />
          <Link href="../">HOME</Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <FaCaretRight className={styles.arrowIcon} />
            <Link href={breadcrumb.url}>{breadcrumb.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pankuzu;
