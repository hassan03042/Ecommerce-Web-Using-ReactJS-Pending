function Card({
  item,
  addToCart,
  isAddedToCart,
  showRemoveFromCart,
  removeFromCart,
}) {
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
          className={`w-full object-cover object-center bg-gray-300`}
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
          <p className="leading-relaxed mb-3 flex-grow">{description}</p>
          <div
            onClick={addToCart}
            className="flex items-center flex-wrap mt-auto cursor-pointer"
          >
            <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-center">
              {isAddedToCart ? "Added" : " Add To Cart"}
            </a>

            {showRemoveFromCart && (
              <div
                onClick={removeFromCart}
                className="flex items-center flex-wrap mt-auto cursor-pointer"
              >
                <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 mx-20 text-center">
                  {"Remove From Cart"}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
