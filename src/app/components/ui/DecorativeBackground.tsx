export default function DecorativeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-blue-50 blur-[100px] opacity-50"></div>
      <div className="absolute -bottom-20 -left-20 w-[20rem] h-[20rem] rounded-full bg-indigo-50 blur-[80px] opacity-40"></div>
      <svg className="absolute top-20 left-10 text-blue-100 w-64 h-64 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M42.7,-73.4C55.9,-67.7,67.4,-57.5,76.3,-44.5C85.2,-31.5,91.6,-15.7,90.5,-0.6C89.5,14.4,81.1,28.9,71.6,41.8C62.2,54.7,51.8,66.1,39,73.4C26.2,80.7,11.1,83.9,-3.2,88.8C-17.5,93.7,-35,100.3,-48.2,95.9C-61.4,91.6,-70.2,76.3,-76.6,60.8C-83,45.3,-87,29.7,-88.9,13.8C-90.8,-2.1,-90.6,-18.3,-84.6,-31.6C-78.6,-44.9,-66.8,-55.3,-53.5,-60.9C-40.2,-66.5,-25.4,-67.3,-11.3,-70.8C2.8,-74.3,16.9,-80.5,29.5,-79.1C42.1,-77.7,53.2,-68.7,42.7,-73.4Z" transform="translate(100 100)" />
      </svg>
      <svg className="absolute bottom-10 right-10 text-indigo-100 w-72 h-72 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M47.7,-79.1C62.3,-71.9,75.1,-60.5,83.2,-46.1C91.3,-31.7,94.7,-14.3,93.1,2.3C91.5,19,84.9,34.9,75.5,49.2C66.1,63.5,53.9,76.1,39.1,82.9C24.2,89.7,6.6,90.6,-10.4,88.3C-27.5,86,-44,80.5,-57.4,70.3C-70.8,60.1,-81.1,45.2,-86.8,28.7C-92.5,12.3,-93.6,-5.7,-89.3,-22.1C-85,-38.5,-75.3,-53.3,-62.2,-62.4C-49.1,-71.5,-32.6,-74.9,-17.2,-77.8C-1.8,-80.7,12.5,-83.1,26.8,-82.1C41.1,-81.1,55.5,-76.7,47.7,-79.1Z" transform="translate(100 100)" />
      </svg>
    </div>
  );
} 