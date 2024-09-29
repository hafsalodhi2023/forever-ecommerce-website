const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-3xl font-semibold text-gray-800">
        Subscribe Now & Get 20% Off
      </p>
      <p className="mt-3 text-lg font-light text-gray-700">
        Subscribe now for 20% off your first purchase! Stay updated on the
        latest trends and exclusive offers.
      </p>
      <form
        className="flex items-center w-full gap-3 pl-3 m-auto my-6 border sm:w-1/2"
        action=""
        onSubmit={onSubmitHandler}
      >
        <input
          type="email"
          className="w-full outline-none sm:flex-1"
          placeholder="Enter your email"
          required
        />
        <button
          type="submit"
          className="px-10 py-4 text-xs text-white bg-black"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
