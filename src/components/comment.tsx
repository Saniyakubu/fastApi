// import { useContextStoreProvider } from "../context/store";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
// import Typewriter from "../context/typewriter";
// const Contents = () => {
//   const { data, isLoading } = useContextStoreProvider();
//   console.log("data: ", data);
//   const results: any = data.map((item: any) => item?.data);
//   return (
//     <div>
//       <h1> heyyy {data[0]}</h1>
//       {data &&
//         data.map((items: any, index) => {
//           // console.log("items: ", items);
//           return (
//             <div key={index} className="w-10/12 py-5 mx-auto lg:w-4/5">
//               <span className="text-3xl font-bold">{items?.data?.query}</span>
//   <div className="flex flex-col gap-y-5">
//     {items?.data?.results?.map((res: any, index: number) => {
//       return (
//         <div key={index} className="mb-5 ">
//           <ul className="list-disc">
//             <li className="my-5 text-xl font-bold text-blue-200 underline hover:text-blue-300">
//               {/* <a href={res?.url}>{res?.title}</a> */}
//               <a href={res?.url}>
//                 <Typewriter text={res?.title} speed={10} />
//               </a>
//             </li>
//           </ul>
//           <Typewriter text={res?.content} speed={11} />
//         </div>
//       );
//     })}
//   </div>
//               <Typewriter text={items.data.message} speed={14} />
//             </div>
//           );
//         })}
//       {isLoading && (
//         <div className="flex items-center justify-center mt-20 text-blue-300 text-7xl">
//           <AiOutlineLoading3Quarters />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contents;
