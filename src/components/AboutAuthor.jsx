const AboutAuthor = () => {
  return (
    <div className="min-h-screen text-grey flex flex-col items-center justify-center p-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
        {/* Author Photo */}
        <div className="w-80 h-80 flex-shrink-0">
          <img
            src="public/textures/profile.jpg"
            alt="Author"
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Author Info */}
        <div className="flex-1">
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores magnam fugiat voluptas dignissimos doloremque, autem laborum laudantium veritatis dolor necessitatibus? Odit perspiciatis nulla id, quisquam minus doloremque soluta libero cumque.
          </p>
          <p className="leading-relaxed mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A maiores asperiores omnis maxime ipsa quo nihil vero iure iste, qui deleniti ratione. Animi enim deleniti, aliquid modi maiores voluptas consequuntur? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus alias enim sunt vero voluptas cupiditate autem doloribus voluptate perspiciatis eius ratione repudiandae minus.
          </p>
          <p className="leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus possimus fugiat quia quisquam dolores modi aperiam iste, adipisci repellendus omnis consequatur alias non animi, et corrupti voluptate libero dolore est!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
