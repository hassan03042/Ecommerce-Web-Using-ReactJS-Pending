function Card({ item, addToCart }) {
  const { id, category, images, description, title, price } = item;

  // Skip rendering if the ID is 6
  if (id === 6) {
    return null;
  }

  // // Define a style for the specific image ID
  // const imageStyle = id === 6 ? "h-64" : "h-50";

  return (
    <div className="p-4 md:w-1/3">
      <div className="flex flex-col h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <img
          className={`w-full object-cover object-center bg-gray-400`}
          src={`${images[0]}`}
          alt="blog"
        />
        <div className="flex flex-col p-6 flex-grow">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            {category.name}
          </h2>
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {title}
          </h1>
          <p className="leading-relaxed mb-3 flex-grow">
            {description}
          </p>
          <div 
          onClick={addToCart}
          className="flex items-center flex-wrap mt-auto cursor-pointer">
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
              Add To Cart
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
