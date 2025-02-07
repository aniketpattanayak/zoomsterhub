import Marquee from "react-fast-marquee";

const FeedbackCard = ({ profilePic, name, username, feedback, date, number }) => {
  return (
    <div className="w-80 p-5 border rounded-xl shadow-lg bg-white min-h-[260px] h-[260px] flex flex-col justify-between transform transition-transform duration-300 ease-in-out  hover:shadow-xl bg-gray-100">
      <div>
        <div className="flex items-center mb-4">
        <img 
  src={profilePic} 
  alt="" 
  className="w-12 h-12 rounded-full border border-gray-300 object-cover"
/>

          <div className="ml-4">
            <p className="font-semibold text-gray-900">
              {name} <span className="text-gray-500 font-normal">@{username}</span>
            </p>
          </div>
        </div>
        <p className="text-gray-700 text-sm flex-grow">{feedback}</p>
      </div>
      <div className="flex justify-between text-xs text-gray-500 mt-4">
        <span>{date}</span>
        <span>#{number}</span>
      </div>
    </div>
  );
};

const FeedbackList = () => {
  const feedbackData = [
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdsCHJQ_ZaQ5gzf89ozMvxF5VqS3MZ35kG9HwYsnDWuDhrpyx9dUaz2upi0Y9VstfilQ&usqp=CAU",
      name: "Sudhir Mehta",
      username: "SudhirM",
      feedback:
        "Professional, efficient, and innovative solutions. Highly recommended for tech needs,Innovative, efficient, and always ahead of technology trends. Highly satisfied.",
      date: "November 2024",
      number: 5,
    },
    {
      profilePic: "https://media.licdn.com/dms/image/v2/D5603AQGN-HSJZjmrvg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1671113249132?e=2147483647&v=beta&t=q0HtYzZv-__CgcpkaGQnABLq2xou-NjKpcSg9gQGu_o",
      name: "Rahul Dubbey",
      username: "RahulD",
      feedback:
        "Exceptional service, quick responses, and top-notch technical expertise always.",
      date: "August 2024",
      number: 34,
    },
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAuwLxKI2EpVNrWOq0SHZBa771oHATgPm5A&s",
      name: "Dr Rima ",
      username: "Rima",
      feedback:
        "Reliable, innovative, and customer-focused. Great results every time,Skilled professionals providing top-tier services with great customer care",
      date: "September 2024",
      number: 23,
    },
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5xaYmOOAocOpiUEkEM_80F64cfl8cOMVtA&s",
      name: "Priyanka Mishra",
      username: "Priya",
      feedback:
        "Highly skilled team delivering excellent solutions with outstanding customer service.",
      date: "August 2024",
      number: 21,
    },
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL0ZCKFOydz2RDnrXAEw_3vrjRtXDmP-mol74GCtBBHU3Js9-2N94sZP81LcvRqBk4q9o&usqp=CAU",
      name: "Surekha Parik",
      username: "Surekha",
      feedback:
        "Efficient, professional, and tailored IT services. Always exceeds expectations.",
      date: "October 2024",
      number: 5,
    },
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7u9UivyWFYljI40wcmP-vhphogh3iw4aLJ3guyxgOXFE9a3iOyPyvj3Vq37MTmp_Th0&usqp=CAU",
      name: "Jane Doe",
      username: "JaneDoe123",
      feedback:
        "Impressive problem-solving skills and quick implementation of solutions.",
      date: "January 2025",
      number: 12,
    },
    {
      profilePic: "https://media.licdn.com/dms/image/v2/D4D03AQGpo_Ema-UXmw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731497318019?e=2147483647&v=beta&t=ZzAkzMAMrg8tqKJ3Ftskt8qXjbjU-AHnQEF2beV4wTk",
      name: "Pragathi Reddy",
      username: "Pragath",
      feedback:
        "We received our work on time,A dependable partner for cutting-edge IT solutions and support services.",
      date: "December 2025",
      number: 5,
    },
    {
      profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXnCXfW3wJCQ_5YHe5XSK8uG1s7gUO9u0yTKPH55OjxD8Ya99p_IgT6bexfZFbL9o6pg&usqp=CAU",
      name: "Raj Saxena",
      username: "JRajSaxenaS",
      feedback:
        "Amazing service! The team was incredibly professional.Consistent delivery of quality work with strong attention to detail.",
      date: "February 2025",
      number: 12,
    },
    {
      profilePic: "https://media.licdn.com/dms/image/v2/D5603AQFawm8P8LG_BA/profile-displayphoto-shrink_400_400/B56ZPug8IYG4Ag-/0/1734873435130?e=2147483647&v=beta&t=51x73FXEI21FECMS7YhOHCrQPUyG2dAu2oGKCS4--K0",
      name: "Ullas",
      username: "UllasCR",
      feedback:
        "Expert team with exceptional service. Highly recommend for IT needs,Outstanding IT solutions, reliable support, and seamless integration every time.",
      date: "November 2009",
      number: 5,
    },
  ];

  return (
    <div className="pt-6 bg-[#0C1A2A] p-6">
      <h1 className="text-3xl text-center text-white pb-5">What users say about Zoomster Hub!</h1>
      <Marquee gradient={false} speed={30} pauseOnHover>
        {feedbackData.map((feedback, index) => (
          <div key={index} className="mx-4">
            <FeedbackCard {...feedback} />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default FeedbackList;