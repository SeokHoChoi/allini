import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

interface Tab {
  path: string;
  label: string;
}

interface TabComponentProps {
  tabs: Tab[];
}

const TabComponent = ({ tabs }: TabComponentProps) => {
  return (
    <div className={clsx(styles.tabArea)}>
      <nav role="tablist" aria-label="Sample Tabs">
        <ul className={clsx(styles.tabWrapper)}>
          {tabs.map((tab) => (
            <li key={tab.path} role="presentation">
              <NavLink
                to={tab.path}
                role="tab"
                className={({ isActive }) =>
                  clsx({ [styles.selected]: isActive })
                }
                id={`tab-${tab.path}`}
                aria-controls={`panel-${tab.path}`}
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <article className={clsx(styles.panelArea)}>
        <Outlet />
      </article>
    </div>
  );
};

export default TabComponent;
