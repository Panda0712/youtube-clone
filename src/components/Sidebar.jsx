import { categories } from "../utils/constants";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <ul className="sidebar">
      {categories.map((category) => (
        <li
          key={category.name}
          className={`${selectedCategory === category.name ? "active" : ""}`}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span dangerouslySetInnerHTML={{ __html: category.icon }} />
          <p>{category.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default Sidebar;
