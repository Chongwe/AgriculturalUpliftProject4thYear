import Posts from "./Posts";
const Home= () => {
  return (
    <div className="p-4 gap-2  flex">

      
      <div className="flex-wrap ml-2 justify-center md:ml-20 flex rounded-xl rou bg-green-100">
        
      <Posts/>
      <Posts />
      <Posts />

    

      </div>
      
      {/* Left Section */}
      <div className="flex-shrink-0 w-1/4 w-80 hidden md:block rounded-xl">

       
        <div className="p-4">
          <h1 className="text-lg font-semibold">(Whats new Recommendations)</h1>
          <p>Content for the left Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi! here</p>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">(Whats new Recommendations)</h1>
          <p>Content for the left Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi! here</p>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">(Whats new Recommendations)</h1>
          <p>Content for the left Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi! here</p>
        </div>

      </div>
    </div>
  );
};

export default Home;
