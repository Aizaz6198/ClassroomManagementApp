'use client'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  const handlePrinci = () => {
    router.push('/login/principal');
  };
  
  const handleTeacher = () => {
    router.push('/login/teacher');
  };
  
  const handleStudent = () => {
    router.push('/login/student');
  };

  return (
    <div className='bg-gray-100 h-screen flex-col text-black'>
      <div className='flex flex-col'>
        <div className='flex justify-center text-8xl mt-32 text-blue-700'>Classroom</div>
        <div className='flex justify-center md:text-3xl mt-10 text-center text-2xl text-gray-700'>
          Now management becomes super easy.
        </div>
        <div className='flex justify-center mt-12 md:gap-10 gap-3'>
          <button
            className='md:py-3 md:px-8 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white md:text-3xl'
            onClick={handlePrinci}
          >
            Principal login
          </button>
          <button
            className='md:py-3 md:px-8 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white md:text-3xl'
            onClick={handleTeacher}
          >
            Teacher login
          </button>
          <button
            className='md:py-3 md:px-8 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white md:text-3xl'
            onClick={handleStudent}
          >
            Student login
          </button>
        </div>
      </div>
    </div>
  );
}
