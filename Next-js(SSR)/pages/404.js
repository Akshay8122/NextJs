//404 cusotm error page
import Image from "next/image";
import me from "../public/404.webp";
import styles from "../pages/styles.module.css";
function PageNotFound() {
  return (
    <div>
      <Image
        src={me}
        alt="404 image"
        height={850}
        width={1800}
        className={styles.notfound}
      />
    </div>
  );
}

export default PageNotFound;
