

const ShowcaseCard = ({item}) => {
  return (
      <figure className="swiper-slide">
          <img
              src={item.attributes?.image?.data?.attributes?.url}
              alt={item.attributes?.title}
              loading="lazy"
          />
      </figure>
  );
}

export default ShowcaseCard