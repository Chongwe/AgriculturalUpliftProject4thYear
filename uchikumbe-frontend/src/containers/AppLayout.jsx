import React from "react";
import Test from "../utils/Test"
import SideBar from "../components/Sidebar"
import SignUp from "../utils/SignUp"

const AppLayout = () => {
  return (
    <div className="p-4 flex">
      
      <div className="flex-grow bg-gray-100">

        <Test/>
        <div className="p-4">
          <h1 className="text-lg font-semibold">Cards</h1>
          <p>olor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi</p>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">Cards</h1>
          <p>olor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi</p>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">Cards</h1>
          <p>olor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi</p>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-semibold">Cards</h1>
          <p>olor, sit amet consectetur adipisicing elit. 
            Odio, dicta rerum exercitationem, nostrum deleniti quis nesciunt ratione delectus 
            tenetur molestias velit inventore maxime, voluptatum error cum ex voluptates assumenda 
            quae. section goes Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis eveniet dolore est
             unde magni similique delectus! Voluptatem odio rerum autem porro id quasi repudiandae? Maiores
              excepturi optio et hic commodi</p>
        </div>

      </div>
      <SideBar/>
      
     
    </div>
  );
};

export default AppLayout;
