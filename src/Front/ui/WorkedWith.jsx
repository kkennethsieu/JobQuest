function WorkedWith() {
  return (
    <section className="flex flex-col items-center space-y-6 px-4 sm:px-8 py-10 bg-stone-50 dark:bg-gray-800">
      <p className="text-xl text-center max-w-3xl mx-auto">
        Join a global community of millions who use Track My Job to stay
        organized and achieve more.
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-wrap justify-center gap-8">
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/facebook_logo.png"
        />
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/instagram_logo.png"
        />
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/youtube_logo.png"
        />
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/twitter_logo.png"
        />
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/linkedin_logo.png"
        />
        <img
          className="w-16 h-16 hover:opacity-75 transition-opacity"
          src="social/pinterest_logo.png"
        />
      </div>
    </section>
  );
}

export default WorkedWith;
