import React from "react";
import clsx from "clsx";

import styles from "./GNB.module.css";

const GNB: React.FC = () => {
  return (
    <section className="px-6 flex items-center justify-between">
      <span
        className={clsx(styles.siteName, "inline-block hover:cursor-pointer")}
      >
        Kreativ
      </span>
      <ul className="flex items-center justify-between">
        <li className="not-italic font-bold text-base flex-none order-1 grow-0 mr-6 hover:cursor-pointer">
          Home
        </li>
        <li className="not-italic font-bold text-base flex-none order-1 grow-0 hover:cursor-pointer">
          Contact
        </li>
      </ul>
    </section>
  );
};

export default GNB;
