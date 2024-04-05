import { Categories } from "../../components/Categories/Categories";
import Navbar from "../../components/Navbar/Navbar";
import Typewriter from "typewriter-effect";

const About = () => {
  // قائمة بأسماء الطلاب وصورهم
  const students = [
    { name: "زياد", image: "/zeyad.jpg", jobTitle: "Frontend Dev" },
    { name: "امنية", image: "/woman.jpg", jobTitle: "Frontend Dev" },
    { name: "اسراء", image: "/woman.jpg", jobTitle: "DashBoard Dev" },
    { name: "محمد", image: "/mohamed.png", jobTitle: "Backend Dev" },
    { name: "ياسمين", image: "/woman.jpg", jobTitle: "Backend Dev" },
    { name: "اشرقت", image: "/woman.jpg", jobTitle: "Database Dev" },
  ];

  return (
    <>
      <Navbar />
      <Categories />
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-semibold mb-6 w-fit border-sky-900 p-2 border-b-2">
       
          معلومات عنا
        </h1>
        <p className="text-lg mb-8 bg-zinc-900 text-zinc-200 p-3 min-h-36">
          ` نحن مجموعة من الطلاب الطموحين الذين ينغمسون في رحلة التعلم ويستعدون
          لخوض تحدي التخرج بفخر وتفانٍ قمنا بتطوير هذا المتجر الإلكتروني كجزء
          أساسي من مشروع تخرجنا. نعكس في هذا المشروع قيم الابتكار والتطوير ونسعى
          جاهدين لتقديم تجربة تسوق فريدة ومميزة لعملائنا. بالإضافة إلى مهامنا
          الأكاديمية، نحرص على التطوير المهني والشخصي، حيث نجمع بين المعرفة
          والمهارات لنصبح قادة مبتكرين في مجالاتنا المختلفة. بتعزيز قيم الإبداع
          والتعاون، ونسعى جاهدين لتقديم تجربة تسوق فريدة ومميزة لعملائنا.
          بالإضافة إلى مهامنا الأكاديمية، نحرص على التطوير المهني والشخصي، حيث
          نجمع بين المعرفة والمهارات لنصبح قادة مبتكرين في مجالاتنا المختلفة.
          بتعزيز قيم الإبداع والتعاون، نسعى جاهدين لتحقيق النجاح بروح الفريق
          والتميز الشخصي.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {students.map((student, index) => (
            <div key={index} className="flex flex-col items-center ">
              <img
                src={student.image}
                alt={student.name}
                className="w-44 h-44 rounded-full mb-2 border-2 border-blue-700 shadow-2xl duration-300  "
              />
              <p className="text-lg font-semibold">{student.name}</p>
              <p className="text-sm">{student.jobTitle}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
