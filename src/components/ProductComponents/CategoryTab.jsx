

const CategoryTab = (props) => {
  return (
      <a
          title={props.item?.attributes?.title}
          className={
              props.item?.attributes?.title.toLowerCase() === props.active
                  ? "active"
                  : ""
          }
      >
          {props.item?.attributes?.title}
      </a>
  );
}

export default CategoryTab