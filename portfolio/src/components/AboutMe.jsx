
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMailBulk, faFaceSmile, faListCheck, faCode } from '@fortawesome/free-solid-svg-icons';

function AboutMe() {
  return (
    <div className="bg-white px-8 pt-8">
       <div className="">
         <h2 className="text-3xl font-bold mb-3 text-center">About <span className='text-purple-500'>Me</span></h2>
         <p className="text-gray-500 font-semibold pb-4 text-center">
          Discover my journey, passion and the story behind behind my work.
         </p>
         </div>

         <div className='flex bg-gray-100 rounded-lg p-6'>
            <img src="Kemboi.png" alt="Kemboi" className='w-80 h-80 rounded-md' />
            <div className='flex flex-col justify-center ml-8'>
            <div className='flex p-4'>
                <div className='flex flex-col justify-start'>
                  <div
                    className='flex items-center'>
                    <FontAwesomeIcon icon={faFaceSmile} className='p-1.5 text-l' />
                     <h3 className="text-2xl font-semibold mt-8 mb-4">Bio</h3>
                  </div>
                 <p className="text-gray-600">
                     I'm a Full Stack Developer with a passion for crafting intuitive and engaging web applications. My journey in tech has been fueled by curiosity and a desire to create impactful solutions.
                 </p>
                </div>
                <div className='flex flex-col justify-start ml-8'>
                <div
                  className='flex items-center'>
                    <FontAwesomeIcon icon={faListCheck} className='p-1.5 text-l' />
                 <h3 className="text-2xl font-semibold mt-8 mb-4">Hobbies</h3>
                 </div>
                 <p className="text-gray-600">
                     Enjoy playing video games, i.e FIFA & Call of Duty , reading novels, and exploring the outdoors. I believe in maintaining a balance between work and play to keep my creativity flowing.
                 </p>
                </div>
                <div className='flex flex-col justify-start ml-8'>
                <div
                  className='flex items-center'>
                    <FontAwesomeIcon icon={faCode} className='p-1.5 text-l' />
                    <h3 className="text-2xl font-semibold mt-8 mb-4">Languages</h3>
                 </div>
                 <p className="text-gray-600">
                     Fluent in English and Kiswahili. Also i don't mind learning any other new language to enhance my communication skills and connect with a wider audience.
                 </p>
                </div>
            </div>
            <div className='flex p-4'>
                <div>
                    <div 
                      className='flex'><FontAwesomeIcon icon={faMailBulk} className='p-1.5 text-l'></FontAwesomeIcon>
                      <h3 className="text-2xl font-semibold mb-4">Contact
                      </h3>
                    </div>
                    <p className="text-gray-600">
                        Email:felixkemboi824@gmail.com<br/>
                        Phone : +254 759306105
                        Whatsapp: +254 759306105
                    </p>
                </div>
                <div className='pl-32'>
                    <div
                      className='flex'><FontAwesomeIcon icon={faCode} className='p-1.5 text-l'></FontAwesomeIcon>
                      <h3 className="text-2xl font-semibold mb-4">Location</h3>
                    </div>
                    <p className="text-gray-600">
                        Based in Nairobi, Kenya. Open to remote work opportunities and collaborations with teams around the world.
                    </p>
                </div>
                <div className='pl-16'>
                    <div
                    className='flex'><FontAwesomeIcon icon={faFaceSmile} className='p-1.5 text-l'></FontAwesomeIcon>
                    <h3 className="text-2xl font-semibold mb-4">Education Summary</h3>
                    </div>
                    <p className="text-gray-600">
                        Graduated from a Full-Stack BootCamp, Moringa School. Pursuing Software Engineering at JKUAT University.
                    </p>
                </div>
            </div>
            <div className='flex pt-4 gap-x-6'>
                <p className='font-semibold'>Follow me on:</p>
                <div className='flex text-2xl space-x-4 ml-2'>
                    <FontAwesomeIcon icon={faGithub} className="text-black p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
                    <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500 px-2 py-1.5 bg-gray-100 border-transparent border rounded-full hover:text-gray-600" />
                    <FontAwesomeIcon icon={faInstagram} className="text-pink-600  p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
                    <FontAwesomeIcon icon={faXTwitter} className="text-black p-1.5 bg-gray-100 border border-transparent rounded-full hover:text-gray-600" />
                </div>
                <div className='flex space-x-4'>
                 <button className='bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600'>Download CV</button>
                 <button className=' text-black font-semibold px-4 py-2 border-2 rounded-xl hover:bg-gray-300'>Contact Me</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default AboutMe;
