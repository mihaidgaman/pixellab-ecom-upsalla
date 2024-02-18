export const ContactForm = () => {
  return (
    <form className="my-7 lg:w-3/6">
      <fieldset className="flex flex-col items-center justify-center lg:items-start lg:justify-start gap-4">
        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="border border-black p-2 lg:w-3/6"
          ></input>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="border border-black p-2 lg:w-3/6"
          ></input>
        </div>

        <input
          type="text"
          name="title"
          id="title"
          placeholder="Your Title"
          className="border border-black p-2 w-full"
        ></input>

        <textarea
          name="comment"
          id="comment"
          cols="30"
          rows="5"
          placeholder="Your comment"
          className="border border-black p-2 w-full"
        ></textarea>

        <button
          type="submit"
          name="submit"
          id="submit"
          title="Send"
          className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-600 transition-colors p-2"
        >
          Send
        </button>
      </fieldset>
    </form>
  );
};
