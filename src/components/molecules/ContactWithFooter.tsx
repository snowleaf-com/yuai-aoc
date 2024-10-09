import styles from "./ContactWithFooter.module.css";
import SectionNormal from "./SectionNormal";

type ContactWithFooterProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
};

const ContactWithFooter: React.FC<ContactWithFooterProps> = ({
  title,
  subtitle,
  children,
  className = "",
  inView = false
}) => {
  return (
    <div className={`${styles.contactWithFooter} ${className}`}>
      <SectionNormal title={title} subtitle={subtitle} inView={inView}>
        {children}
      </SectionNormal>
    </div>
  );
};

export default ContactWithFooter;
